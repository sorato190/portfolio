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
  "Zabbix認定スペシャリスト",
  "AWSソリューションアーキテクト",
];

export default function Qualification() {
  return (
    <section id="qualification" className="scroll-mt-24">
      <div className="glass rounded-3xl p-8 sm:p-10">
        <h5 className="section-title">
          <span className="gradient-text">Qualification</span>
        </h5>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {qualification.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-espresso/10 bg-black/[0.03] px-4 py-3 transition-colors hover:border-caramel/40 hover:bg-black/[0.02]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-terracotta text-xs text-ink">
                ✓
              </span>
              <span className="text-sm text-cocoa sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
