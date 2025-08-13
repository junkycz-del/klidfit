import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page'
import PricingPage from './pages/pricing-page'
import LoginPage from './pages/login-page'
import DashboardPage from './pages/dashboard-page'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ceniky" element={<PricingPage />} />
          <Route path="/prihlaseni" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  )
}