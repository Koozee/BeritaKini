import Header from '../../layouts/Header/Header'
import Hero from '../../layouts/Hero/Hero'
import PopularNews from '../../layouts/News/PopularNews'
import RecomNews from '../../layouts/News/RecomNews'
import Ads from '../../layouts/Ads/Ads'
import Footer from '../../layouts/Footer/Footer'

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <PopularNews />
            <RecomNews />
            <Ads />
            <Footer />
        </>
    )
}

export default HomePage