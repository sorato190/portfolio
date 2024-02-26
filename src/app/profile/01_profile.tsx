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
                <span className="font-semibold text-lg">出身</span>
              </div>
              <p className="text-gray-700 text-md">愛媛県 四国中央市</p>
            </li>
            <li className="px-6 py-2">
              <div className="flex justify-between">
                <span className="font-semibold text-lg">大学</span>
              </div>
              <p className="text-gray-700 text-md">静岡県 浜松市</p>
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
              <p className="text-gray-700">YouTube / ゲーム(Switch) / ドライブ / バスケ</p>
              <p className="text-gray-700">ドライブは下道で道の駅を巡りながらのんびりドライブするのが好きです。</p>
              <p className="text-gray-700">2023年は下関、能登半島、静岡など車で旅行に行きました。</p>
              <p className="text-gray-700">2024年はハウステンボスに行きたいと思っています。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}