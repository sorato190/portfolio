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

export default function Qualification() {

  return (
    <div id='qualification' className="flex justify-center items-center">
      <div className="block w-full p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Qualification
        </h5>
        < div className="md:mx-10 grid grid-cols-2 gap-4 sm:grid-cols-3" >
          {qualification.map((item) => {
            return (
              <div key={item} className="font-normal text-lg lg:text-xl text-gray-700 dark:text-gray-600">
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}