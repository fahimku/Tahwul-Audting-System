import { 
  FiFileText, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiDollarSign
} from 'react-icons/fi'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Dashboard() {
  // Sample data for charts
  const auditStatusData = [
    { name: 'Completed', value: 45, color: '#10B981' },
    { name: 'In Progress', value: 30, color: '#F59E0B' },
    { name: 'Pending', value: 15, color: '#EF4444' },
    { name: 'Scheduled', value: 10, color: '#3B82F6' },
  ]

  const monthlyAuditsData = [
    { month: 'Jan', audits: 12, completed: 8 },
    { month: 'Feb', audits: 15, completed: 12 },
    { month: 'Mar', audits: 18, completed: 15 },
    { month: 'Apr', audits: 22, completed: 18 },
    { month: 'May', audits: 20, completed: 16 },
    { month: 'Jun', audits: 25, completed: 20 },
  ]

  const recentAudits = [
    { id: 1, name: 'Financial Audit Q2', status: 'Completed', date: '2024-06-15', auditor: 'John Doe' },
    { id: 2, name: 'Compliance Review', status: 'In Progress', date: '2024-06-20', auditor: 'Jane Smith' },
    { id: 3, name: 'Security Audit', status: 'Pending', date: '2024-06-25', auditor: 'Mike Johnson' },
    { id: 4, name: 'Internal Controls', status: 'Completed', date: '2024-06-10', auditor: 'Sarah Williams' },
    { id: 5, name: 'Risk Assessment', status: 'In Progress', date: '2024-06-22', auditor: 'David Brown' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'Pending':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="px-4 lg:px-6 pt-0 pb-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-4">
        <h1 className="mt-0 text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your audits today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Audits</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">142</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <FiTrendingUp className="mr-1" /> +12% from last month
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FiFileText className="text-blue-600 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">98</p>
              <p className="text-xs text-gray-500 mt-1">69% completion rate</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <FiCheckCircle className="text-green-600 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">32</p>
              <p className="text-xs text-gray-500 mt-1">23% of total audits</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <FiClock className="text-yellow-600 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              <p className="text-xs text-gray-500 mt-1">8% require attention</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <FiAlertCircle className="text-red-600 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Audits Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Audits Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyAuditsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="audits" fill="#3B82F6" name="Total Audits" />
              <Bar dataKey="completed" fill="#10B981" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Audit Status Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Audit Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={auditStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {auditStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <ul className="space-y-6">
            {[
              { phase: 'Planning', status: 'Completed', date: 'Jan 15, 2024', desc: 'Scope and objectives defined' },
              { phase: 'Fieldwork', status: 'In Progress', date: 'Mar 1, 2024', desc: 'Data collection and testing' },
              { phase: 'Reporting', status: 'Pending', date: 'May 1, 2024', desc: 'Draft and final report' },
              { phase: 'Follow-up', status: 'Pending', date: 'Jun 15, 2024', desc: 'Management response and closure' },
            ].map((item, i) => (
              <li key={i} className="relative flex gap-4 pl-10">
                <span
                  className={`absolute left-2.5 w-3 h-3 rounded-full border-2 border-white shadow ${
                    item.status === 'Completed'
                      ? 'bg-green-500'
                      : item.status === 'In Progress'
                      ? 'bg-amber-500'
                      : 'bg-gray-300'
                  }`}
                />
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900">{item.phase}</h3>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'In Progress'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{item.date}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Audits Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Audits</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audit Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auditor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentAudits.map((audit) => (
                <tr key={audit.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{audit.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(audit.status)}`}>
                      {audit.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audit.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audit.auditor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">View</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
