import { Link, useLocation } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  File01Icon,
  MedicalFileIcon,
  Profile02Icon,
  ChartBarLineIcon,
  UserMultiple02Icon,
  Home09Icon,
  Home09FreeIcons,
} from '@hugeicons/core-free-icons'
import mainLogo from '../assets/main-logo.png'
import menuCollapseIcon from '../assets/menu-collapse-icon.png'

const SIDEBAR_BG = '#1D3557'
const MENU_COLOR = '#7B9FC3'
const MENU_HOVER_BG = '#98AEC01A'
const MENU_ACTIVE_BG = '#98AEC01A'
const MENU_ACTIVE_TEXT = '#FFFFFF'

const menuIconMap = [
  { path: '/', icon: Home09Icon, label: 'Dashboard' },
  { path: '/perspectives', icon: MedicalFileIcon, label: 'Perspectives' },
  { path: '/tasks', icon: Profile02Icon, label: 'Tasks' },
  { path: '/documents', icon: File01Icon, label: 'Documents' },
  { path: '/reports', icon: ChartBarLineIcon , label: 'Reports' },
  { path: '/users', icon: UserMultiple02Icon, label: 'Users & Roles' },
]

function Sidebar({ collapsed, onToggleCollapse }) {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div
      className="hidden lg:flex fixed left-0 top-0 bottom-0 flex-col text-white shadow-2xl z-50 transition-all duration-300 relative"
      style={{
        width: collapsed ? '5rem' : '16rem',
        backgroundColor: SIDEBAR_BG,
        height: '100vh',
      }}
    >
      {/* Logo + Collapse icon (top right of sidebar) */}
      <div
        className="flex items-center justify-between border-b shrink-0 transition-all duration-300"
        style={{
          borderColor: 'rgba(255,255,255,0.1)',
          padding: collapsed ? '1rem' : '1rem 0.75rem 1rem 1.5rem',
        }}
      >
        <div className="flex items-center min-w-0 flex-1">
          {collapsed ? (
            <img
              src={mainLogo}
              alt="Tahwul"
              className="object-contain mx-auto"
              style={{ width: '100px', height: '40px' }}
            />
          ) : (
            <>
              <img
                src={mainLogo}
                alt="Tahwul"
                className="object-contain shrink-0 mr-3"
                style={{ width: '100px', height: '40px' }}
              />
              
            </>
          )}
        </div>
      </div>

      {/* Collapse button – circular, aligned with logo/search bar */}
      
        <img
          src={menuCollapseIcon}
          onClick={onToggleCollapse}
          className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-lg absolute -right-4 transition-transform duration-200 cursor-pointer"
          style={{ top: '1.25rem' }}
          alt="Toggle sidebar"
        />

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuIconMap.map((item) => {
            const active = isActive(item.path)
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  title={collapsed ? item.label : undefined}
                  className="flex items-center rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: active ? MENU_ACTIVE_BG : 'transparent',
                    color: active ? MENU_ACTIVE_TEXT : MENU_COLOR,
                    ...(collapsed ? { justifyContent: 'center', padding: '0.75rem' } : { padding: '0.75rem 1rem' }),
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = MENU_HOVER_BG
                      e.currentTarget.style.color = '#FFFFFF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = MENU_COLOR
                    }
                  }}
                >
                  <span className="shrink-0 flex items-center justify-center" style={{ width: '1.5rem' }}>
                    <HugeiconsIcon
                      icon={item.icon}
                      size={20}
                      color={active ? MENU_ACTIVE_TEXT : 'currentColor'}
                      strokeWidth={1.5}
                    />
                  </span>
                  {!collapsed && <span className="text-sm ml-3 truncate">{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
