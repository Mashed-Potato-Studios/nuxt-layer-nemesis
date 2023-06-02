import type { SiteConfig, SocialMediaObjects, SocialIcons, SocialMedia } from './types';

export const SITE: SiteConfig = {
    siteName: 'My Nuxt Site',
    siteDescription: 'My Nuxt Site Description',
    siteUrl: 'https://example.com',
    description: 'My Nuxt Site Description',
    title: 'My Nuxt Site',
    author: 'Nuxt User',
    ogpImage: 'https://example.com/ogp.png',
    ogpSiteName: 'My Nuxt Site',
    ogpDescription: 'My Nuxt Site Description',
    lightorDark: true,
    postsPerPage: 5,
}

export const LOCALE = ['en-US', 'ja-JP'];

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    alt: 'Nemesis',
    width: 206,
    height: 50
}

export const SOCIAL_MEDIA: SocialMediaObjects[] = [
    {
        name: 'twitter',
        url: `https://twitter.com/${SITE.author}`,
        active: true,
        linkTitle: `${SITE.siteName} Twitter`,
    },
    {
        name: 'github',
        url: `hhttps://github.com/${SITE.author}`,
        active: true,
        linkTitle: `${SITE.siteName} GitHub`,
        svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`
    }
]