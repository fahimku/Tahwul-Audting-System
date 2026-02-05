import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import Perspectives from './pages/Perspectives'
import Tasks from './pages/Tasks'
import Documents from './pages/Documents'
import Reports from './pages/Reports'
import Users from './pages/Users'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App