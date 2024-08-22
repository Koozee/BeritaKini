import { Link } from "react-router-dom"
import Youtube from "../../fragments/Icons/Youtube"
import Instagram from "../../fragments/Icons/Instagram"
import Facebook from "../../fragments/Icons/Facebook"
import SendFilled from "../../fragments/Icons/SendFilled"
const SmNavFooter = () => {
    return (
        <div className="lg:hidden grid grid-cols-2 gap-7 auto-cols-fr my-10">
            <div className='flex lg:hidden flex-col gap-3'>
                <p className='text-white font-semibold text-lg text-center'>Ikuti Kami</p>
                <div className='flex justify-center gap-5'>
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
            <nav className='text-center text-white order-3 lg:order-none'>
                <p className='font-medium text-xl'>Telusuri</p>
                <ul className='flex flex-col gap-3 mt-5'>
                    <li className="hover:text-slate-400"><Link to="/">Beranda</Link></li>
                    <li className="hover:text-slate-400"><Link to="/gayahidup-categories">Gaya Hidup</Link></li>
                    <li className="hover:text-slate-400"><Link to="/teknologi-categories">Teknologi</Link></li>
                    <li className="hover:text-slate-400"><Link to="/ekonomi-categories">Ekonomi</Link></li>
                    <li className="hover:text-slate-400"><Link to="/olahraga-categories">Olahraga</Link></li>
                    <li className="hover:text-slate-400"><Link to="/nasional-categories">Nasional</Link></li>
                    <li className="hover:text-slate-400"><Link to="/internasional-categories">Internasional</Link></li>
                </ul>
            </nav>
            <nav className='text-center text-white'>
                <p className='font-medium text-xl'>Bantuan</p>
                <ul className='flex flex-col gap-3 mt-5'>
                    <li className="hover:text-slate-400"><a href="">Kontak Kami</a></li>
                    <li className="hover:text-slate-400"><a href="">Laporan Pembajakan</a></li>
                    <li className="hover:text-slate-400"><a href="">Kebijakan</a></li>
                </ul>
            </nav>
            <div className='2xl:w-[20%] order-last lg:order-none'>
                <p className='text-white text-center lg:text-left text-lg lg:text-xl mb-7'>Berlangganan Berita Terbaru</p>
                <form action="">
                    <div className='bg-white p-2 rounded-lg flex justify-between'>
                        <input className='bg-transparent focus:outline-0 w-[80%] placeholder:text-sm' type="email" name="" id="" placeholder='Masukan Email' required />
                        <button className='bg-blue-500 p-2 rounded-md'>
                            <SendFilled />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SmNavFooter