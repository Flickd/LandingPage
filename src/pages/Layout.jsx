import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Layout = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('#background')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.backgroundPositionY = -(scrolled * 0.3) + 'px'
    })
  })

  return (
    <div
      id="background"
      className="text-white bg-[url('./assets/WebPSeamless_Background.webp')] fontNunitoRegular pb-[300px] bg-fixed bg-cover"
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout
