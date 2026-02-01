
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PortfolioPage from './pages/PortfolioPage'
import Layout from './components/layout/Layout'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AngelinaIgunova" element={<Layout />}>
          <Route index element={<PortfolioPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/AngelinaIgunova" replace />} />
        <Route path="*" element={<NotFoundPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
