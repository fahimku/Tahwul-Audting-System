import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { PiCaretDown } from 'react-icons/pi'
import {
  ChartBarLineIcon,
  Folder01Icon,
  FolderCheckIcon,
  File01Icon,
  FileVerifiedIcon,
  FileUploadIcon,
} from '@hugeicons/core-free-icons'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import leader1Image from '../assets/leader1.jpg'
import leader2Image from '../assets/leader2.jpg'
import leader3Image from '../assets/leader3.jpg'

function Dashboard() {
  const [selectedYear, setSelectedYear] = useState('2026')

  // Timeline data
  const timelineEvents = [
    { date: 'Mar 17', description: 'Kickoff Workshop', isCompleted: true },
    { date: 'March 18', description: 'Data Collection', isCompleted: true },
    { date: 'May 8', description: 'Initial Phase', isCompleted: false },
    { date: 'May 9-July 12', description: 'Verification', isCompleted: false },
    { date: 'July 13', description: 'Completion Reviews', isCompleted: false },
    { date: 'August 21', description: 'Cycle Conclusion', isCompleted: false },
  ]

  // KPI Cards data
  const kpiCards = [
    { value: '78.65%', label: 'Overall Progress', icon: ChartBarLineIcon },
    { value: '95', label: 'Total Criteria', icon: Folder01Icon },
    { value: '52', label: 'Completed Criteria', icon: FolderCheckIcon },
    { value: '386', label: 'Evidence Documents', icon: File01Icon },
    { value: '302', label: 'Evidence (Completed)', icon: FileVerifiedIcon },
    { value: '258', label: 'Uploaded To DGA', icon: FileUploadIcon },
  ]

  // Progress Status categories (matches design: Not Started=gray, In Progress=orange, Completed=green, Partially=light-blue, Fully=dark-blue, Delayed=red)
  const progressCategories = [
    {
      title: 'Strategy And Planning',
      percentage: '97.78%',
      subCategories: [
        { name: 'Digital Transformation', numbers: [1, 2, 3], colors: ['green', 'green', 'green'] },
        { name: 'Digital Governance', numbers: [1, 2, 3], colors: ['green', 'green', 'orange'] },
        { name: 'Enterprise Architecture', numbers: [1, 2, 3, 4], colors: ['green', 'green', 'green', 'orange'] },
      ],
    },
    {
      title: 'Organization And Culture',
      percentage: '70.83%',
      subCategories: [
        { name: 'Digital Culture And Environment', numbers: [1, 2, 3], colors: ['green', 'orange', 'orange'] },
        { name: 'Leadership Development', numbers: [1, 2, 3, 4], colors: ['green', 'green', 'green', 'green'] },
        { name: 'Skills & Capacity Building', numbers: [1, 2, 3], colors: ['orange', 'orange', 'orange'] },
      ],
    },
    {
      title: 'Operations And Execution',
      percentage: '80.00%',
      subCategories: [
        { name: 'Business Processes', numbers: [1, 2, 3, 4], colors: ['orange', 'orange', 'orange', 'orange'] },
      ],
    },
    {
      title: 'Business Continuity',
      percentage: '90.59%',
      subCategories: [
        { name: 'Risk Management', numbers: [1, 2, 3, 4, 5], colors: ['green', 'green', 'green', 'green', 'green'] },
        { name: 'Business Continuity', numbers: [1, 2, 3, 4, 5, 6, 7], colors: ['green', 'gray', 'gray', 'gray', 'gray', 'gray', 'green'] },
      ],
    },
    {
      title: 'Information Technology',
      percentage: '75.00%',
      subCategories: [
        { name: 'Support Systems', numbers: [1, 2, 3, 4, 5], colors: ['light-blue', 'light-blue', 'dark-blue', 'light-blue', 'light-blue'] },
        { name: 'IT Infrastructure', numbers: [1, 2, 3, 4, 5, 6, 7], colors: ['light-blue', 'light-blue', 'light-blue', 'light-blue', 'dark-blue', 'dark-blue', 'light-blue'] },
        { name: 'Cloud Infrastructure', numbers: [1, 2, 3], colors: ['light-blue', 'light-blue', 'light-blue'] },
      ],
    },
    {
      title: 'Comprehensive Governance',
      percentage: '64.44%',
      subCategories: [
        { name: 'Governance Platforms', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9], colors: ['green', 'green', 'gray', 'gray', 'green', 'green', 'green', 'green', 'green'] },
      ],
    },
    {
      title: 'Channels And Services',
      percentage: '100%',
      subCategories: [
        { name: 'Service Quality', numbers: [1, 2, 3], colors: ['green', 'green', 'green'] },
        { name: 'Digital Channels', numbers: [1, 2, 3, 4], colors: ['green', 'green', 'green', 'green'] },
      ],
    },
    {
      title: 'Beneficiary Centralization',
      percentage: '60.00%',
      subCategories: [
        { name: 'User Engagement', numbers: [1, 2, 3, 4], colors: ['green', 'orange', 'orange', 'orange'] },
        { name: 'User Relationship', numbers: [1, 2, 3], colors: ['green', 'orange', 'orange'] },
        { name: 'User Experience', numbers: [1, 2, 3, 4, 5], colors: ['green', 'orange', 'orange', 'orange', 'orange'] },
      ],
    },
    {
      title: 'Government Data',
      percentage: '87.50%',
      subCategories: [
        { name: 'Data Governance', numbers: [1, 2, 3], colors: ['green', 'orange', 'orange'] },
        { name: 'Data Usage & Availability', numbers: [1, 2, 3], colors: ['green', 'orange', 'orange'] },
        { name: 'Open Data', numbers: [1, 2, 3], colors: ['green', 'orange', 'orange'] },
      ],
    },
    {
      title: 'Research And Innovation',
      percentage: '17.65%',
      subCategories: [
        { name: 'Innovation', numbers: [1, 2, 3, 4], colors: ['red', 'red', 'red', 'red'] },
        { name: 'Creative Solutions', numbers: [1, 2], colors: ['orange', 'orange'] },
      ],
    },
  ]

  const getStatusColor = (color) => {
    const colors = {
      green: '#10B981', // Completed
      orange: '#F59E0B', // In Progress
      'light-blue': '#93C5FD', // Partially Uploaded
      'dark-blue': '#1D3557', // Fully Uploaded
      red: '#DB1F26', // Delayed
      gray: '#374151', // Not Started (dark gray/black)
    }
    return colors[color] || colors.gray
  }

  return (
    <div className="px-4 lg:px-6 pt-0 pb-6 bg-gray-50 min-h-screen">
      {/* Project Timeline Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6" style={{ borderRadius: '8px' }}>
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl font-bold text-gray-900"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            Project Timeline
          </h2>
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20"
              style={{
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
            <PiCaretDown
              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              size={16}
            />
          </div>
        </div>

        {/* Timeline Bar */}
        <div className="relative mb-8">
          <div className="h-2 bg-gray-200 rounded-full relative overflow-hidden">
            {/* Green progress bar */}
            <div
              className="h-full rounded-full absolute left-0"
              style={{
                width: '33%',
                backgroundColor: '#1EA54E',
              }}
            />
          </div>

          {/* Timeline Markers */}
          <div className="flex justify-between mt-4 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Dot */}
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-md z-10"
                  style={{
                    backgroundColor: event.isCompleted ? '#1EA54E' : '#DB1F26',
                  }}
                />
                {/* Date */}
                <span
                  className="text-xs text-gray-600 mt-2 whitespace-nowrap"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  {event.date}
                </span>
                {/* Description */}
                <span
                  className="text-sm font-medium text-gray-900 mt-1 text-center whitespace-nowrap"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  {event.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        {kpiCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
            style={{ borderRadius: '8px' }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p
                  className="text-3xl font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {card.value}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  {card.label}
                </p>
              </div>
              <div className="flex-shrink-0">
                <HugeiconsIcon
                  icon={card.icon}
                  size={32}
                  color="#EF4444"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Status Section - design: light blue border, 9 cols, headers adjacent, sub-cards with gaps */}
      <div
        className="bg-white rounded-xl shadow-sm p-4 overflow-x-auto"
        style={{ borderRadius: '8px', border: '1px solid #B8D4E8' }}
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2
            className="text-xl font-bold text-gray-900"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
          >
            Progress Status
          </h2>
          {/* Legend - top right */}
          <div className="flex items-center gap-3 flex-wrap justify-end">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#374151' }} />
              <span className="text-xs text-gray-600" style={{ fontFamily: "'Cairo', sans-serif" }}>Not Started</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
              <span className="text-xs text-gray-600" style={{ fontFamily: "'Cairo', sans-serif" }}>In Progress</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#10B981' }} />
              <span className="text-xs text-gray-600" style={{ fontFamily: "'Cairo', sans-serif" }}>Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#93C5FD' }} />
              <span className="text-xs text-gray-600" style={{ fontFamily: "'Cairo', sans-serif" }}>Partially Uploaded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#1D3557' }} />
              <span className="text-xs text-gray-600" style={{ fontFamily: "'Cairo', sans-serif" }}>Fully Uploaded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#DB1F26' }} />
              <span className="text-xs text-gray-600" style={{ fontFamily: "'Cairo', sans-serif" }}>Delayed</span>
            </div>
          </div>
        </div>

        {/* 9 columns: gap between categories, then sub-cards with vertical gaps */}
        <div className="grid gap-4 min-w-[900px]" style={{ gridTemplateColumns: `repeat(${progressCategories.length}, minmax(0, 1fr))` }}>
          {progressCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              {/* Category Header - dark blue, rounded, percentage on white 10% pill */}
              <div
                className="bg-[#1D3557] text-white p-3 flex flex-col items-center justify-center text-center rounded-t-lg"
                style={{ minHeight: '72px' }}
              >
                <h3
                  className="text-xs font-bold leading-tight mb-2"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {category.title.charAt(0).toUpperCase() + category.title.slice(1).toLowerCase()}
                </h3>
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-bold"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {category.percentage}
                </span>
              </div>

              {/* Sub-categories - white/light boxes with border and gaps */}
              <div className="space-y-2 pt-2">
                {category.subCategories.map((subCat, subIndex) => (
                  <div
                    key={subIndex}
                    className="rounded-lg p-3 border"
                    style={{ backgroundColor: '#F5F8FA', borderColor: '#E0E8ED', borderRadius: '8px' }}
                  >
                    <p
                      className="text-xs font-medium text-gray-900 mb-2"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {subCat.name}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {subCat.numbers.map((num, numIndex) => (
                        <div
                          key={numIndex}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{
                            backgroundColor: getStatusColor(subCat.colors[numIndex]),
                          }}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Compliance Score, Top Leaders, Recent Activities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* Overall Compliance Score Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200" style={{ borderRadius: '8px' }}>
          <h3
            className="text-base font-bold text-gray-900 mb-6"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            Overall Compliance Score
          </h3>
          
          {/* Semi-circular Progress Bar */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-28 mb-4">
              <svg width="192" height="96" viewBox="0 0 200 100" className="overflow-visible">
                {/* Background arc */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                {/* Progress arc - 65% (starts from left, goes 65% of the way) */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="#DB1F26"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  strokeDashoffset="87.92"
                />
              </svg>
              {/* Percentage text */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '20px' }}>
                <span
                  className="text-4xl font-bold text-gray-900"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  65%
                </span>
              </div>
            </div>
            <p
              className="text-sm text-gray-600"
              style={{
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              Basic Standards 2025
            </p>
          </div>
        </div>

        {/* Top Performing Perspective Leaders Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200" style={{ borderRadius: '8px' }}>
          <h3
            className="text-base font-bold text-gray-900 mb-4"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            Top Performing Perspective Leaders
          </h3>
          
          <div className="space-y-4">
            {/* Leader 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={leader1Image}
                  alt="Ahmed Al-Ali"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p
                    className="text-sm font-semibold text-gray-900"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Ahmed Al-Ali
                  </p>
                  <p
                    className="text-xs text-gray-600"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Strategy Perspective
                  </p>
                </div>
              </div>
              <span
                className="text-sm font-bold text-gray-900"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                96%
              </span>
            </div>

            {/* Leader 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={leader2Image}
                  alt="Sarah Al-Khaled"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p
                    className="text-sm font-semibold text-gray-900"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Sarah Al-Khaled
                  </p>
                  <p
                    className="text-xs text-gray-600"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Beneficiary Perspective
                  </p>
                </div>
              </div>
              <span
                className="text-sm font-bold text-gray-900"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                94%
              </span>
            </div>

            {/* Leader 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={leader3Image}
                  alt="Mohammad Al-Mansour"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p
                    className="text-sm font-semibold text-gray-900"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Mohammad Al-Mansour
                  </p>
                  <p
                    className="text-xs text-gray-600"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    IT Perspective
                  </p>
                </div>
              </div>
              <span
                className="text-sm font-bold text-gray-900"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                92%
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activities Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200" style={{ borderRadius: '8px' }}>
          <h3
            className="text-base font-bold text-gray-900 mb-4"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            Recent Activities
          </h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                style={{ backgroundColor: '#DB1F26' }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p
                    className="text-sm text-gray-700"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Document 'Strategy_Review.Pdf' Was Uploaded By Ahmed Khaled
                  </p>
                  <span
                    className="text-xs text-gray-500 whitespace-nowrap"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    5 Mins Ago
                  </span>
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
                  <p
                    className="text-sm text-gray-700"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Document 'KPI_Framework.Xlsx' Was Uploaded By Mona Hamed
                  </p>
                  <span
                    className="text-xs text-gray-500 whitespace-nowrap"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    20 Mins Ago
                  </span>
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
                  <p
                    className="text-sm text-gray-700"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    Document 'Digital_Transformation_Plan.Pdf' Approved By Advisory Team
                  </p>
                  <span
                    className="text-xs text-gray-500 whitespace-nowrap"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    1 Hour Ago
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 12-Month Performance and Audit Readiness Section */}
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* 12-Month Performance Card - 8 columns */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200" style={{ borderRadius: '8px' }}>
          <h3
            className="text-base font-bold text-gray-900 mb-6"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            12-Month Performance
          </h3>
          
          {/* Bar Chart using Recharts */}
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={[
                { month: 'Jan', value: 87 },
                { month: 'Feb', value: 76 },
                { month: 'Mar', value: 81 },
                { month: 'Apr', value: 42 },
                { month: 'May', value: 87 },
                { month: 'Jun', value: 79 },
                { month: 'Jul', value: 54 },
                { month: 'Aug', value: 87 },
                { month: 'Sept', value: 79 },
                { month: 'Oct', value: 54 },
                { month: 'Nov', value: 87 },
                { month: 'Dec', value: 79 },
              ]}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0078D7" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
                style={{ fontFamily: "'Cairo', sans-serif" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                tick={{ fill: '#6B7280', fontSize: 12 }}
                style={{ fontFamily: "'Cairo', sans-serif" }}
              />
              <Bar
                dataKey="value"
                fill="url(#barGradient)"
                radius={[0, 0, 4, 4]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Audit Readiness Card - 4 columns */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-xl shadow-sm p-6 border border-gray-200" style={{ borderRadius: '8px' }}>
          <h3
            className="text-base font-bold text-gray-900 mb-6"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            Audit Readiness
          </h3>
          
          {/* Radial Gauge */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative w-48 h-28">
              <svg width="192" height="96" viewBox="0 0 200 100" className="overflow-visible">
                {/* Background arc */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                {/* Progress arc - 80% */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="#1EA54E"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  strokeDashoffset="50.24"
                />
              </svg>
              {/* Percentage text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: '20px' }}>
                <span
                  className="text-4xl font-bold text-gray-900"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  80%
                </span>
                <p
                  className="text-sm text-gray-600 mt-1"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  Readiness Level
                </p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex items-center justify-around mt-4">
            <div className="flex flex-col items-center">
              <span
                className="text-2xl font-bold text-gray-900"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                12
              </span>
              <p
                className="text-xs text-gray-600 mt-1"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                Overdue Stds
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span
                className="text-2xl font-bold text-gray-900"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                5
              </span>
              <p
                className="text-xs text-gray-600 mt-1"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                Missing Evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
