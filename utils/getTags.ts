import { slugString } from "./slugify";

const getTags = (posts) => {
    let tags: string[] = []
    const filteredPosts = posts.filter(post => post.tags)
    filteredPosts.forEach(post => {
        tags = [...tags, ...post.tags]
            .map(tag => slugString(tag))
            .filter((tag, index, self) => self.indexOf(tag) === index)
    })

    return tags
}

export default getTags