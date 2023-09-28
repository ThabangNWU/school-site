import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutUs from './components/AboutUs.tsx'
import App from './App.tsx'
import './index.css'
import Gallery from './components/Gallery.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AboutUs />
    <Gallery />
    <App />
  </React.StrictMode>,
)
