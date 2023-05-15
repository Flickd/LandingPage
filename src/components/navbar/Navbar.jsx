import logo from '../../assets/logo.webp'

import { RxHome, RxEnvelopeClosed, RxBackpack, RxEnter } from 'react-icons/rx'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiMenuLine } from 'react-icons/ri'
import { MdLeaderboard } from 'react-icons/md'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    icon: <RxEnvelopeClosed />,
    title: 'News',
    link: 'LandingPage/news',
    sublink: [
      {
        title: 'General',
        link: 'LandingPage/general',
      },
      {
        title: 'Patchnotes',
        link: 'LandingPage/patchnotes',
      },
      {
        title: 'Community',
        link: 'LandingPage/community',
      },
    ],
  },
  {
    icon: <RxBackpack />,
    title: 'Shop',
    link: 'LandingPage/shop',
    sublink: [
      {
        title: 'Shop',
        link: 'LandingPage/shop',
      },
    ],
  },
  {
    icon: <MdLeaderboard />,
    title: 'Leaderboard',
    link: 'LandingPage/leaderboard',
    sublink: [
      {
        title: 'Alliance',
        link: 'LandingPage/alliance',
      },
    ],
  },
]

const Navbar = () => {
  const [extended, setExtended] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [results, setResults] = useState([])

  return (
    <div
      id="navbar"
      className={`text-white ${
        extended ? `flex-col items-center h-full` : `h-24`
      } fixed items-start pb-8 bg-gradient-to-b from-black via-[#100020] via-50% to-transparent flex lg:flex-row  lg:h-auto navbar duration-500 z-50`}
    >
      <div className="flex  items-center justify-between w-screen px-12  py-4 text-[16px]">
        <div className="flex items-center gap-12">
          <img src={logo} alt="Logo" className="w-[164px]" />
          <ul className="hidden gap-12 font-bold lg:flex">
            <li className="hover:text-[#fb7a0c]">
              <Link to={'/LandingPage/home'}>
                <div className="flex flex-row items-center gap-2">
                  <RxHome />
                  Home
                </div>
              </Link>
            </li>
            {navLinks.map((navLink) => (
              <li className="group">
                <div className="z-10 flex flex-col justify-center">
                  <Link to={`/${navLink.link}`}>
                    <div className="flex items-center gap-1 hover:text-[#fb7a0c]">
                      {navLink.icon}
                      {navLink.title}
                    </div>
                  </Link>
                </div>
                <ul className="absolute hidden pt-8 top-12 group-hover:block hover:block">
                  <div className="flex flex-col gap-4 px-6 py-6 bg-blue-950 rounded-xl">
                    <div className="absolute w-4 h-4 rotate-45 bg-blue-950 translate-y-[-200%]"></div>
                    {navLink.sublink.map((slink) => (
                      <li>
                        <Link to={slink.link}>
                          <div>{slink.title}</div>
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center hidden gap-6 font-bold lg:flex">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
          <div>
            <a
              href="#"
              className="flex items-center gap-1 px-3 py-1 border-2 border-[#fb7a0c] hover:border-white hover:text-[#fb7a0c] rounded-full duration-300"
              onClick={() => setLogIn(!logIn)}
            >
              <RxEnter size={'16px'} />
              <p>Log in</p>
            </a>
          </div>

          <a
            href="https://store.steampowered.com/app/1927780/Galaxy_Life/"
            className="flex items-center font-bold px-6 py-2 bg-[#fb7a0c] rounded-full border-2 border-[#fb7a0c] hover:border-white duration-300"
          >
            PLAY NOW
          </a>
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
        className={`flex justify-center lg:hidden ${
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

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.username &&
            user.username.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <form
      action=""
      className="w-[256px] flex flex-row border-2 border-[#fb7a0c] rounded-full justify-between px-2 py-1"
    >
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        name="search"
        placeholder="Search here"
        className="px-2 bg-transparent rounded-full outline-none"
      />
      <button type="submit">
        <HiOutlineSearch size={'24px'} />
      </button>
    </form>
  )
}

const SearchResultsList = ({ results }) => {
  return (
    <div className="absolute flex flex-col overflow-y-auto top-20 max-h-80 min-w-[256px]">
      {results.map((result, id) => {
        return (
          <div key={id}>
            <SearchResult result={result} />
          </div>
        )
      })}
    </div>
  )
}

const SearchResult = ({ result }) => {
  return (
    <div className="flex flex-row gap-2 p-3 border-2 border-transparent hover:border-[#fb7a0c]">
      <div>{result.id}</div>
      <div>{result.username}</div>
    </div>
  )
}

export default Navbar
