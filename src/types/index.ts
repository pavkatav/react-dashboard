export interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'User' | 'Manager'
  status: 'Active' | 'Inactive'
  avatar: string
}

export interface KPIData {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
}

export interface ChartData {
  name: string
  value: number
}

export interface ActivityItem {
  id: string
  user: string
  action: string
  timestamp: string
}