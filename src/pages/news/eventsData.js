import easter from '../../assets/easter.png'
import christmas from '../../assets/Christmas.jpg'
import freeGifts from '../../assets/Freegifts.png'

export const news = [
  {
    title: 'freeGiftsUpdate',
    date: '05/08/2023',
    content: {
      img: freeGifts,
      headline: 'Free gifts update!',
      subHeadlineOne: '',
      paragraphOne:
        "Starting from today you'll be able to send all of your friends daily gifts for free! This can range from items like the mystery cube all the way to the shoulder pad for the Green Beret collection. The button can be found next to the Friends button on the top bar when you first enter the game.",
      paragraphTwo:
        'Green berets will be alot more common from now on, all the items in the collection will be obtainable.',
      subHeadlineTwo: 'Extra patchnotes:',
      patchnotes: [
        'the beret item from the Green Beret collection is now obtainable by destroying houses',
        'Daily rewards now hold minerals in them too',
        'Decreased the amount of green berets obtained in daily rewards',
        'Fixes for a couple of issues with battle crashes/softlocks',
        'Shields will stay after doing attacks on NPCs',

        'Can no longer help destroyed buildings',
        'Other small fixes',
      ],
    },
  },
  {
    title: 'easterUpdate',
    date: '04/07/2023',
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
    date: '12/24/2022',
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
