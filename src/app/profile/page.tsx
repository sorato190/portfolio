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

  const Profile = () => {
    return (
      < div className="md:mx-1 grid grid-cols-1 gap-1 sm:grid-cols-2" >
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
      <div className="flex justify-center items-center">
        <div className="block w-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills
          </h5>
          < div className="md:mx-10 grid grid-cols-2 gap-4 lg:grid-cols-3" >
            {skillsLogo.map(logo => {
              return (
                <div className="flex justify-center p-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
      <div className="flex justify-center items-center">
        <div className="block w-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Qualification
          </h5>
          < div className="md:mx-10 grid grid-cols-2 gap-4 sm:grid-cols-3" >
            {qualification.map((item) => {
              return (
                <div className="font-normal text-lg lg:text-xl text-gray-700 dark:text-gray-400">
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Profile />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Qualification />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Skills />
    </>
  )
}