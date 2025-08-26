import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { generateKPIData, generateRevenueData, generateRecentActivity } from '../lib/mockData'
import { useStore } from '../store/useStore'

export default function Dashboard() {
  const kpiData = generateKPIData()
  const revenueData = generateRevenueData()
  const recentActivity = generateRecentActivity()
  const { theme } = useStore()

  return (
    <div className="space-y-4 md:space-y-6 pt-12 md:pt-0">
      <h1 
        className="text-2xl md:text-3xl font-bold"
        style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
      >
        Dashboard
      </h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {kpiData.map((kpi, index) => (
          <div 
            key={index} 
            className="p-4 md:p-6 rounded-lg shadow"
            style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p 
                  className="text-xs md:text-sm font-medium"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
                >
                  {kpi.title}
                </p>
                <p 
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
                >
                  {kpi.value}
                </p>
              </div>
              <div className={`flex items-center ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                <span className="text-xs md:text-sm font-medium">{kpi.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        {/* Revenue Chart */}
        <div 
          className="p-4 md:p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h2 
            className="text-base md:text-lg font-semibold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                fontSize={12}
                hide={window.innerWidth < 640}
              />
              <YAxis 
                fontSize={12}
                hide={window.innerWidth < 640}
              />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div 
          className="p-4 md:p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h2 
            className="text-base md:text-lg font-semibold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            Sales Overview
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                fontSize={12}
                hide={window.innerWidth < 640}
              />
              <YAxis 
                fontSize={12}
                hide={window.innerWidth < 640}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div 
        className="p-4 md:p-6 rounded-lg shadow"
        style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
      >
        <h2 
          className="text-base md:text-lg font-semibold mb-4"
          style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
        >
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2">
              <div className="flex-1">
                <span 
                  className="font-medium text-sm md:text-base"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
                >
                  {activity.user}
                </span>
                <span 
                  className="ml-2 text-xs md:text-sm"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
                >
                  {activity.action}
                </span>
              </div>
              <span 
                className="text-xs md:text-sm flex-shrink-0"
                style={{ color: theme === 'dark' ? '#6b7280' : '#6b7280' }}
              >
                {new Date(activity.timestamp).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}