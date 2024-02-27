'use client'
import { useState } from "react"

const siteImageList = [
  { path: '/profile/site/introduce.jpg', url: 'https://main.dbz2q5mr81v86.amplifyapp.com/', title: '自己紹介ページ作ってみた' },
  { path: '/profile/site/msc-bellissima.jpg', url: 'https://bellissima.sumisora.tech', title: 'クルーズ旅行記' },
  { path: '/profile/site/household.jpg', url: 'https://household.sumisora.tech', title: '家計簿アプリ' },
]

export default function Site() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? siteImageList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === siteImageList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <>
      {/* <div className="max-w-[1000px] h-[380px] w-full m-auto py-2 px-4 relative"> */}
      <div className="block w-full p-6 border border-gray-200 rounded-lg shadow  dark:bg-gray-300 dark:border-gray-700 dark:">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Site
        </h5>
        < div className="relative md:mx-1 grid grid-cols-1 group" >
          {/* Site image */}
          <div className="relative w-full h-hull rounded-2xl bg-center bg-cover ">
            <img
              src={siteImageList[currentIndex].path}
              loading="lazy"
              alt="Photo by Sorato Ozaki"
              className="w-full h-auto lg:h-80 rounded-2xl object-cover object-center duration-700"
            />
          </div>
          {/* Site link */}
          <a href={siteImageList[currentIndex].url} target="_blank" rel="noopener noreferrer"
            className='bg-slate-200 bg-opacity-80 p-3 rounded-md hover:scale-110 duration-300 underline absolute top-[10%] -translate-x-0 translate-y-[-20%] right-10 text-md lg:text-3xl'>
            {siteImageList[currentIndex].title}
          </a>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <button onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <button onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          {/* Slide index bar */}
          <div className="flex top-4 justify-center py-2">
            {siteImageList.map((site, slideIndex) => {
              return (
                <div
                  key={slideIndex}
                  onClick={() => { goToSlide(slideIndex) }}
                  className={`rounded-md w-8 h-1 bg-gray-400 mx-1 cursor-pointer ${slideIndex === currentIndex ? 'bg-blue-400' : ''}`}>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}