const skillsLogo = [
  { path: "python-logo.svg", name: "Python" },
  { path: "django-logo.svg", name: "Django" },
  { path: "typescript-logo.svg", name: "TypeScript" },
  { path: "react-logo.svg", name: "React" },
  { path: "nextjs-logo.svg", name: "Next.js" },
  { path: "github-logo.svg", name: "GitHub" },
  { path: "prisma-logo.svg", name: "Prisma" },
  { path: "mysql-logo.png", name: "MySQL" },
  { path: "zabbix-logo.png", name: "Zabbix" },
  { path: "aws-logo.svg", name: "AWS" },
  { path: "kubernetes-logo.svg", name: "Kubernetes" },
  { path: "docker-logo.svg", name: "Docker" },
  { path: "vercel-logo.svg", name: "Vercel" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="glass rounded-3xl p-8 sm:p-10">
        <h5 className="section-title">
          <span className="gradient-text">Skills</span>
        </h5>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skillsLogo.map((logo) => (
            <div
              key={logo.path}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-espresso/10 bg-black/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-caramel/40 hover:bg-black/[0.02] hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                <img
                  src={`/profile/skills/${logo.path}`}
                  alt={logo.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs text-cocoa sm:text-sm">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
