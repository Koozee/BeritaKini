import TittleSection from "../../fragments/Tittle/TittleSection"

const Comment = () => {
    return (
        <div className='flex flex-col gap-6'>
            <TittleSection name={"Komentar"} />
            <div className='flex flex-col gap-4'>
                <div className='border-b-2 py-6 lg:pr-10'>
                    <div className='flex gap-7 pl-5 w-full'>
                        <img className='rounded-lg w-14 h-14' src="/userImg/user1.png" alt="user1" />
                        <form className='w-full h-full' action="">
                            <div>
                                <textarea className='w-full h-full border-2 rounded-lg p-3' name="" id="" cols="30" rows="10" placeholder='Apa yang anda ingin tanyakan?'></textarea>
                            </div>
                            <div className='text-sm text-end font-light'>
                                0/50
                            </div>
                            <button className='bg-blue-600 text-white py-[14px] px-5 rounded-lg'>
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>

                <div className='border-b-2 py-6 pr-10'>
                    <div className='pb-6'>
                        <div className='flex gap-7 pl-5 w-full'>
                            <img className='rounded-lg w-14 h-14' src="/userImg/user2.png" alt="user2" />
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                                    <p className='text-gray-600 font-semibold text-sm lg:text-base'>UJANG YUSMEIDI S.P., M.Agr.</p>
                                    <div className='w-[5px] h-[5px] bg-gray-400 rounded-full hidden lg:block'></div>
                                    <p className='text-gray-400'>28 Mar 2024 11:15</p>
                                </div>
                                <p className='lg:text-lg'>Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?</p>
                                <button className='w-max text-blue-500 font-bold'>Balas</button>
                            </div>
                        </div>
                    </div>
                    <div className='pr-10 pl-5 lg:pl-20'>
                        <div className='flex gap-7 pl-5 w-full'>
                            <img className='rounded-lg w-14 h-14' src="/userImg/user3.png" alt="user3" />
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                                    <p className='text-gray-600 font-semibold text-sm lg:text-base'>DINA RIKHA RIYANAWATI, S.Pd</p>
                                    <div className='w-[5px] h-[5px] bg-gray-400 rounded-full hidden lg:block'></div>
                                    <p className='text-gray-400'>28 Mar 2024 11:15</p>
                                </div>
                                <p className='text-lg'>saya mengunduh sertifikatnya kok juga belumbisa</p>
                                <button className='w-max text-blue-500 font-bold'>Balas</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* pagination  */}
                <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0'>
                    <div className='flex items-center gap-4 font-medium'>
                        <div>Item per page </div>
                        <select className='border-b-2 h-10 w-11' name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                        <div>of 200</div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </button>
                        <a href='' className='py-2 px-4 font-medium w-10 h-10 text-blue-500'>1</a>
                        <a href='' className='py-2 px-4 font-medium w-10 h-10'>2</a>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* end comment */}
        </div>
    )
}

export default Comment