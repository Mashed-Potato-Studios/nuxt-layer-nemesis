export type SiteConfig = {
    siteName: string;
    siteDescription: string;
    siteUrl: string;
    description: string;
    title: string;
    author: string;
    ogpImage: string;
    ogpSiteName: string;
    ogpDescription: string;
    lightorDark: boolean;
    postsPerPage: number;
}


export type SocialMediaObjects = {
    name: SocialMedia;
    url: string;
    active: boolean;
    linkTitle: string;
}

export type SocialIcons = {
    [key in SocialMedia]: string;
}

export type SocialMedia =
    | 'twitter'
    | 'github'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'youtube'
    | 'twitch'
    | 'tiktok'
    | 'snapchat'
    | 'reddit'
    | 'pinterest';


export type BlogPost = {
    author: string;
    publishedDateAt: Date;
    title: string;
    blogSlug?: string;
    featured?: boolean;
    draft?: boolean;
    tags?: string[];
    ogpImage?: string;
    description?: string;
}