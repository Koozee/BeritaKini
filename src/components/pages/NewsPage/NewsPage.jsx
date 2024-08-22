import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import ContentNews from '../../layouts/ContentNews/ContentNews'
import Comment from '../../layouts/Comment/Comment'
import { useFetchRecentNews } from "../../../hooks/useFetchRecentNews"
import CardNews from "../../fragments/CardNews/CardNews";
import TittleSection from '../../fragments/Tittle/TittleSection'

const NewsPage = () => {
    // get data from hooks
    const { recentNews, loading, error } = useFetchRecentNews();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    let currentPost = recentNews.slice(0, 3)
    return (
        <>
            <Header />
            <article className='px-20'>
                <div className='flex justify-between'>
                    <div className='w-[65%]'>
                        <ContentNews />
                        <Comment />
                        <TittleSection name={"Berita Terkait"} />
                        <div className='grid grid-cols-3'>
                            {currentPost.map(item =>
                                <CardNews key={item.link} news={item} />
                            )}
                        </div>
                    </div>

                    <article className='w-[25%]'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-blue-600 w-[5px] h-10 rounded-3xl'></div>
                            <h2 className='font-bold text-2xl'>Berita Terpopuler</h2>
                        </div>
                        {/* wrapper */}
                        <div className='mt-10'>
                            <div className='flex flex-col justify-between gap-10'>

                                <div className='relative flex gap-3'>
                                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">1</div>
                                    <img className='rounded-2xl' src="/img/berita1.png" alt="" />
                                    <div className='relative h-full'>
                                        <p className='font-semibold text-base w-[80%]'>Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</p>
                                        <div className='flex items-center gap-3'>
                                            <a className='text-blue-500 font-bold' href="">Politik</a>
                                            <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                            <p>22 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-gray-200 h-[1px]'></div>

                                <div className='relative flex gap-3'>
                                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">2</div>
                                    <img className='rounded-2xl' src="/img/berita2.png" alt="" />
                                    <div className='relative h-full'>
                                        <p className='font-semibold text-base w-[80%]'>Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie</p>
                                        <div className='flex items-center gap-3'>
                                            <a className='text-blue-500 font-bold' href="">Nasional</a>
                                            <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                            <p>22 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-gray-200 h-[1px]'></div>

                                <div className='relative flex gap-3'>
                                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">3</div>
                                    <img className='rounded-2xl' src="/img/berita3.png" alt="" />
                                    <div className='relative h-full'>
                                        <p className='font-semibold text-base w-[80%]'>Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan</p>
                                        <div className='flex items-center gap-3'>
                                            <a className='text-blue-500 font-bold' href="">Nasional</a>
                                            <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                            <p>22 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </article>
                </div>
            </article>
            <Footer />
        </>
    )
}

export default NewsPage