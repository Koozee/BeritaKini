import Header from '../../components/layouts/Header/Header'
import Footer from '../../components/layouts/Footer/Footer'
import ContentNews from '../../components/layouts/ContentNews/ContentNews'
import Comment from '../../components/layouts/Comment/Comment'
import { useFetchRecentNews } from "../../hooks/useFetchRecentNews"
import CardNews from "../../components/fragments/CardNews/CardNews";
import TittleSection from '../../components/fragments/Tittle/TittleSection'

const NewsPage = () => {
    // get data from hooks
    const { recentNews, loading, error } = useFetchRecentNews();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    let currentPost = recentNews.slice(0, 3)
    return (
        <>
            <Header />
            <main className='relative top-28 lg:top-16 p-7 lg:p-20 z-0'>
                <div className='lg:flex justify-between'>
                    <div className='lg:w-[65%]'>
                        <ContentNews />
                        <Comment />
                        <div className='mt-32'>
                            <div className='flex justify-between mb-8'>
                                <TittleSection name={"Berita Terkait"} />
                                <button className='w-max font-medium py-3 px-4 lg:py-[14px] lg:px-5 border-2 border-sky-600/80 bg-sky-300/30 text-sky-600 rounded-lg hover:bg-sky-300/50'>Lihat Semua</button>
                            </div>
                            <div className='relative md:grid grid-cols-3 gap-6'>
                                {currentPost.map(item =>
                                    <CardNews key={item.link} news={item} category={"Nasional"} />
                                )}
                            </div>
                        </div>
                    </div>

                    <article className='hidden lg:block lg:w-[30%] 2xl:w-[25%]'>
                        <TittleSection name={"Berita Terpopuler"} />
                        {/* wrapper */}
                        <div className='mt-10'>
                            <div className='flex flex-col justify-between gap-10'>

                                <div className='relative flex gap-3'>
                                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">1</div>
                                    <img className='rounded-2xl' src="/img/berita1.png" alt="" />
                                    <div className='relative h-full'>
                                        <p className='font-semibold text-base w-[80%]'>Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</p>
                                        <div className='flex items-center gap-3 pt-6'>
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
                                        <div className='flex items-center gap-3 pt-6'>
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
                                        <div className='flex items-center gap-3 pt-6'>
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
            </main>
            <Footer />
        </>
    )
}

export default NewsPage