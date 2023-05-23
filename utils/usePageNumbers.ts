import { SITE } from "~/config";

/**
 * @name usePageNumbers
 * @param totalPosts
 * @returns {number[]}
 * @description Returns an array of page numbers based on the total number of posts
 */
const usePageNumbers = (totalPosts: number) => {
    const numberOfPages = totalPosts / Number(SITE.postsPerPage);

    let pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
        pageNumbers = [...pageNumbers, i];

    }
    return pageNumbers;
}

export default usePageNumbers