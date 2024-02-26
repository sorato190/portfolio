export default function Profile() {

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
              <p className="text-gray-700">{`YouTube : Kevin's English Roomにハマってます`}</p>
              <p className="text-gray-700">ゲーム(Switch) : 大学時代の友人とオンラインで桃鉄</p>
              <p className="text-gray-700">お出掛け : 名古屋、山口、金沢、静岡など車で旅行</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}