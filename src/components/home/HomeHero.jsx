import logo from '../../assets/LOGO_GL_RECREATION.png'
import Animated_Button from '../../assets/Animated_Button.gif'
import RedGalaxy from '../../assets/RedGalaxy.webm'

const HomeHero = () => {
  return (
    <section className="flex flex-row items-center h-screen overflow-x-hidden ">
      <a
        href="https://store.steampowered.com/app/1927780/Galaxy_Life/"
        className="z-10 mt-56 ml-64"
      >
        <img src={Animated_Button} alt="PLAY FOR FREE" className="w-[512px]" />
      </a>
      <video
        src={RedGalaxy}
        className="absolute z-0 top-10 right-0 w-[80%]"
        autoPlay
        loop
      ></video>
    </section>
  )
}
export default HomeHero
