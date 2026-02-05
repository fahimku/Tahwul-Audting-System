import { useState, useRef, useEffect } from 'react'
import { FiSearch, FiBell, FiChevronDown, FiLogOut } from 'react-icons/fi'

function Header({ sidebarCollapsed }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className="sticky top-0 h-16 bg-white border-b border-gray-200 shadow-sm z-40 flex items-center justify-between gap-4 px-4 lg:px-6"
    >
      {/* Search - center / left */}
      <div className="flex-1 max-w-2xl">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#1D3557]/20 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Right: notification bell + user dropdown */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Notifications"
        >
          <FiBell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#1D3557] flex items-center justify-center text-white text-sm font-medium shrink-0">
              M
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">Mohamed</span>
            <FiChevronDown
              className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1 py-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <button
                type="button"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center w-full gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-none first:rounded-t-lg"
              >
                <FiLogOut className="w-4 h-4 text-gray-500" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
