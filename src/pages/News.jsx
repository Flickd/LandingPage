import { useEffect } from 'react'
import NewsBlockImg from '../components/news/NewsBlock'

import easter from '../assets/easter.png'
import christmas from '../assets/Christmas.jpg'

const News = () => {
  const news = [
    {
      title: 'easterUpdate',
      content: {
        img: easter,
        headline: 'Galaxy Life easter and settings update!',
        subHeadlineOne: 'Easter contest!',
        paragraphOne:
          'Welcome to the galaxy-wide Easter egg hunt! Help your allies and obliterate your foes to collect as many eggs possible. The strongest and most strategic will get the biggest rewards.',
        paragraphTwo:
          'Easter starts April 8th 00:00 UTC and ends April 18th 00:00 UTC',
        subHeadlineTwo: 'New settings!',
        patchnotes: [
          '20+ New missions',
          'New options menu: spyling mode, dirt skins, volume sliders, new languages, other stuff',
          'Refinery rework: cubes cost a fixed amount instead of %, coin rewards are fixed amount instead of %, rewards are actually random',
          'Battlelog string fix',
          'Shields will stay after doing attacks on NPCs',

          'Can no longer help destroyed buildings',
          'Other small fixes',
        ],
      },
    },
    {
      title: 'christmasUpdate',
      content: {
        img: christmas,
        headline: 'The Christmas update!',
        subHeadlineOne: 'Easter contest!',
        paragraphOne:
          "The golems have been repelled and it's the holiday season! The goal of the event is to collect aurora fragments by doing tasks in-game for rewards, we hope that everyone will have a great time during this event!",
        paragraphTwo:
          "And we'd like to wish everyone a merry Christmas from the Galaxy Life team!",
        subHeadlineTwo:
          'With it we have a brand new update for everyone to enjoy, this includes the following changes:',
        patchnotes: [
          'New background',
          'New loading screen',
          'New Christmas building skins for almost every building',
          'Winter event',
          'Return of the original Christmas tree in the collection tab',

          'A couple small visual fixes',
          'New christmas gui change',
          'Anti-cheat improvements',
        ],
      },
    },
  ]

  useEffect(() => {
    const parallaxBg = document.querySelector('.page-background')
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      parallaxBg.style.backgroundPositionY = -(scrolled * 0.3) + 'px'
    })
  })

  return (
    <div className="">
      <NewsBlockImg news={news} />
    </div>
  )
}
export default News
