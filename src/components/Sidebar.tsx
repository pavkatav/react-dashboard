import { Link, useLocation } from 'react-router-dom'
import { Home, Users, BarChart3, Settings, Menu, X } from 'lucide-react'
import { useStore } from '../store/useStore'

const menuItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/users', label: 'Users', icon: Users },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
]

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const location = useLocation()
  const { theme } = useStore()

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md md:hidden transition-colors"
        style={{
          backgroundColor: theme === 'dark' ? '#374151' : '#f3f4f6',
          color: theme === 'dark' ? '#ffffff' : '#1f2937'
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div 
        className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 
          fixed md:static 
          inset-y-0 left-0 
          w-64 h-screen 
          shadow-lg transition-all duration-300 ease-in-out 
          z-50 md:z-auto
        `}
        style={{ 
          backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' 
        }}
      >
        <div className="p-4 md:p-6 pt-16 md:pt-6">
          <h1 
            className="text-xl md:text-2xl font-bold transition-colors"
            style={{ 
              color: theme === 'dark' ? '#ffffff' : '#1f2937' 
            }}
          >
            Dashboard
          </h1>
        </div>
        <nav className="mt-4 md:mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-4 md:px-6 py-3 transition-all duration-200"
                style={{
                  color: isActive 
                    ? (theme === 'dark' ? '#93c5fd' : '#2563eb')
                    : (theme === 'dark' ? '#d1d5db' : '#374151'),
                  backgroundColor: isActive 
                    ? (theme === 'dark' ? '#1e3a8a' : '#eff6ff')
                    : 'transparent',
                  borderRight: isActive ? '4px solid #2563eb' : 'none'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-sm md:text-base">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}