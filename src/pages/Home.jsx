import HomeHero from '../components/HomeHero'
import HomeRecentNews from '../components/HomeRecentNews'
import HomeSlideshow from '../components/HomeSlideshow'

const Home = () => {
  return (
    <>
      <div className="">
        <HomeHero />
        <HomeRecentNews />
        <HomeSlideshow />
      </div>
    </>
  )
}
export default Home
