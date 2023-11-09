import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </>
  )
}

export default App
