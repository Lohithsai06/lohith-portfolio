import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <AppRoutes />
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
