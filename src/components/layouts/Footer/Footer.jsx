import { Link } from "react-router-dom"
import Youtube from "../../fragments/Icons/Youtube"
import Instagram from "../../fragments/Icons/Instagram"
import Facebook from "../../fragments/Icons/Facebook"
import SendFilled from "../../fragments/Icons/SendFilled"
import SmNavFooter from "../../fragments/Navigation/SmNavFooter"
const Footer = () => {
    return (
        <footer className='bg-gray-800 p-7 lg:p-20 mt-40'>
            {/* wrapper footer */}
            <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>

                <div className='flex flex-col gap-10'>
                    <div>
                        <img src="/img/logoFooter.png" alt="logofooter" />
                        <p className='hidden lg:block text-white pt-7'>© 2023 Berita Kini. All Rights Reserved.</p>
                    </div>
                    <div className='hidden lg:flex flex-col gap-3'>
                        <p className='text-white font-semibold text-lg'>Ikuti Kami</p>
                        <div className='flex gap-5'>
                            <a href='#' className='flex items-center justify-center rounded-xl bg-gray-300 w-10 h-10'>
                                <Youtube />
                            </a>

                            <a href='#' className='flex items-center justify-center rounded-xl bg-gray-300 w-10 h-10'>
                                <Instagram />
                            </a>

                            <a href='#' className='flex items-center justify-center rounded-xl bg-gray-300 w-10 h-10'>
                                <Facebook />
                            </a>

                        </div>
                    </div>
                </div>

                <nav className='hidden lg:block text-white'>
                    <p className='font-medium text-xl'>Telusuri</p>
                    <ul className='flex flex-col gap-3 mt-5'>
                        <li><Link to="/">Beranda</Link></li>
                        <li><Link to="/hiburan-categories">Hiburan</Link></li>
                        <li><Link to="/teknologi-categories">Teknologi</Link></li>
                        <li><Link to="/ekonomi-categories">Ekonomi</Link></li>
                        <li><Link to="/olahraga-categories">Olahraga</Link></li>
                        <li><Link to="/nasional-categories">Nasional</Link></li>
                        <li><Link to="/internasional-categories">Internasional</Link></li>
                    </ul>
                </nav>
                <nav className='hidden lg:block text-white'>
                    <p className='font-medium text-xl'>Bantuan</p>
                    <ul className='flex flex-col gap-3 mt-5'>
                        <li><a href="">Kontak Kami</a></li>
                        <li><a href="">Laporan Pembajakan</a></li>
                        <li><a href="">Kebijakan</a></li>
                    </ul>
                </nav>
                <div className='hidden lg:block w-[20%]'>
                    <p className='text-white text-xl mb-7'>Berlangganan Berita Terbaru</p>
                    <form action="">
                        <div className='bg-white p-2 rounded-lg flex justify-between'>
                            <input className='bg-transparent focus:outline-0 w-[80%]' type="email" name="" id="" placeholder='Masukan Email' required />
                            <button className='bg-blue-500 p-2 rounded-md'>
                                <SendFilled />
                            </button>
                        </div>
                    </form>
                </div>

                {/* mobile nav */}
                <SmNavFooter />

                <p className='block lg:hidden text-white pt-7'>© 2023 Berita Kini. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer