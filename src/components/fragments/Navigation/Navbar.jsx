const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-6'>
                <li className='font-semibold text-blue-600'><a href="">Beranda</a></li>
                <li className='font-semibold text-slate-600'><a href="">Terbaru</a></li>
                <li className='font-semibold text-slate-600'><a href="">Hiburan</a></li>
                <li className='font-semibold text-slate-600'><a href="">Gaya Hidup</a></li>
                <li className='font-semibold text-slate-600'><a href="">Olahraga</a></li>
                <li className='font-semibold text-slate-600'><a href="">Ekonomi</a></li>
                <li className='font-semibold text-slate-600'><a href="">Teknologi</a></li>
                <li className='font-semibold text-slate-600'><a href="">Nasional</a></li>
                <li className='font-semibold text-slate-600'><a href="">Internasional</a></li>
            </ul>
        </nav>
    )
}

export default Navbar