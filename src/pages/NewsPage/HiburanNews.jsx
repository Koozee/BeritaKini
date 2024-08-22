import TittleSection from "../../components/fragments/Tittle/TittleSection"
import Footer from "../../components/layouts/Footer/Footer"
import Header from "../../components/layouts/Header/Header"
import CardNews from "../../components/fragments/CardNews/CardNews";
import { useFetchHiburanNews } from "../../hooks/useFetchHiburanNews"
const HiburanNews = () => {
    // get data from hooks
    const { hiburanNews, error, loading } = useFetchHiburanNews()
    if (loading) {
        return (
            <div className="absolute top-1/2 left-1/2 text-center">
                <div
                    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"
                ></div>
                <h2 className="text-zinc-900 mt-4">Memuat Berita...</h2>
            </div>
        )
    }
    if (error) return <p>Error: {error}</p>;
    let currentPage = 1
    let postPerPage = 8
    let lastPostIndex = currentPage * postPerPage
    let firstPostIndex = lastPostIndex - postPerPage
    let currentPost = hiburanNews.slice(firstPostIndex, lastPostIndex)

    return (
        <>
            <Header />
            <main className="h-full relative top-32 p-7 lg:p-20">
                <TittleSection name={"Hiburan"} />
                <article className='mt-10'>
                    <div className='lg:grid grid-cols-4 gap-16'>
                        {currentPost.map((item =>
                            <CardNews key={item.link} news={item} category={"hiburan"} />
                        ))}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default HiburanNews