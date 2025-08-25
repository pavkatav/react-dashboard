import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { generateSignupData, generateRoleData } from '../lib/mockData'
import { useStore } from '../store/useStore'

const COLORS = ['#3B82F6', '#10B981', '#F59E0B']

export default function Analytics() {
  const signupData = generateSignupData()
  const roleData = generateRoleData()
  const { theme } = useStore()

  return (
    <div className="space-y-6">
      <h1 
        className="text-3xl font-bold"
        style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
      >
        Analytics
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Signups Chart */}
        <div 
          className="p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h2 
            className="text-lg font-semibold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            User Signups Over Time
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={signupData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Roles Pie Chart */}
        <div 
          className="p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h2 
            className="text-lg font-semibold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            User Roles Distribution
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={roleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {roleData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          className="p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h3 
            className="text-sm font-medium"
            style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
          >
            Average Session Duration
          </h3>
          <p 
            className="text-2xl font-bold mt-2"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            12m 34s
          </p>
          <p className="text-sm text-green-500 mt-1">+8% from last month</p>
        </div>
        
        <div 
          className="p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h3 
            className="text-sm font-medium"
            style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
          >
            Page Views
          </h3>
          <p 
            className="text-2xl font-bold mt-2"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            1,234,567
          </p>
          <p className="text-sm text-green-500 mt-1">+15% from last month</p>
        </div>
        
        <div 
          className="p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h3 
            className="text-sm font-medium"
            style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
          >
            Conversion Rate
          </h3>
          <p 
            className="text-2xl font-bold mt-2"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            3.2%
          </p>
          <p className="text-sm text-red-500 mt-1">-2% from last month</p>
        </div>
      </div>
    </div>
  )
}