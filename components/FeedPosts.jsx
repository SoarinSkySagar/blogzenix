"use client"

import Image from "next/image"
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import PaginationIndex from "./PaginationIndex"
import { posts } from "@/lib/posts"
import BlogCard from "./BlogCard"

import React, { useState } from 'react'

export default function FeedPosts() {

  const len = Math.ceil(posts.length / 15);
  const lenArr = []

  for (let i = 1; i <= len; i++) {
    if (len < 8) {
      lenArr.push(i);
    } else {
      if (i < 4 || i > len - 3) {
        lenArr.push(i);
      }
      if (i === 4) {
        lenArr.push(-1);
      }
    }
  }

  const [arr, setArr] = useState(lenArr);

  const [selected, setSelected] = useState(1);

  const handleClick = (pageNumber) => {
    if (pageNumber != -1) {
      setSelected(pageNumber);
    }

    if (len > 7) {
      if (pageNumber === 4) {
        setArr([1, 2, 3, 4, -1, len-2, len-1, len])
      }
      if (pageNumber > 4 && pageNumber < arr[arr.length-3] - 1) {
        setArr([1, 2, 3, -1, pageNumber, -1, len-2, len-1, len])
      }
      if (pageNumber === arr[arr.length-3] - 1) {
        setArr([1, 2, 3, -1, pageNumber, len-2, len-1, len])
      }
      if (pageNumber < 4 || pageNumber > arr[arr.length-3] - 1) {
        setArr([1, 2, 3, -1, len-2, len-1, len])
      }
    }
  };

  const postsArr = posts.slice((selected - 1) * 15, selected * 15);


  return (
    <div>
      <div className="mt-12 max-w-lg mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:max-w-none lg:auto-cols-min lg:grid-flow-dense">
          {postsArr.map((post, index) => (
            <BlogCard post={post} key={index} />
          ))}
          <br/>
          
        </div>

        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-12">
          <div className="-mt-px w-0 flex-1 flex">
            <button
              onClick={() => {selected != 1 ? handleClick(selected - 1) : null}}
              className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Previous
            </button>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {arr.map((pageNumber, index) => (
              <div key={index} onClick={() => handleClick(pageNumber)}>
                <PaginationIndex index={pageNumber} selected={selected} />
              </div>
            ))}
          </div>
          <div className="-mt-px w-0 flex-1 flex justify-end">
            <button
              onClick={() => {selected != arr[arr.length-1] ? handleClick(selected + 1) : null}}
              className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              Next
              <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
          </div>
        </nav>
    </div>
  )
}
