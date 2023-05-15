import HomeHero from '../components/home/HomeHero'
import HomeRecentNews from '../components/home/HomeRecentNews'
import HomeSlideshow from '../components/home/HomeSlideshow'
import PurpleSystem from '../assets/PurpleSystem.webm'

const Home = () => {
  return (
    <>
      <div>
        <HomeHero />
        <HomeRecentNews />
        <HomeSlideshow />
      </div>
    </>
  )
}
export default Home
