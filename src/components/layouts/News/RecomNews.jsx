import Search from "../../fragments/Search/Search"
import TittleSection from "../../fragments/Tittle/TittleSection"
import { useFetchRecentNews } from "../../../hooks/useFetchRecentNews"
import CardNews from "../../fragments/CardNews/CardNews";
import PaginationRecom from "../../fragments/Pagination/PaginationRecom";
const RecomNews = () => {
    // get data from hooks
    const { recentNews, loading, error } = useFetchRecentNews();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // count post per page
    let currentPage = 1
    let postPerPage = 8
    let lastPostIndex = currentPage * postPerPage
    let firstPostIndex = lastPostIndex - postPerPage
    let currentPost = recentNews.slice(firstPostIndex, lastPostIndex)
    return (
        <section className='p-20 mx-auto'>
            <div className='flex items-center justify-between mr-10'>
                <TittleSection name={"Rekomendasi Untuk Anda"} />
                <Search />
            </div>

            {/* wrapper */}
            <article className='mt-10'>
                <div className='grid grid-cols-4 gap-10'>
                    {currentPost.map((item =>
                        <CardNews key={item.link} news={item} />
                    ))}
                </div>
            </article>

            {/* pagination */}
            <PaginationRecom totalPosts={recentNews.length} postsPerPage={postPerPage}/>
        </section>
    )
}

export default RecomNews