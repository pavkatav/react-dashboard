import { useState, useMemo } from 'react'
import { Search, ChevronUp, ChevronDown } from 'lucide-react'
import { generateUsers } from '../lib/mockData'
import { useStore } from '../store/useStore'
import type { User } from '../types'

export default function Users() {
  const [users] = useState<User[]>(() => generateUsers(100))
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 10

  const { 
    theme,
    userSearchTerm, 
    userSortField, 
    userSortDirection, 
    setUserSearchTerm, 
    setUserSort 
  } = useStore()

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users.filter(user =>
      user.name.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearchTerm.toLowerCase())
    )

    filtered.sort((a, b) => {
      const aValue = a[userSortField]
      const bValue = b[userSortField]
      
      if (userSortDirection === 'asc') {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    })

    return filtered
  }, [users, userSearchTerm, userSortField, userSortDirection])

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage
    return filteredAndSortedUsers.slice(startIndex, startIndex + usersPerPage)
  }, [filteredAndSortedUsers, currentPage])

  const totalPages = Math.ceil(filteredAndSortedUsers.length / usersPerPage)

  const handleSort = (field: 'name' | 'email' | 'role' | 'status') => {
    const newDirection = userSortField === field && userSortDirection === 'asc' ? 'desc' : 'asc'
    setUserSort(field, newDirection)
  }

  const SortButton = ({ field, children }: { field: 'name' | 'email' | 'role' | 'status', children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center space-x-1"
      style={{ 
        color: theme === 'dark' ? '#d1d5db' : '#6b7280',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = theme === 'dark' ? '#60a5fa' : '#2563eb'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = theme === 'dark' ? '#d1d5db' : '#6b7280'
      }}
    >
      <span>{children}</span>
      {userSortField === field && (
        userSortDirection === 'asc' ? 
          <ChevronUp className="w-4 h-4" /> : 
          <ChevronDown className="w-4 h-4" />
      )}
    </button>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 
          className="text-3xl font-bold"
          style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
        >
          Users
        </h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search users..."
            value={userSearchTerm}
            onChange={(e) => setUserSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#ffffff' : '#111827',
              borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div 
        className="rounded-lg shadow overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
      >
        <table className="min-w-full">
          <thead 
            style={{ backgroundColor: theme === 'dark' ? '#374151' : '#f9fafb' }}
          >
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#6b7280' }}
              >
                <SortButton field="name">Name</SortButton>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#6b7280' }}
              >
                <SortButton field="email">Email</SortButton>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#6b7280' }}
              >
                <SortButton field="role">Role</SortButton>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#6b7280' }}
              >
                <SortButton field="status">Status</SortButton>
              </th>
            </tr>
          </thead>
          <tbody 
            className="divide-y"
            style={{ 
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
              borderColor: theme === 'dark' ? '#374151' : '#e5e7eb'
            }}
          >
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                    <div className="ml-4">
                      <div 
                        className="text-sm font-medium"
                        style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
                      >
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td 
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  {user.email}
                </td>
                <td 
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span 
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    style={{
                      backgroundColor: user.status === 'Active' 
                        ? (theme === 'dark' ? '#065f46' : '#d1fae5')
                        : (theme === 'dark' ? '#7f1d1d' : '#fee2e2'),
                      color: user.status === 'Active'
                        ? (theme === 'dark' ? '#34d399' : '#065f46')
                        : (theme === 'dark' ? '#fca5a5' : '#7f1d1d')
                    }}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div 
          className="text-sm"
          style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
        >
          Showing {((currentPage - 1) * usersPerPage) + 1} to {Math.min(currentPage * usersPerPage, filteredAndSortedUsers.length)} of {filteredAndSortedUsers.length} users
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#d1d5db' : '#374151',
              borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
            }}
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = i + 1
            const isActive = currentPage === page
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="px-3 py-1 text-sm border rounded"
                style={{
                  backgroundColor: isActive 
                    ? '#3b82f6' 
                    : (theme === 'dark' ? '#1f2937' : '#ffffff'),
                  color: isActive 
                    ? '#ffffff' 
                    : (theme === 'dark' ? '#d1d5db' : '#374151'),
                  borderColor: isActive 
                    ? '#3b82f6' 
                    : (theme === 'dark' ? '#4b5563' : '#d1d5db')
                }}
              >
                {page}
              </button>
            )
          })}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#d1d5db' : '#374151',
              borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}