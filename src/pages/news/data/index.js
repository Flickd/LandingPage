import easter from '../../../assets/easter.png'
import christmas from '../../../assets/Christmas.jpg'
import freeGifts from '../../../assets/Freegifts.png'

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

export const patchnotes = [
  {
    headline: 'Free Gifts Update!',
    date: '05/08/2023',
    subtextOne:
      'Green berets will be alot more common from now on, all the items in the collection will be obtainable.',
    subtextTwo: '',
    notes: [
      'the beret item from the Green Beret collection is now obtainable by destroying houses',
      'Daily rewards now hold minerals in them too',
      'Decreased the amount of green berets obtained in daily rewards',
      'Fixes for a couple of issues with battle crashes/softlocks',
    ],
  },
  {
    headline: 'Easter and settings update!',
    date: '04/07/2023',
    subtextOne: '',
    subtextTwo: '',
    notes: [
      '20+ New missions',
      'New options menu: spyling mode, dirt skins, volume sliders, new languages, other stuff',
      'Refinery rework: cubes cost a fixed amount instead of %, coin rewards are fixed amount instead of %, rewards are actually random',
      'Battlelog string fix',
      'Shields will stay after doing attacks on NPCs',

      'Can no longer help destroyed buildings',
      'Other small fixes',
    ],
  },
  {
    headline: 'New Years update!',
    date: '01/02/2023',
    subtextOne:
      "Are we all still here? Yes? Okay good, I hope you had a wonderful New Year and that all your dreams may come true! Now we didn't sit idly by during the year change, we continue to work on bringing improvements to you!",
    subtextTwo:
      'So what did we do this past week? Ofcourse we made some changes that you will get to enjoy today, but there will also be a mention of 1 of several internal projects we are currently running',
    notes: [
      "Add server maintenance alert(with this included you will see an ingame timer that will show when the server restart will happen and you'll be kicked)",
      'Fix working sprites visible in flatbed',
      'Fix happening only attractor behavior',
      'Fix Falcons in bunkers attempting to shoot out of range',
      'Fix shop tabs missing translations',
      'Fix building preview sprite on upgrade screen',
      'Fix upgrading bunkers having wrong sprite in battle',
      'Changes to how locks are applied, you will no longer be kicked when maintenance gets enabled(you will however not be able to login again until maintenance ends) and you will no longer get planet destroyed in a war if the planet is supposed to have auto repaired already',
      'Increased throughput of alliance requests',
      'Balance changes to strike,mole and missile launcher',
    ],
  },
  {
    headline: 'Christmas update!',
    date: '12/24/2023',
    subtextOne: '',
    subtextTwo: '',
    notes: [
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
]
