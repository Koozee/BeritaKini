import Time from "../Time/Time"
const CardNews = ({news}) => {
    // const { link, img, name, date } = props;
    return (
        <div className='flex flex-col gap-3'>
            <a href={news.link} target="_blank">
                <img className='rounded-2xl w-[90%]' src={news.thumbnail} alt="" />
                <p className='font-semibold text-base pr-1 mt-4'>{news.title}</p>
            </a>
            <div className='relative h-full'>
                <div className='my-5 flex items-center gap-3'>
                    <a className='text-blue-500 font-bold' href="">Politik</a>
                    <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                    <Time name={news.formattedDate} />
                </div>
            </div>
        </div>
    )
}

export default CardNews