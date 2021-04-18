module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '3f7143371a2149258e90723a2523bed2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Sky\'s Blog - 记录网络生活点滴',
  domain: 'zdl.im',
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
  donate: 'https://b.zdl.im',

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
'/freess': '4d44446188b841c892f714b5c4891bbd',
'/nodesub': '95afc6fa369d4851be99b79aea9a00ea',
'/ishare': 'a246595c811943b8823a9ce9698cd8fa',
'/skynote': 'cbcb545313994764925a083d0cc908cb',
'/archives': '601d5ecb3ca84285af2032006fade1ce',
 },
//  pageUrlOverrides: null
}
