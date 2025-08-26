import { Outlet } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

export default function Layout() {
  const { theme } = useStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    
    console.log('Theme changed to:', theme, 'HTML classes:', root.classList.toString())
  }, [theme])

  return (
    <div 
      className="flex h-screen transition-colors"
      style={{ 
        backgroundColor: theme === 'dark' ? '#111827' : '#f9fafb' 
      }}
    >
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main 
          className="flex-1 overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 transition-colors"
          style={{ 
            backgroundColor: theme === 'dark' ? '#111827' : '#f9fafb' 
          }}
        >
          <Outlet />
        </main>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}