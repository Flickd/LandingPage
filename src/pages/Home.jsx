import HomeHero from '../components/home/HomeHero'
import HomeRecentNews from '../components/home/HomeRecentNews'
import HomeSlideshow from '../components/home/HomeSlideshow'

const Home = () => {
  return (
    <>
      <div className="relative">
        <HomeHero />
        <HomeRecentNews />
        <HomeSlideshow />
      </div>
    </>
  )
}
export default Home
