"use client";
import { useState } from "react";

const siteImageList = [
  {
    path: "/profile/site/introduce.jpg",
    url: "https://main.dbz2q5mr81v86.amplifyapp.com/",
    title: "自己紹介ページ作ってみた",
  },
  {
    path: "/profile/site/msc-bellissima.jpg",
    url: "https://bellissima.sumisora.tech",
    title: "クルーズ旅行記",
  },
  {
    path: "/profile/site/household.jpg",
    url: "https://household.sumisora.tech",
    title: "家計簿アプリ",
  },
];

export default function Site() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? siteImageList.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === siteImageList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="site" className="scroll-mt-24">
      <div className="glass rounded-3xl p-8 sm:p-10">
        <h5 className="section-title">
          <span className="gradient-text">Site</span>
        </h5>

        <div className="group relative overflow-hidden rounded-2xl border border-espresso/10">
          <img
            src={siteImageList[currentIndex].path}
            alt={siteImageList[currentIndex].title}
            className="h-72 w-full object-cover object-center duration-700 sm:h-96 lg:h-[480px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/15 to-transparent" />

          <a
            href={siteImageList[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 right-6 text-lg font-semibold text-cream underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold sm:text-2xl"
          >
            {siteImageList[currentIndex].title}
          </a>

          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 bg-black/30 p-2 text-cream opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 bg-black/30 p-2 text-cream opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {siteImageList.map((site, slideIndex) => (
            <button
              key={site.path}
              onClick={() => goToSlide(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                slideIndex === currentIndex
                  ? "w-8 bg-gradient-to-r from-gold to-terracotta"
                  : "w-3 bg-espresso/20 hover:bg-espresso/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
