import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  File01Icon,
  FileSearchIcon,
  FileVerifiedIcon,
  FileEditIcon,
  ArrowLeft02Icon,
  SortingAZ02Icon,
  Sent02Icon,
} from '@hugeicons/core-free-icons'
import leaderImage from '../assets/leader-image.jpg'

function Perspectives() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')

  const [evidenceData, setEvidenceData] = useState([
    {
      number: '5.4.1.1',
      name: 'Digital_Transformation_Plan.Pdf',
      lead: 'Ahmed Khaled',
      preparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Approved',
    },
    {
      number: '5.4.1.2',
      name: 'KPI_Framework.Xlsx',
      lead: 'Mona Hamed',
      preparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review',
    },
    {
      number: '5.4.1.3',
      name: 'Roadmap_Version1.Docx',
      lead: 'Rami AlSharif',
      preparer: 'Rami AlSharif',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Approved',
    },
  ])

  const handleSort = (column) => {
    let newDirection = 'asc'
    if (sortColumn === column) {
      newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    }

    setSortColumn(column)
    setSortDirection(newDirection)

    const sorted = [...evidenceData].sort((a, b) => {
      let aValue = a[column]
      let bValue = b[column]

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (newDirection === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    })

    setEvidenceData(sorted)
  }

  const getStatusColor = (status) => {
    if (status === 'Approved') {
      return { bg: '#34C7591A', text: '#34C759' }
    }
    if (status === 'Pending Review') {
      return { bg: '#FFCC001A', text: '#FFCC00' }
    }
    return { bg: '#F0F4F8', text: '#64748B' }
  }

  return (
    <div className="px-4 lg:px-6 pt-0 pb-6 bg-gray-50 min-h-screen">
      {/* Back Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
      >
        <HugeiconsIcon
          icon={ArrowLeft02Icon}
          size={20}
          color="#1D3557"
          className="text-gray-900"
        />
        <span
          className="text-base font-bold text-gray-900 mb-1"
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '16px',
            letterSpacing: '0%',
            color: '#1D3557',
          }}
        >
          Digital Transformation Strategic Planning
        </span>
      </button>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* Tag */}
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
              Strategy & Planning
            </span>

            {/* Title */}
            <h1
              className="text-base font-bold text-gray-900 mb-2"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '16px',
                letterSpacing: '0%',
              }}
            >
              Digital Transformation Strategic Planning
            </h1>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
              Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
            </p>
          </div>

          {/* Progress Circle */}
          <div className="flex-shrink-0 ml-4">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Evidence */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <HugeiconsIcon
                icon={File01Icon}
                size={32}
                color="#EF4444"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">4</p>
              <p className="text-sm text-gray-600">Total Evidence</p>
            </div>
          </div>
        </div>

        {/* Under Review Evidence */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <HugeiconsIcon
                icon={FileSearchIcon}
                size={32}
                color="#EF4444"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">3</p>
              <p className="text-sm text-gray-600">Under Review Evidence</p>
            </div>
          </div>
        </div>

        {/* In Progress Evidence */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <HugeiconsIcon
                icon={FileEditIcon}
                size={32}
                color="#EF4444"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">2</p>
              <p className="text-sm text-gray-600">In Progress Evidence</p>
            </div>
          </div>
        </div>

        {/* Completed Evidence */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <HugeiconsIcon
                icon={FileVerifiedIcon}
                size={32}
                color="#EF4444"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">1</p>
              <p className="text-sm text-gray-600">Completed Evidence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Separate White Box */}
      <div className="mb-4">
        <div
          className="inline-flex p-1"
          style={{ backgroundColor: '#E0E8ED80', borderRadius: '8px' }}
        >
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === 'overview'
                ? 'text-gray-900 shadow-sm'
                : 'text-gray-500'
            }`}
            style={{
              fontFamily: "'Cairo', sans-serif",
              backgroundColor: activeTab === 'overview' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'overview' ? '#2B3855' : '#6C757D',
              borderRadius: '8px',
            }}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('evidence')}
            className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === 'evidence'
                ? 'text-gray-900 shadow-sm'
                : 'text-gray-500'
            }`}
            style={{
              fontFamily: "'Cairo', sans-serif",
              backgroundColor: activeTab === 'evidence' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'evidence' ? '#2B3855' : '#6C757D',
              borderRadius: '8px',
            }}
          >
            Evidence
          </button>
        </div>
      </div>

      {/* Tab Content - Separate White Box */}
      <div className="bg-white shadow-sm p-6" style={{ borderRadius: '8px' }}>
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Two-column layout for Overview content */}
            <div className="flex gap-0">
              {/* Left Column - Labels */}
              <div className="w-1/4 flex-shrink-0 space-y-4 pr-4">
                {/* Objective */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Objective</p>
                </div>

                {/* Implementation Requirements */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Implementation Requirements</p>
                </div>

                {/* Evidence Documents */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Evidence Documents</p>
                </div>

                {/* Related Regulations */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Related Regulations</p>
                </div>

                {/* Scope */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Scope</p>
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-px bg-gray-300 flex-shrink-0" />

              {/* Right Column - Content */}
              <div className="flex-1 space-y-4 pl-4">
                {/* Objective Content */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700">
                    Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.
                  </p>
                </div>

                {/* Implementation Requirements Content */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700 mb-2">
                    Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-none">
                    <li>
                      <span className="font-medium">A.</span> The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.
                    </li>
                    <li>
                      <span className="font-medium">B.</span> Strategic Initiatives, Programs, And Performance Indicators.
                    </li>
                    <li>
                      <span className="font-medium">C.</span> A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.
                    </li>
                    <li>
                      <span className="font-medium">D.</span> Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.
                    </li>
                  </ul>
                </div>

                {/* Evidence Documents Content */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700">
                    Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.
                  </p>
                </div>

                {/* Related Regulations Content */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700">
                    Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).
                  </p>
                </div>

                {/* Scope Content */}
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700">All Government Entities.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'evidence' && (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('number')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Document Number
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'number' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Document Name
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'name' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('lead')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Document Lead
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'lead' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('preparer')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Document Preparer
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'preparer' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('date')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Date
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'date' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('dueDate')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Due Date
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'dueDate' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('status')}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Status
                      <HugeiconsIcon
                        icon={SortingAZ02Icon}
                        size={16}
                        color={sortColumn === 'status' ? '#1D3557' : '#64748B'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {evidenceData.map((row, index) => {
                  const statusColors = getStatusColor(row.status)
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.number}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.lead}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.preparer}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.date}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.dueDate}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: statusColors.bg,
                            color: statusColors.text,
                          }}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Comments and Recent Activities Section - Separate White Boxes */}
      {activeTab === 'evidence' && (
        <div className="grid grid-cols-12 gap-4 mt-4">
          {/* Comments Section - 8 columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white shadow-sm p-6" style={{ borderRadius: '8px' }}>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Comments</h3>
              
              {/* Existing Comments */}
              <div className="space-y-4 mb-6">
                {/* Comment 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-700 font-semibold text-sm">E</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-semibold text-gray-900">Sara Ibrahim</p>
                        <span className="text-xs text-gray-500 whitespace-nowrap">2025-08-05</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Ensure The Plan Includes A Clear Governance Model.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-700 font-semibold text-sm">M</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-semibold text-gray-900">Mona Hamed</p>
                        <span className="text-xs text-gray-500 whitespace-nowrap">2025-08-05</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Ensure The Plan Includes A Clear Governance Model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Input */}
              <div className="space-y-3">
                <textarea
                  placeholder="Write a comment..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20 focus:border-[#1D3557]"
                  rows={4}
                />
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 text-white font-medium rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#1D3557' }}
                >
                  <HugeiconsIcon
                    icon={Sent02Icon}
                    size={18}
                    color="#FFFFFF"
                    strokeWidth={1.5}
                  />
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activities Section - 4 columns */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white shadow-sm p-6" style={{ borderRadius: '8px' }}>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activities</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: '#DB1F26' }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-gray-700">
                        Roadmap_Version1.Docx Uploaded By Rami AlSharif
                      </p>
                      <span className="text-xs text-gray-500 whitespace-nowrap">5 Mins Ago</span>
                    </div>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: '#DB1F26' }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-gray-700">
                        KPI_Framework.Xlsx Uploaded By Mona Hamed
                      </p>
                      <span className="text-xs text-gray-500 whitespace-nowrap">20 Mins Ago</span>
                    </div>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: '#DB1F26' }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-gray-700">
                        Digital_Transformation_Plan.Pdf Approved By Advisory Team
                      </p>
                      <span className="text-xs text-gray-500 whitespace-nowrap">1 Hour Ago</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Leaders Section - Separate White Box */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Leaders</h3>
          <div className="flex gap-4">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
              <img
                src={leaderImage}
                alt="Leader"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">Ahmed Al-Ali</p>
                <p className="text-xs text-gray-600">Strategy Perspective</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
              <img
                src={leaderImage}
                alt="Leader"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">Ahmed Al-Ali</p>
                <p className="text-xs text-gray-600">Strategy Perspective</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Perspectives
