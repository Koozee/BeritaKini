const TittleSection = (props) => {
    const {name} = props
    return (
        <div className='flex items-center gap-4'>
            <div className='bg-blue-600 w-[5px] h-10 rounded-3xl'></div>
            <h2 className='font-bold text-2xl'>{name}</h2>
        </div>
    )
}

export default TittleSection