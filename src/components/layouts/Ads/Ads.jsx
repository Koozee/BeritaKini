const Ads = () => {
    return (
        <section className='mt-10 p-7 lg:p-20'>
            <div className='container mx-auto'>
                <img className='mx-auto' src="/img/bannerADS.png" alt="ads" />
            </div>
            <div className='flex justify-center gap-10 mt-5'>
                <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
            </div>
        </section>
    )
}

export default Ads