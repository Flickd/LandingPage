import logo from '../../assets/logo.webp'

import { RxHome, RxEnvelopeClosed, RxBackpack, RxEnter } from 'react-icons/rx'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiMenuLine } from 'react-icons/ri'
import { MdLeaderboard } from 'react-icons/md'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    icon: <RxHome />,
    title: 'Home',
    link: 'LandingPage/home',
    sublinks: [],
  },
  {
    icon: <RxEnvelopeClosed />,
    title: 'News',
    link: 'LandingPage/news/events',
    sublinks: [
      {
        title: 'Events',
        link: 'news/events',
      },
      {
        title: 'Patchnotes',
        link: 'news/patchnotes',
      },
      {
        title: 'Community',
        link: 'news/community',
      },
    ],
  },
  {
    icon: <MdLeaderboard />,
    title: 'Leaderboard',
    link: 'LandingPage/leaderboard',
    sublinks: [
      {
        title: 'Player',
        link: 'leaderboard/player',
      },
      {
        title: 'Alliance',
        link: 'leaderboard/alliance',
      },
    ],
  },
  {
    icon: <RxBackpack />,
    title: 'Shop',
    link: 'LandingPage/shop',
    sublinks: [],
  },
]

const Navbar = () => {
  const [extended, setExtended] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [resultsPlayer, setResultsPlayer] = useState([])
  const [resultsAlliance, setResultsAlliance] = useState([])

  return (
    <div
      id="navbar"
      className={`text-white ${
        extended ? `flex-col items-center h-full` : `h-24`
      } fixed items-start pb-8 bg-gradient-to-b from-black via-[#100020] via-50% to-transparent flex lg:flex-row  lg:h-auto navbar duration-500 z-50`}
    >
      <div className="flex  items-center justify-between w-screen px-16  py-4 text-[16px]">
        <div className="flex items-center gap-12">
          <img src={logo} alt="Logo" className="w-[164px]" />
          <ul className="hidden gap-12 font-bold lg:flex">
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
                <ul
                  className={`${
                    navLink.sublinks.length === 0
                      ? 'hover:hidden  group-hover:hidden'
                      : 'hover:block  group-hover:block'
                  } absolute hidden pt-8 top-12`}
                >
                  <div className="flex flex-col border-2 border-white bg-[#100020] rounded-xl overflow-hidden">
                    {navLink.sublinks.map((slink) => (
                      <li>
                        <Link to={slink.link}>
                          <div className="hover:bg-white p-3 hover:text-[#100020] cursor-pointer">
                            {slink.title}
                          </div>
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
          <SearchBar
            setResultsPlayer={setResultsPlayer}
            setResultsAlliance={setResultsAlliance}
          />
          <SearchResultsList
            resultsPlayer={resultsPlayer}
            resultsAlliance={resultsAlliance}
          />
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

const SearchBar = ({ setResultsPlayer, setResultsAlliance }) => {
  const [inputPlayer, setInputPlayer] = useState('')
  const [inputAlliance, setInputAlliance] = useState('')

  const fetchDataPlayer = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const resultsPlayer = json.filter((user) => {
          return (
            value &&
            user &&
            user.username &&
            user.username.toLowerCase().includes(value)
          )
        })
        setResultsPlayer(resultsPlayer)
      })
  }

  const fetchDataAlliance = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const resultsAlliance = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        setResultsAlliance(resultsAlliance)
      })
  }

  const handleChange = (value) => {
    setInputPlayer(value)
    setInputAlliance(value)
    fetchDataPlayer(value)
    fetchDataAlliance(value)
  }

  return (
    <form
      className="w-[320px] flex flex-row border-2 border-[#fb7a0c] rounded-full justify-between px-2 py-1"
      autoComplete="off"
    >
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        name="search"
        placeholder="Search for player or alliance"
        className="w-full px-2 bg-transparent rounded-full outline-none"
        autoComplete=""
      />
      <HiOutlineSearch size={'24px'} />
    </form>
  )
}

const SearchResultsList = ({ resultsPlayer, resultsAlliance }) => {
  return (
    <div
      className={`absolute flex flex-col overflow-y-auto top-20 max-h-96 min-w-[256px] overflow-hidden bg-[#100020] ${
        resultsPlayer.length === 0 && resultsAlliance.length === 0
          ? 'hidden'
          : 'block'
      } border-2 border-white rounded-xl`}
    >
      <div
        className={`p-3 bg-white text-[#100020] ${
          resultsPlayer.length === 0 ? 'hidden' : 'block'
        }`}
      >
        Players:
      </div>
      <div className={`flex flex-col`}>
        {resultsPlayer.map((resultPlayer, id) => {
          return (
            <div key={id}>
              <SearchResult result={resultPlayer} />
            </div>
          )
        })}
      </div>
      <div
        className={`p-3 bg-white text-[#100020] ${
          resultsAlliance.length === 0 ? 'hidden' : 'block'
        }`}
      >
        Alliances:
      </div>
      <div className={`flex flex-col`}>
        {resultsAlliance.map((resultAlliance, id) => {
          return (
            <div key={id}>
              <SearchResult result={resultAlliance} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SearchResult = ({ result }) => {
  return (
    <div className="flex flex-row gap-2 p-3 hover:bg-white hover:text-[#100020] cursor-pointer">
      <div>{result.id}</div>
      <div>{result.username}</div>
    </div>
  )
}

export default Navbar
