import logo from '../assets/LOGO_GL_RECREATION.png'
import Animated_Button from '../assets/Animated_Button.gif'

const HomeHero = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-52">
      <img src={logo} alt="logo" className={`w-[256px] my-element`} />
      <a href="https://store.steampowered.com/app/1927780/Galaxy_Life/">
        <img src={Animated_Button} alt="PLAY FOR FREE" className="w-[512px]" />
      </a>
    </section>
  )
}
export default HomeHero
