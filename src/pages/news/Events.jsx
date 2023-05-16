import { useEffect } from 'react'
import NewsBlockImg from '../../components/news/EventsBlock'

import { news } from './EventsData'

const Events = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('.page-background')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.backgroundPositionY = -(scrolled * 0.3) + 'px'
    })
  })
  return (
    <div className="">
      <NewsBlockImg news={news} />
    </div>
  )
}
export default Events
