import { slug as nuxtSlug } from "github-slugger"
import {BlogPost} from "../types";


export const slugString = (text: string) => {
    return nuxtSlug(text)
}

const slugify = (post: BlogPost) => {
    return post.blogSlug ? nuxtSlug(post.blogSlug) : nuxtSlug(post.title)

}

export const nuxtSlugAll  = (strs: string[]) => {
    return strs.map(str => nuxtSlug(str))
}

export default slugify