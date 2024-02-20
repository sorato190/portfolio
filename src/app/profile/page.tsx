'use client'
import { useState } from "react"

const skillsLogo = [
  { "path": "python-logo.svg", "width": 18, "height": 16 },
  { "path": "django-logo.svg", "width": 18, "height": 16 },
  { "path": "typescript-logo.svg", "width": 18, "height": 16 },
  { "path": "react-logo.svg", "width": 16, "height": 16 },
  { "path": "nextjs-logo.svg", "width": 18, "height": 14 },
  { "path": "github-logo.svg", "width": 16, "height": 16 },
  { "path": "prisma-logo.svg", "width": 18, "height": 16 },
  { "path": "mysql-logo.png", "width": 18, "height": 14 },
  { "path": "zabbix-logo.png", "width": 18, "height": 16 },
  { "path": "aws-logo.svg", "width": 1, "height": 16 },
  { "path": "kubernetes-logo.svg", "width": 16, "height": 16 },
  { "path": "docker-logo.svg", "width": 18, "height": 16 },
  { "path": "vercel-logo.svg", "width": 18, "height": 16 },
]

const qualification = [
  "ITILファウンデーション",
  "ITパスポート",
  "基本情報処理技術者",
  "応用情報処理技術者",
  "情報セキュリティマネジメント",
  "情報処理安全確保支援士",
  "LinuC-1",
  "LinuC-2",
  "Kubernetes and Cloud Native Associate",
  "Vmware認定技術者(VCP-DCV)",
]

export default function Profile() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const siteImageList = [
    { path: '/profile/site/introduce.jpg', url: 'https://main.dbz2q5mr81v86.amplifyapp.com/', title: '自己紹介サイト作ってみた' },
    { path: '/profile/site/msc-bellissima.jpg', url: 'https://bellissima.sumisora.tech', title: 'クルーズ旅行記' },
    { path: '/profile/site/household.jpg', url: 'https://household.sumisora.tech', title: '家計簿アプリ' },

  ]
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

  const Profile = () => {
    return (
      < div id='profile' className="md:mx-1 grid grid-cols-1 gap-1 sm:grid-cols-2" >
        <div className="flex justify-center items-center">
          <img
            src="/profile/profile-ozaki.jpg"
            loading="lazy"
            alt="Photo by Sorato Ozaki"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full object-cover object-center"
          />
        </div>
        <div className="flex justify-left items-center">
          <div>
            <h1 className="title-font sm:text-xl text-2xl mb-1 font-medium text-gray-900">
              Sorato Ozaki
            </h1>
            <ul className="rounded-lg leading-relaxed max-w-lg">
              <li className="px-6 py-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">出身地</span>
                </div>
                <p className="text-gray-700 text-md">愛媛県 四国中央市</p>
              </li>
              <li className="px-6 py-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">趣味</span>
                </div>
                <p className="text-gray-700">ドライブ / 旅行 / バスケ</p>
              </li>
              <li className="px-6 py-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">休日の過ごし方</span>
                </div>
                <p className="text-gray-700">YouTube : Kevin's English Roomにハマってます</p>
                <p className="text-gray-700">ゲーム(Switch) : 大学時代の友人とオンラインで桃鉄</p>
                <p className="text-gray-700">お出掛け : 名古屋、山口、金沢、静岡など車で旅行</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const Skills = () => {
    return (
      <div id='skills' className="flex justify-center items-center">
        <div className="block w-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills
          </h5>
          < div className="md:mx-10 grid grid-cols-2 gap-4 lg:grid-cols-3" >
            {skillsLogo.map(logo => {
              return (
                <div key={logo.path} className="flex justify-center p-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <img key={logo.path} src={`/profile/skills/${logo.path}`} alt="Logo" className={`w-${logo.width} h-${logo.height}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const Qualification = () => {
    return (
      <div id='qualification' className="flex justify-center items-center">
        <div className="block w-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Qualification
          </h5>
          < div className="md:mx-10 grid grid-cols-2 gap-4 sm:grid-cols-3" >
            {qualification.map((item) => {
              return (
                <div key={item} className="font-normal text-lg lg:text-xl text-gray-700 dark:text-gray-400">
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const Site = () => {
    return (
      <>
        {/* <div className="max-w-[1000px] h-[380px] w-full m-auto py-2 px-4 relative"> */}
        <div className="block w-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Site
          </h5>
          < div className="relative md:mx-1 grid grid-cols-1 group" >
            <div className="relative w-full h-hull rounded-2xl bg-center bg-cover ">
              <img
                src={siteImageList[currentIndex].path}
                // src="/profile/site/msc-bellissima.jpg"
                loading="lazy"
                alt="Photo by Sorato Ozaki"
                className="w-full h-auto lg:h-80 rounded-2xl object-cover object-center duration-500"
              />
            </div>
            <a href={siteImageList[currentIndex].url} target="_blank" rel="noopener noreferrer"
              className='bg-slate-200 bg-opacity-80 p-3 rounded-md hover:scale-110 duration-300 underline absolute top-[10%] -translate-x-0 translate-y-[-20%] right-10 text-xl lg:text-3xl'>
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
            <div className="flex top-4 justify-center py-2">
              {siteImageList.map((site, slideIndex) => {
                return (
                  <div key={slideIndex} onClick={() => { goToSlide(slideIndex) }} className='rounded-md w-8 h-1 bg-gray-400 mx-1 cursor-pointer'></div>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Profile />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Qualification />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Skills />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Site />
    </>
  )
}