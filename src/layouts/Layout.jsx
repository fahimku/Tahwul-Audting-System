import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'

function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const sidebarWidth = sidebarCollapsed ? '5rem' : '16rem'

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Fixed sidebar on the left - full height, doesn't scroll */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
      />

      {/* Mobile hamburger / slide-in menu */}
      <MobileMenu />

      {/* Spacer for sidebar width on desktop */}
      <div
        className="hidden lg:block flex-shrink-0 transition-all duration-300"
        // style={{ width: sidebarWidth }}
      />

      {/* Content area - flex to take remaining space, scrollable */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Sticky header */}
        <Header sidebarCollapsed={sidebarCollapsed} />

        {/* Page content - scrollable when content is long */}
        <main className="flex-1 bg-gray-50 overflow-y-auto mt-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
