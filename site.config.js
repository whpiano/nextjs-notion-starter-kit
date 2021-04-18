module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '3f7143371a2149258e90723a2523bed2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Sky\'s Blog - 记录网络生活点滴',
  domain: 'zdlength.im',
  author: 'Sky',

  // open graph metadata (optional)
  description: '免费机场分享、机场推荐',
  socialImageTitle: 'Sky\'s Blog',
  socialImageSubtitle: 'Sky\'s Blog 记录网络生活点滴! 👋',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  weibo: '',
  qq: '1167064',
  weixin: '',
  zhihu: '',
  qqun: '',
  telegram: 'aiotgbot',
  donate: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
pageUrlOverrides: {
'/vpn': '58def352d9e34e6fb5c7fca25f131592',
'/freess': '79a2fa2fd33b4eaaae9989116aab297f',
'/sub': '95afc6fa369d4851be99b79aea9a00ea',
'/ishare': 'd86866e3aa664b6b8c012b6d20890a98',
 },
//  pageUrlOverrides: null
}
