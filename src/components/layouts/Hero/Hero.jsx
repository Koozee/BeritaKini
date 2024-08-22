import { Link } from "react-router-dom"
import Time from "../../fragments/Time/Time"

const Hero = () => {
    return (
        <main className='h-screen flex flex-col items-center justify-center p-7 lg:p-20 mx-auto relative sm:top-20'>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>
                <article className='lg:w-2/5 flex flex-col gap-7'>
                    <h3 className='font-semibold'>Headline</h3>
                    <h2 className='font-bold lg:text-4xl'>Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualfikasi</h2>
                    <p className='text-base font-normal'>Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.</p>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(130, 130, 130, 1)" class="bi bi-calendar-event" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                        <Time name={"22 Januari 2024"} />
                    </div>
                    <Link to="/detailsnews" className='w-max text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2' href="#">
                        <p>Baca Selengkapnya</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </Link>
                </article>
                <img className='lg:w-1/2 rounded-3xl' src="./img/heroImage.png" alt="heroImg" />
            </div>
            {/* pagination */}
            <div className='flex items-center justify-center my-10'>
                <button className='mr-5 font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                </button>
                <p className='font-semibold'>1</p>
                <p className='mx-10 font-semibold'>dari</p>
                <p className='font-semibold'>5</p>
                <button className='ml-5 font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </div>
        </main>
    )
}

export default Hero