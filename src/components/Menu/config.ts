import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bafswap.live/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: 'swap',
      },
      {
        label: 'Liquidity',
        href: 'pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: '/pool',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://bafswap.live/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://bafswap.live/pools',
  },
  // {
  //   label: 'Prediction (BETA)',
  //   icon: 'PredictionsIcon',
  //   href: 'https://bafswap.live/prediction',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://bafswap.live/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://bafswap.live/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://bafswap.live/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://bafswap.live/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://bafswap.live/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://bafswap.live/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.bafswap.live',
      },
      {
        label: 'Tokens',
        href: 'https://info.bafswap.live/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.bafswap.live/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.bafswap.live/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://bafswap.live/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://docs.pancakeswap.finance',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
