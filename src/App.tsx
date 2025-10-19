import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import './styles/animations.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}
