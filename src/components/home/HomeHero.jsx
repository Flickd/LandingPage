import logo from '../../assets/LOGO_GL_RECREATION.png'
import Animated_Button from '../../assets/Animated_Button.gif'
import RedGalaxy from '../../assets/RedGalaxy.webm'
import { useEffect } from 'react'
import PurpleSystem from '../../assets/PurpleSystem.webm'

const HomeHero = () => {
  useEffect(() => {
    const parallaxBg = document.querySelector('#redGalaxy')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.position = 'relative'
      parallaxBg.style.transform = 'translateY(' + scrolled * 0.5 + 'px)'
      parallaxBg.style.zIndex = '0'
    })
  })

  useEffect(() => {
    const parallaxBg = document.querySelector('#redGalaxy2')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.position = 'absolute'
      parallaxBg.style.transform =
        'translate(30%, ' + (200 + scrolled * 0.6) + 'px)'
      parallaxBg.style.zIndex = '0'
    })
  })

  useEffect(() => {
    const parallaxBg = document.querySelector('#purpleGalaxy')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.position = 'absolute'
      parallaxBg.style.transform =
        'translate(-200px, ' + (500 + scrolled * 0.5) + 'px)'
      parallaxBg.style.zIndex = '0'
    })
  })

  useEffect(() => {
    const parallaxBg = document.querySelector('#purpleGalaxy2')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.position = 'absolute'
      parallaxBg.style.transform =
        'translate(-25%, ' + (800 + scrolled * 0.6) + 'px)'
      parallaxBg.style.zIndex = '0'
    })
  })

  return (
    <section className="relative z-0 flex flex-col items-center lg:w-[160%] w-full pb-32 lg:flex-row lg:pb-0">
      <div className="relative z-10 flex flex-col items-center lg:ml-[25%]">
        <img
          src={logo}
          alt="GL_logo"
          className="lg:w-[40%] w-[50%] pt-[150px] lg:pt-0"
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
        src={RedGalaxy}
        id="redGalaxy"
        className="hidden lg:block relative w-[55%] -translate-y-[100px] lg:translate-y-0 z-0"
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>

      <video
        src={RedGalaxy}
        id="redGalaxy2"
        className=" z-0 block w-fulltranslate-y-[200px] lg:hidden lg:translate-y-0"
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>

      <video
        src={PurpleSystem}
        id="purpleGalaxy"
        className="absolute z-0 hidden lg:block translate-x-[-300px] translate-y-[500px]"
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>

      <video
        src={PurpleSystem}
        id="purpleGalaxy2"
        className="absolute z-0 lg:hidden block translate-x-[-25%] translate-y-[800px]"
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>
    </section>
  )
}
export default HomeHero
