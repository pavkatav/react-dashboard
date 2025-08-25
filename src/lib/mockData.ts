import { faker } from '@faker-js/faker'
import type { User, KPIData, ChartData, ActivityItem } from '../types'

export const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['Admin', 'User', 'Manager'] as const),
    status: faker.helpers.arrayElement(['Active', 'Inactive'] as const),
    avatar: faker.image.avatar()
  }))
}

export const generateKPIData = (): KPIData[] => [
  {
    title: 'Total Users',
    value: '12,345',
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'Sales',
    value: '$45,678',
    change: '+5%',
    trend: 'up'
  },
  {
    title: 'Revenue',
    value: '$123,456',
    change: '-2%',
    trend: 'down'
  }
]

export const generateRevenueData = (): ChartData[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.map(month => ({
    name: month,
    value: faker.number.int({ min: 10000, max: 50000 })
  }))
}

export const generateSignupData = (): ChartData[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  return months.map(month => ({
    name: month,
    value: faker.number.int({ min: 100, max: 800 })
  }))
}

export const generateRoleData = (): ChartData[] => [
  { name: 'Admin', value: 15 },
  { name: 'User', value: 75 },
  { name: 'Manager', value: 10 }
]

export const generateRecentActivity = (): ActivityItem[] => {
  return Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    user: faker.person.fullName(),
    action: faker.helpers.arrayElement([
      'logged in',
      'created a project',
      'updated profile',
      'deleted a file',
      'invited a user'
    ]),
    timestamp: faker.date.recent({ days: 7 }).toISOString()
  }))
}