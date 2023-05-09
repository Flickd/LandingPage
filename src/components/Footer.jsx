import logo from '../assets/logo.webp'

import { RxTwitterLogo, RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { BsDiscord, BsTiktok } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className="absolute w-full text-white flex flex-col items-center py-6  bg-gradient-to-t from-black via-[#100020] via-50% to-transparent">
      <img src={logo} alt="" />
      <p className="flex gap-8 mt-8">
        <a href="https://discord.com/invite/galaxylife">
          <BsDiscord size={32} />
        </a>
        <a href="https://www.instagram.com/galaxylifereborn/?hl=de">
          <RxInstagramLogo size={32} />
        </a>
        <a href="">
          <BsTiktok size={32} />
        </a>
      </p>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between w-[30%] my-8">
        <div className="flex flex-col gap-3 text-center lg:text-start">
          <p>Privacy Notice</p>
          <p>Terms of service</p>
        </div>
        <div className="flex flex-col gap-3 text-center lg:text-start">
          <p>phoenix-network</p>
          <p>contact</p>
          <p>support</p>
        </div>
      </div>
      <div className="flex justify-between w-full px-8">
        <p>copyright</p>
        <div className="flex">
          <img src="" alt="Pegi" />
          <img src="" alt="USK" />
        </div>
      </div>
    </section>
  )
}
export default Footer
