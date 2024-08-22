import Navbar from "../../fragments/Navigation/Navbar"

const Header = () => {
    return (
        <header className='border-b-2 px-[72px] py-8'>
            <div className='flex items-center justify-between'>
                <a href="#">
                    <img src="/img/logoHeader.png" alt="" />
                </a>
                <Navbar />
            </div>
        </header>
    )
}

export default Header