import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 text-2xl">Site Infomation</p>

          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 text-4xl">This site built on [AWS Amplify]</h2>

          <p className="mx-auto max-w-screen-2xl text-center text-gray-500 text-xl">AWS Amplifyというサービスを利用して、数回のクリックでデプロイすることができる。</p>
        </div>
      </div>
    </>
  );
}
