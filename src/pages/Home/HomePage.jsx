import Header from '../../components/layouts/Header/Header'
import Hero from '../../components/layouts/Hero/Hero'
import PopularNews from '../../components/layouts/News/PopularNews'
import RecomNews from '../../components/layouts/News/RecomNews'
import Ads from '../../components/layouts/Ads/Ads'
import Footer from '../../components/layouts/Footer/Footer'

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