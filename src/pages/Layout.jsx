import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../index.css'
import { useEffect } from 'react'

const Layout = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('.page-background')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.backgroundPositionY = -(scrolled * 0.3) + 'px'
    })
  })

  return (
    <div className="text-white page-background fontNunitoRegular pb-[300px]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout
