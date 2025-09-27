import { Outlet } from 'react-router'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export function PrivateLayout() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-charcoal-950 transition-colors duration-300">
      <Header />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {/* Page Content */}
            <div className="mt-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
