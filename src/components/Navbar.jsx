import logo from '../assets/logo.webp'

import { RxHome, RxEnvelopeClosed, RxBackpack, RxEnter } from 'react-icons/rx'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiMenuLine } from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    icon: <RxHome />,
    title: 'Home',
    link: 'LandingPage/home',
    more: [],
  },
  {
    icon: <RxEnvelopeClosed />,
    title: 'News',
    link: 'LandingPage/news',
    more: [
      {
        title: 'Patchnotes',
        link: 'LandingPage/patchnotes',
      },
      {
        title: 'Patchnotes',
        link: 'LandingPage/patchnotes',
      },
    ],
  },
  {
    icon: <RxBackpack />,
    title: 'Shop',
    link: 'LandingPage/shop',
    more: [],
  },
  {
    icon: '',
    title: 'Patchnotes',
    link: 'LandingPage/patchnotes',
    more: [],
  },
  {
    icon: '',
    title: 'Community',
    link: 'LandingPage/community',
    more: [],
  },
]

const Navbar = () => {
  const [extended, setExtended] = useState(false)

  return (
    <div
      id="navbar"
      className={`text-white ${
        extended ? `flex-col items-center h-full` : `h-24`
      } fixed items-start pb-8 bg-gradient-to-b from-black via-[#100020] via-50% to-transparent flex lg:flex-row  lg:h-auto navbar duration-500`}
    >
      <div className="flex  items-center justify-between w-screen px-12  py-4 text-[16px]">
        <div className="flex items-center gap-12">
          <img src={logo} alt="Logo" className="w-[164px]" />
          <ul className="hidden gap-12 font-bold lg:flex">
            {navLinks.map((navLink) => (
              <li className="flex flex-col justify-center">
                <Link to={`/${navLink.link}`}>
                  <div className="flex items-center gap-1 hover:text-[#fb7a0c]">
                    {navLink.icon}
                    {navLink.title}
                  </div>
                </Link>
                <ul>
                  {navLink.more.map((navFurtherLink) => (
                    <li>
                      <Link to={navFurtherLink.link}></Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center hidden gap-6 font-bold lg:flex">
          <Search />
          <LogIn />
          <Button />
        </div>

        <button
          onClick={() => setExtended(!extended)}
          className={`flex lg:hidden ${
            extended ? `text-[#fb7a0c]` : `text-white`
          } z-10`}
        >
          <RiMenuLine size={32} />
        </button>
      </div>
      <div
        className={`flex justify-center  lg:hidden ${
          extended ? `w-full` : `w-0`
        }`}
      >
        <ul
          className={`${
            extended ? `flex` : `hidden`
          }  flex-col items-center border-t-2 border-white w-[80%] gap-6 pt-8 lg:hidden duration-500`}
        >
          {navLinks.map((navLink) => (
            <li className={`flex items-center`}>
              <Link to={`/${navLink.link}`}>
                <div className="flex items-center text-[20px] gap-1 hover:text-[#fb7a0c]">
                  {navLink.icon}
                  {navLink.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Search = () => {
  return (
    <p className="px-1 py-1 border-2 border-[#fb7a0c] hover:border-white hover:text-[#fb7a0c] rounded-full duration-300">
      <HiOutlineSearch size={'28px'} />
    </p>
  )
}

const LogIn = () => {
  return (
    <a
      href="#"
      className="flex items-center gap-1 px-3 py-1 border-2 border-[#fb7a0c] hover:border-white hover:text-[#fb7a0c] rounded-full duration-300"
    >
      <RxEnter size={'16px'} />
      <p>Log in</p>
    </a>
  )
}

const Button = () => {
  return (
    <a
      href="https://store.steampowered.com/app/1927780/Galaxy_Life/"
      className="flex items-center font-bold px-6 py-2 bg-[#fb7a0c] rounded-full"
    >
      PLAY NOW
    </a>
  )
}

export default Navbar
