import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/SiteLayout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import MembershipsPage from './pages/MembershipsPage'
import PartnershipsPage from './pages/PartnershipsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:projectSlug" element={<ProjectDetailPage />} />
        <Route path="/memberships" element={<MembershipsPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
