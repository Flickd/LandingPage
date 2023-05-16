import HomeHero from '../components/home/HomeHero'
import HomeRecentNews from '../components/home/HomeRecentNews'
import HomeSlideshow from '../components/home/HomeSlideshow'

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <HomeHero />
        <HomeRecentNews />
        <HomeSlideshow />
      </div>
    </>
  )
}
export default Home
