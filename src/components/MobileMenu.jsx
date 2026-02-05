import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Home01Icon,
  Edit02Icon,
  Task01Icon,
  File01Icon,
  ChartHistogramIcon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons'
import { FiMenu, FiX } from 'react-icons/fi'
import mainLogo from '../assets/main-logo.png'

const SIDEBAR_BG = '#1D3557'
const MENU_COLOR = '#7B9FC3'
const MENU_HOVER_BG = '#98AEC01A'
const MENU_ACTIVE_BG = '#98AEC01A'
const MENU_ACTIVE_TEXT = '#1D3557'

const menuIconMap = [
  { path: '/', icon: Home01Icon, label: 'Dashboard' },
  { path: '/perspectives', icon: Edit02Icon, label: 'Perspectives' },
  { path: '/tasks', icon: Task01Icon, label: 'Tasks' },
  { path: '/documents', icon: File01Icon, label: 'Documents' },
  { path: '/reports', icon: ChartHistogramIcon, label: 'Reports' },
  { path: '/users', icon: UserGroupIcon, label: 'Users & Roles' },
]

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-lg shadow-lg"
          style={{ backgroundColor: SIDEBAR_BG, color: MENU_COLOR }}
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="lg:hidden fixed left-0 top-0 h-full w-64 shadow-2xl z-50"
            style={{ backgroundColor: SIDEBAR_BG }}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={mainLogo} alt="Tahwul" className="h-10 w-10 object-contain" />
                  <div>
                    <h1 className="text-lg font-bold text-white">Tahwul</h1>
                    <p className="text-xs" style={{ color: MENU_COLOR }}>Auditing System</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white p-2">
                  <FiX className="text-xl" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                  {menuIconMap.map((item) => {
                    const active = isActive(item.path)
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-4 py-3 rounded-lg transition-all duration-200"
                          style={{
                            backgroundColor: active ? MENU_ACTIVE_BG : 'transparent',
                            color: active ? MENU_ACTIVE_TEXT : MENU_COLOR,
                          }}
                        >
                          <span className="shrink-0 flex items-center justify-center mr-3" style={{ width: '1.5rem' }}>
                            <HugeiconsIcon
                              icon={item.icon}
                              size={20}
                              color={active ? MENU_ACTIVE_TEXT : 'currentColor'}
                              strokeWidth={1.5}
                            />
                          </span>
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MobileMenu
