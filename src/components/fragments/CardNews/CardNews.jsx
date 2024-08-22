import { Link } from "react-router-dom"
import Time from "../Time/Time"
const CardNews = ({news, category}) => {
    return (
        <div className='group relative flex flex-col gap-4 mb-6 mx-auto'>
            <a href={news.link} target="_blank">
                <img className='group-hover:scale-105 transition-all duration-150 ease-linear rounded-2xl 2xl:w-[90%]' src={news.thumbnail} alt="" />
                <p className='font-semibold text-sm lg:text-base lg:pr-1 mt-4 text-gray-800 group-hover:text-gray-600'>{news.title}</p>
            </a>
            <div className='lg:absolute -bottom-10'>
                <div className='flex lg:flex-row items-center gap-3'>
                    <Link className='text-blue-500 font-bold capitalize text-sm lg:text-base' to={`/${category}-categories`}>{category}</Link>
                    <div className='self-center rounded-full w-1 h-1 bg-gray-400'></div>
                    <Time name={news.formattedDate} />
                </div>
            </div>
        </div>
    )
}

export default CardNews