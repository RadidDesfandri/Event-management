"use client"

import { FC } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import ReactPagination from "react-paginate"

interface PaginationProps {
    onPageChange: ({ selected }: { selected: number }) => void
    total: number
    take: number
}

const Pagination: FC<PaginationProps> = ({ total, onPageChange }) => {
    return (
        <ReactPagination
            breakLabel={<span>...</span>}
            nextLabel={<FaChevronCircleRight className="w-5 h-5 text-gray-300"/>}
            previousLabel={<FaChevronCircleLeft className="w-5 h-5 text-gray-300"/>}
            pageCount={total}
            renderOnZeroPageCount={null}
            containerClassName="flex gap-4 w-fit m-4"
            pageLinkClassName="px-4 text-white py-2 rounded-lg"
            activeLinkClassName="bg-blue-900 text-white"
            onPageChange={onPageChange}
        />
    )
}

export default Pagination
