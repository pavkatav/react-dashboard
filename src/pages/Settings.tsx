import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useStore } from "../store/useStore";

export default function Settings() {
  const { theme, toggleTheme } = useStore();
  console.log("zzz", theme);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Acme Corp",
    role: "Administrator",
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4 md:space-y-6 pt-12 md:pt-0">
      <h1 
        className="text-2xl md:text-3xl font-bold"
        style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
      >
        Settings
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        {/* Theme Settings */}
        <div 
          className="p-4 md:p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h2 
            className="text-base md:text-lg font-semibold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            Theme Settings
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
              <span 
                className="text-sm md:text-base"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
              >
                {theme === "light" ? "Light Mode" : "Dark Mode"}
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                theme === "dark" ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  theme === "dark" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Profile Settings */}
        <div 
          className="p-4 md:p-6 rounded-lg shadow"
          style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
        >
          <h2 
            className="text-base md:text-lg font-semibold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            Profile Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label 
                className="block text-xs md:text-sm font-medium mb-1"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
              >
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileChange("name", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                style={{
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
                  color: theme === 'dark' ? '#ffffff' : '#111827',
                  borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
                }}
              />
            </div>

            <div>
              <label 
                className="block text-xs md:text-sm font-medium mb-1"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
              >
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileChange("email", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                style={{
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
                  color: theme === 'dark' ? '#ffffff' : '#111827',
                  borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
                }}
              />
            </div>

            <div>
              <label 
                className="block text-xs md:text-sm font-medium mb-1"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
              >
                Company
              </label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => handleProfileChange("company", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                style={{
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
                  color: theme === 'dark' ? '#ffffff' : '#111827',
                  borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
                }}
              />
            </div>

            <div>
              <label 
                className="block text-xs md:text-sm font-medium mb-1"
                style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
              >
                Role
              </label>
              <select
                value={profile.role}
                onChange={(e) => handleProfileChange("role", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                style={{
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
                  color: theme === 'dark' ? '#ffffff' : '#111827',
                  borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db'
                }}
              >
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm md:text-base">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Additional Settings */}
      <div 
        className="p-4 md:p-6 rounded-lg shadow"
        style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}
      >
        <h2 
          className="text-base md:text-lg font-semibold mb-4"
          style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
        >
          Preferences
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span 
              className="text-sm md:text-base"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              Email Notifications
            </span>
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <span 
              className="text-sm md:text-base"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              Push Notifications
            </span>
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <span 
              className="text-sm md:text-base"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              Weekly Reports
            </span>
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
