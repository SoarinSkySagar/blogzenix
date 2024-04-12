import React from 'react'

export default function PaginationIndex(props) {

    if (props.index === '....') {
        return (
            <p className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium">{props.index}</p>
        )
    }

    if (props.selected === props.index) {
        return (
            <button
                className="border-pink-500 text-pink-600 border-t-2 pt-4 px-4 inline-flex items-center text-lg font-medium"
                aria-current="page"
            >
                {props.index}
            </button>
        )
    }

  return (
    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-lg font-medium">{props.index}</button>
  )
}
