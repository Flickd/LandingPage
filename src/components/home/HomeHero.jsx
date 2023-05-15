import logo from '../../assets/LOGO_GL_RECREATION.png'
import Animated_Button from '../../assets/Animated_Button.gif'
import RedGalaxy2 from '../../assets/RedGalaxy.webm'
import { useEffect } from 'react'

const HomeHero = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('#redGalaxy')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.position = 'relative'
      parallaxBg.style.transform = 'translateY(' + scrolled * 0.7 + 'px)'
      parallaxBg.style.zIndex = '1'
    })
  })

  return (
    <section className="relative z-0 w-full flex lg:flex-row flex-col items-center justify-start lg:w-[140%]">
      <div className="flex flex-col items-center lg:ml-[10%]">
        <img
          src={logo}
          alt="GL_logo"
          className="lg:w-1/2 w-[50%] pt-[150px] lg:pt-0"
        />
        <a href="https://store.steampowered.com/app/1927780/Galaxy_Life/">
          <img
            src={Animated_Button}
            alt="PLAY FOR FREE"
            className="lg:w-[512px]"
          />
        </a>
      </div>

      <video
        src={RedGalaxy2}
        id="redGalaxy"
        className="w-[70%] translate-y-0 z-[1]"
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>
    </section>
  )
}
export default HomeHero
