import { useState, useRef, useEffect } from 'react'
import { FiSearch, FiChevronDown, FiLogOut, FiBell } from 'react-icons/fi'
import profileImage from '../assets/profile-image.jpg'

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
      className="sticky top-0 h-16 bg-white border-b border-gray-200 shadow-sm z-40 grid grid-cols-12 items-center gap-4 px-4 lg:px-6"
    >
      {/* Search - 4 columns */}
      <div className="col-span-12 md:col-span-4">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none focus:border-[#1D3557] focus:bg-white focus:ring-2 focus:ring-[#1D3557]/10 hover:border-gray-300"
            style={{ outline: 'none' }}
          />
        </div>
      </div>

      {/* Right: notification bell + user dropdown - remaining columns */}
      <div className="col-span-12 md:col-span-8 flex items-center justify-end gap-3">
        <button
          type="button"
          className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Notifications"
        >
          
                    <FiBell className="w-5 h-5" />

          {/* <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" /> */}
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={profileImage}
              alt="Mohamed"
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
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
