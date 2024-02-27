const skillsLogo = [
  { "path": "python-logo.svg", "width": 18, "height": 16 },
  { "path": "django-logo.svg", "width": 18, "height": 16 },
  { "path": "typescript-logo.svg", "width": 18, "height": 16 },
  { "path": "react-logo.svg", "width": 16, "height": 16 },
  { "path": "nextjs-logo.svg", "width": 18, "height": 14 },
  { "path": "github-logo.svg", "width": 16, "height": 16 },
  { "path": "prisma-logo.svg", "width": 18, "height": 16 },
  { "path": "mysql-logo.png", "width": 18, "height": 16 },
  { "path": "zabbix-logo.png", "width": 18, "height": 16 },
  { "path": "aws-logo.svg", "width": 1, "height": 16 },
  { "path": "kubernetes-logo.svg", "width": 16, "height": 16 },
  { "path": "docker-logo.svg", "width": 18, "height": 16 },
  { "path": "vercel-logo.svg", "width": 18, "height": 16 },
]

export default function Skills() {

  return (
    <div id='skills' className="flex justify-center items-center">
      <div className="block w-full p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 dark:">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Skills
        </h5>
        < div className="md:mx-10 grid grid-cols-2 gap-4 lg:grid-cols-3" >
          {skillsLogo.map(logo => {
            return (
              <div key={logo.path} className="flex justify-center p-2 border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 dark:">
                <img
                  key={logo.path}
                  src={`/profile/skills/${logo.path}`}
                  alt="Logo"
                  // loading="lazy"
                  className={`w-${logo.width} h-${logo.height}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}