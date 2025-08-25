import { Link, useLocation } from 'react-router-dom'
import { Home, Users, BarChart3, Settings } from 'lucide-react'
import { useStore } from '../store/useStore'

const menuItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/users', label: 'Users', icon: Users },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const location = useLocation()
  const { theme } = useStore()

  return (
    <div 
      className="w-64 h-screen shadow-lg transition-colors"
      style={{ 
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' 
      }}
    >
      <div className="p-6">
        <h1 
          className="text-2xl font-bold transition-colors"
          style={{ 
            color: theme === 'dark' ? '#ffffff' : '#1f2937' 
          }}
        >
          Dashboard
        </h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-6 py-3 transition-all duration-200"
              style={{
                color: isActive 
                  ? (theme === 'dark' ? '#93c5fd' : '#2563eb')
                  : (theme === 'dark' ? '#d1d5db' : '#374151'),
                backgroundColor: isActive 
                  ? (theme === 'dark' ? '#1e3a8a' : '#eff6ff')
                  : 'transparent',
                borderRight: isActive ? '4px solid #2563eb' : 'none'
              }}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}