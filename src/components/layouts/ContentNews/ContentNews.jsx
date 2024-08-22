import ChevronRight from "../../fragments/Icons/chevronRight"
import House from "../../fragments/Icons/House"

const ContentNews = () => {
    return (
        <>
            <div className="flex items-center gap-3">
                <House />
                <a href="">Beranda</a>
                <ChevronRight />
                <a href="">Nasional</a>
                <ChevronRight />
                <a href="">Detail</a>
            </div>
            <div className='relative mb-20'>
                <h1 className='font-semibold text-3xl'>Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h1>
                <div className='flex items-center gap-3'>
                    <a className='text-blue-500 font-bold' href="">Politik</a>
                    <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                    <p>22 Jan 2024</p>
                </div>
                <figure>
                    <img className='rounded-2xl w-full' src="/img/details1.png" alt="" />
                    <figcaption className='text-gray-400'>Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah kandang. (CNN Indonesia/Adhi Wicaksono)</figcaption>
                </figure>
                <p className='py-3 text-justify text-base'>
                    Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas  Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila  lolos ke putaran ketiga Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan Stadion GBK yang jadi markas Indonesia  dalam babak kedua Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput  GBK rusak parah. PPKGBK selalu pengelola pun mendapat kritik deras.
                </p>

                <p className='py-3 text-justify text-base'>
                    Acara-acara di luar  sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak  terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak terlihat sempurna meskipun  kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun  muncul.
                </p>

                <p className='py-3 text-justify text-base'>
                    "Nanti kami akan  sampaikan [rencana pindah dari GBK]," ujar Sumardji saat ditanya  kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus  dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih  memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi  rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya  betul-betul disiapkan dan diperhatikan kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu,  sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon supaya  diperhatikan," kata Sumardji menambahkan.
                </p>
            </div>
        </>
    )
}

export default ContentNews