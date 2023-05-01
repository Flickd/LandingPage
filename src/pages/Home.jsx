import { useEffect } from 'react'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import HomeRecentNews from '../components/HomeRecentNews'
import HomeSlideshow from '../components/HomeSlideshow'

const Home = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('.page-background')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.backgroundPositionY = -(scrolled * 0.3) + 'px'
    })
  })

  return (
    <>
      <div className="text-white page-background fontNunitoRegular">
        <HomeHero />
        <HomeRecentNews />
        <HomeSlideshow />
        <Footer />
      </div>
    </>
  )
}
export default Home