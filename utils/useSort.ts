import {BlogPost} from "~/types";

const useSort = (data: BlogPost[]) => {
    return data.filter((post) => !post.draft)
        .sort((a, b) => {
            return Math.floor(new Date(b.publishedDateAt).getTime() / 1000) - Math.floor(new Date(a.publishedDateAt).getTime() / 1000)
        })
}

export default useSort