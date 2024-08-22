// import { useFetchRecentNews } from "../../../hooks/useFetchRecentNews"
// const { recentNews, loading, error } = useFetchRecentNews();
const PaginationRecom = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className='flex items-center justify-between mt-16'>
            <p>Showing <span>1 </span>to <span>{postsPerPage}</span> of <span>{totalPosts} </span>results</p>
            <div className='flex items-center gap-8'>
                <button className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                    <p>Previous</p>
                </button>
                <a href='' className='flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500 text-white'>1</a>
                <a href='' className='flex items-center justify-center w-10 h-10 rounded-xl '>2</a>
                <a href='' className='flex items-center justify-center w-10 h-10 rounded-xl '>...</a>
                <a href='' className='flex items-center justify-center w-10 h-10 rounded-xl '>8</a>
                <a href='' className='flex items-center justify-center w-10 h-10 rounded-xl '>9</a>
                <button className='flex items-center gap-1'>
                    <p>Next</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PaginationRecom