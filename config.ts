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
    width: 206,
    height: 50
}

export const SOCIAL_MEDIA: SocialMediaObjects[] = [
    {
        name: 'twitter',
        url: `https://twitter.com/${SITE.author}`,
        active: true,
        linkTitle: `${SITE.siteName} Twitter`
    },
    {
        name: 'github',
        url: `hhttps://github.com/${SITE.author}`,
        active: true,
        linkTitle: `${SITE.siteName} GitHub`
    }
]