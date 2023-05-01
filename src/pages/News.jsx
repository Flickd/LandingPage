import { useEffect } from 'react'
import Footer from '../components/Footer'
import NewsBlock from '../components/NewsBlock'

const News = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('.page-background')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.backgroundPositionY = -(scrolled * 0.3) + 'px'
    })
  })

  return (
    <div className="text-white page-background fontNunitoRegular">
      <NewsBlock />
      <Footer />
    </div>
  )
}
export default News
