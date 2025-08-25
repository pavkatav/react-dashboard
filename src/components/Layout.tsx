import { Outlet } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useEffect } from 'react'
import Sidebar from './Sidebar'

export default function Layout() {
  const { theme } = useStore()

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
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main 
          className="flex-1 overflow-x-hidden overflow-y-auto p-6 transition-colors"
          style={{ 
            backgroundColor: theme === 'dark' ? '#111827' : '#f9fafb' 
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}