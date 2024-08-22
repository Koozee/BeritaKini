import TittleSection from "../../fragments/Tittle/TittleSection"

const PopularNews = () => {
    return (
        <article className='p-20'>
            <TittleSection name={"Berita Terpopuler"} />
            {/* wrapper */}
            <div className='mt-10'>
                <div className='flex justify-between'>

                    <div className='relative flex gap-3 w-[30%]'>
                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">1</div>
                        <img className='rounded-2xl' src="/img/berita1.png" alt="" />
                        <div className='relative h-full'>
                            <p className='font-semibold text-base pr-32'>Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</p>
                            <div className='absolute bottom-0 flex items-center gap-3'>
                                <a className='text-blue-500 font-bold' href="">Politik</a>
                                <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                <p>22 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-200 w-[1px]'></div>

                    <div className='relative flex gap-3 w-[30%]'>
                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">2</div>
                        <img className='rounded-2xl' src="/img/berita2.png" alt="" />
                        <div className='relative h-full'>
                            <p className='font-semibold text-base pr-32'>Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie</p>
                            <div className='absolute bottom-0 flex items-center gap-3'>
                                <a className='text-blue-500 font-bold' href="">Nasional</a>
                                <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                <p>22 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-200 w-[1px]'></div>

                    <div className='relative flex gap-3 w-[30%]'>
                    <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">3</div>
                        <img className='rounded-2xl' src="/img/berita3.png" alt="" />
                        <div className='relative h-full'>
                            <p className='font-semibold text-base pr-32'>Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan</p>
                            <div className='absolute bottom-0 flex items-center gap-3'>
                                <a className='text-blue-500 font-bold' href="">Nasional</a>
                                <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                <p>22 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default PopularNews