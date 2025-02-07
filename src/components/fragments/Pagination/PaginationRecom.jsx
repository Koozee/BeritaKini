const PaginationRecom = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const DOTS = "...";

    const getPagination = () => {
        const pages = [];
        const leftSibling = Math.max(currentPage - 1, 1);
        const rightSibling = Math.min(currentPage + 1, totalPages);

        const showLeftDots = leftSibling > 2;
        const showRightDots = rightSibling < totalPages - 1;

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (!showLeftDots && showRightDots) {
                for (let i = 1; i <= 3; i++) pages.push(i);
                pages.push(DOTS);
                pages.push(totalPages - 1, totalPages);
            } else if (showLeftDots && !showRightDots) {
                pages.push(1, 2);
                pages.push(DOTS);
                for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push(DOTS);
                for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);
                pages.push(DOTS);
                pages.push(totalPages);
            }
        }
        return pages;
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const startResult = (currentPage - 1) * postsPerPage + 1;
    const endResult = Math.min(currentPage * postsPerPage, totalPosts);

    return (
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between mt-16'>
            <p>
                Showing <span>{startResult}</span> to <span>{endResult}</span> of <span>{totalPosts}</span> results
            </p>
            <div className='flex items-center gap-4'>
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 ${currentPage === 1 ? 'text-gray-400' : 'hover:text-blue-500'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                    <p className="hidden lg:block">Previous</p>
                </button>

                {getPagination().map((page, index) =>
                    page === DOTS ? (
                        <span key={index} className="flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 text-gray-500">...</span>
                    ) : (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={`flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 rounded-xl ${
                                currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                            }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 ${currentPage === totalPages ? 'text-gray-400' : 'hover:text-blue-500'}`}
                >
                    <p className="hidden lg:block">Next</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PaginationRecom;
