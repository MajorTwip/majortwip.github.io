/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'COMSTOCK Logs',
  author: 'MajorTwip',
  headerTitle: 'Comstock.ch',
  description: 'Personal Blog, some kind of Knowledge-Store',
  language: 'de-ch',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://majortwip.github.io/',
  siteRepo: 'https://github.com/MajorTwip/majortwip.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: 'majortwip@comstock.ch',
  github: 'https://github.com/MajorTwip',
  x: 'https://twitter.com/MajorTwip',
  facebook: '',
  youtube: 'https://www.youtube.com/@majortwip',
  linkedin: '',
  threads: '',
  instagram: 'https://www.instagram.com/comstockprojects/',
  medium: '',
  bluesky: '',
  locale: 'de-CH',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    //umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
    //  umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    //},
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
  },
  comments: {
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
