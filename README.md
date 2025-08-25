# React Dashboard

A modern, professional SaaS-style dashboard built with React, TypeScript, TailwindCSS, and Vite. This dashboard showcases routing, charts, tables, fully functional dark mode, and search/sort features - perfect for a portfolio project.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, TailwindCSS v4
- **Responsive Design**: Fully responsive layout that works on all devices
- **Complete Dark Mode**: Fully functional dark/light theme toggle with system preference detection and persistent storage
- **Interactive Charts**: Beautiful charts using Recharts (Line, Bar, Pie charts)
- **Data Management**: Search, sort, and paginate through user data
- **State Management**: Zustand for lightweight state management with persistence
- **Mock Data**: Realistic fake data generated with Faker.js
- **Clean Architecture**: Well-organized file structure and TypeScript types
- **Theme Persistence**: Theme preference saved and restored across sessions

## 📋 Pages

### Dashboard
- KPI cards showing key metrics (Users, Sales, Revenue)
- Interactive line and bar charts for monthly revenue
- Recent activity feed
- Responsive grid layout

### Users
- Data table with user information (name, email, role, status)
- Real-time search functionality
- Column sorting (ascending/descending)
- Client-side pagination
- User avatars and status indicators

### Analytics
- Line chart showing user signups over time
- Pie chart displaying user role distribution
- Additional analytics cards with key metrics

### Settings
- **Fully Functional Dark/Light Mode Toggle**: Complete theme switching that updates all UI elements instantly
- **System Theme Detection**: Automatically detects and uses system dark mode preference on first load
- **Theme Persistence**: Theme choice is saved and restored across browser sessions
- Profile settings form with validation
- Notification preferences
- Persistent settings storage via Zustand middleware

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 20.19+ or 22.12+ (required for TailwindCSS v4)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Lint the Code

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main app layout with sidebar
│   └── Sidebar.tsx     # Navigation sidebar
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard page
│   ├── Users.tsx       # Users management page
│   ├── Analytics.tsx   # Analytics and charts page
│   └── Settings.tsx    # Settings and preferences page
├── store/              # State management
│   └── useStore.ts     # Zustand store configuration
├── lib/                # Utility functions and helpers
│   └── mockData.ts     # Mock data generators
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared type definitions
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Dark Mode Implementation
The dark mode is implemented using:
- **TailwindCSS v4** with `darkMode: 'class'` configuration
- **Inline styles** for immediate theme switching (bypasses CSS compilation issues)
- **Zustand persistence** for theme state management
- **System preference detection** on first load

### Theme Colors
The dashboard uses a carefully crafted color system:
- **Light mode**: Clean whites and grays with blue accents
- **Dark mode**: Deep grays and blacks with proper contrast ratios
- **Status colors**: Green for active/positive, red for inactive/negative
- **Interactive elements**: Blue accents for buttons and links

### Mock Data
To customize the mock data, edit the generators in `src/lib/mockData.ts`. You can adjust:
- Number of generated users
- KPI values and trends
- Chart data ranges
- Activity types

## 🔧 Technologies Used

- **React 19** - Latest React with improved performance
- **TypeScript** - Full type safety throughout the application
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS v4** - Modern utility-first CSS framework
- **React Router** - Client-side routing with nested layouts
- **Recharts** - Beautiful, responsive chart library
- **Zustand** - Lightweight state management with persistence middleware
- **Faker.js** - Realistic mock data generation
- **Lucide React** - Consistent, beautiful icon library

## 🌟 Key Implementation Details

### Theme System
- **Complete Coverage**: Every UI element responds to theme changes
- **Instant Switching**: No CSS compilation delay - changes apply immediately
- **Proper Contrast**: All colors meet accessibility standards
- **Persistent State**: Theme choice survives browser refreshes and sessions

### State Management
- **Zustand Store**: Manages theme, user preferences, and search/sort state
- **Persistence Middleware**: Automatically saves state to localStorage
- **Type Safety**: Full TypeScript integration with proper typing

### Performance
- **Code Splitting**: Pages loaded on demand via React Router
- **Optimized Rendering**: Proper use of useMemo and useCallback
- **Efficient Charts**: Recharts with responsive containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- TailwindCSS team for the excellent CSS framework
- Recharts team for the beautiful chart components
- Faker.js for realistic mock data generation
