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
    svg?: string;
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

export type Author = {
    name: string;
    image: string;

}

export interface PostCardProps {
	slug: string;
	title: string;
	ogImage: object;
	tag: string[];
    draft: boolean;
    featured: boolean;
	description: string;
	publishedAt: Date;
	author: string;
    language: string;
    readTime: number;
    rating: number;

}