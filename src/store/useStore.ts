import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StoreState {
  theme: 'light' | 'dark'
  userSearchTerm: string
  userSortField: 'name' | 'email' | 'role' | 'status'
  userSortDirection: 'asc' | 'desc'
  toggleTheme: () => void
  setUserSearchTerm: (term: string) => void
  setUserSort: (field: 'name' | 'email' | 'role' | 'status', direction: 'asc' | 'desc') => void
}


// Helper function to detect system theme preference
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      theme: getSystemTheme(),
      userSearchTerm: '',
      userSortField: 'name',
      userSortDirection: 'asc',
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light'
        console.log('Toggling theme from', get().theme, 'to', newTheme)
        set({ theme: newTheme })
      },
      setUserSearchTerm: (term: string) => set({ userSearchTerm: term }),
      setUserSort: (field, direction) => set({ 
        userSortField: field, 
        userSortDirection: direction 
      })
    }),
    {
      name: 'dashboard-store',
      partialize: (state) => ({ 
        theme: state.theme,
        userSearchTerm: state.userSearchTerm,
        userSortField: state.userSortField,
        userSortDirection: state.userSortDirection
      }),
      onRehydrateStorage: () => (state) => {
        // If no stored theme, use system preference
        if (state && !state.theme) {
          state.theme = getSystemTheme()
        }
      }
    }
  )
)