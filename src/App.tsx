import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MembersPage from './pages/MembersPage'
import CategoriesPage from './pages/CategoriesPage'
import StudiosPage from './pages/StudiosPage'
import PracticeCenter from './pages/PracticeCenter'
import PlansPage from './pages/PlansPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="studios" element={<StudiosPage />} />
          <Route path="practice-center" element={<PracticeCenter />} />
          <Route path="plans" element={<PlansPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
