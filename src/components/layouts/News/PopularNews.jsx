import TittleSection from "../../fragments/Tittle/TittleSection"

const PopularNews = () => {
    return (
        <article className='p-7 lg:p-20'>
            <TittleSection name={"Berita Terpopuler"} />
            {/* wrapper */}
            <div className='mt-10'>
                <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between'>

                    <div className='relative flex gap-3 lg:pr-6 2xl:w-[30%]'>
                        <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">1</div>
                        <img className='rounded-2xl w-60 h-32 ' src="/img/berita1.png" alt="" />
                        <div className='h-full'>
                            <a href="" className='font-semibold text-sm 2xl:text-base 2xl:pr-32 hover:text-gray-600'>Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</a>
                            <div className='absolute bottom-2 flex items-center gap-2 2xl:gap-3'>
                                <a className='text-blue-500 font-bold text-sm 2xl:text-base' href="">Politik</a>
                                <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                <p className="text-sm 2xl:text-base">22 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-200 w-[1px]'></div>

                    <div className='relative flex gap-3 lg:pr-6 2xl:w-[30%]'>
                        <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">2</div>
                        <img className='rounded-2xl w-60 h-32' src="/img/berita2.png" alt="" />
                        <div className='h-full'>
                            <a href="" className='font-semibold text-sm 2xl:text-base 2xl:pr-32 hover:text-gray-600'>Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie</a>
                            <div className='absolute bottom-2 flex items-center gap-2 2xl:gap-3'>
                                <a className='text-blue-500 font-bold text-sm 2xl:text-base' href="">Nasional</a>
                                <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                <p className="text-sm 2xl:text-base">22 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-200 w-[1px]'></div>

                    <div className='relative flex gap-3 lg:pr-6 2xl:w-[30%]'>
                        <div className="bg-black/80 text-white rounded-full w-4 h-4 p-4 flex items-center justify-center absolute -top-3 -left-3">3</div>
                        <img className='rounded-2xl w-60 h-32' src="/img/berita3.png" alt="" />
                        <div className='h-full'>
                            <a href="" className='font-semibold text-sm 2xl:text-base 2xl:pr-32 hover:text-gray-600'>Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan</a>
                            <div className='absolute bottom-2 flex items-center gap-2 2xl:gap-3'>
                                <a className='text-blue-500 font-bold text-sm 2xl:text-base' href="">Nasional</a>
                                <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                                <p className="text-sm 2xl:text-base">22 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default PopularNews