import logo from '../assets/logo.webp'

import { RxTwitterLogo, RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { BsDiscord } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className="flex flex-col items-center py-6 border-t-2 border-white">
      <img src={logo} alt="" />
      <p className="flex gap-4 mt-4">
        <a href="https://discord.com/invite/galaxylife">
          <BsDiscord size={32} />
        </a>
        <a href="https://www.instagram.com/galaxylifereborn/?hl=de">
          <RxInstagramLogo size={32} />
        </a>
        <a href="">
          <RiFacebookCircleLine size={32} />
        </a>
        <a href="">
          <RxTwitterLogo size={32} />
        </a>
      </p>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between w-[30%] my-8">
        <div className="flex flex-col gap-3">
          <p>Privacy Notice</p>
          <p>Terms of service</p>
        </div>
        <div className="flex flex-col gap-3">
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
