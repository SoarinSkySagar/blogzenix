"use client"

export default function PaginationIndex(props) {
    const isSelected = props.selected === props.index;

    if (props.index === -1) {
        return (
            <p className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium">....</p>
        )
    }

    if (isSelected) {
        return (
            <button className="border-pink-500 text-pink-600 border-t-2 pt-4 px-4 inline-flex items-center text-lg font-medium" aria-current="page">{props.index}</button>
        )
    } else {
        return (
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-lg font-medium">{props.index}</button>
        )
    }
}
