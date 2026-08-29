const infoList = [
  { label: "出身", value: "愛媛県 四国中央市" },
  { label: "大学", value: "静岡県 浜松市" },
  { label: "趣味", value: "ドライブ / 旅行 / バスケ" },
];

export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-24">
      <div className="glass relative overflow-hidden rounded-3xl p-8 shadow-glow sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-caramel/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="flex justify-center md:justify-start">
            <div className="relative aspect-square w-40 shrink-0 sm:w-48 lg:w-56">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#c9974f,#7a4328,#8a7256,#c9974f)] opacity-60 blur-[2px]" />
              <div className="absolute inset-[3px] rounded-full bg-ink" />
              <img
                src="/profile/profile-ozaki.jpg"
                alt="Photo by Sorato Ozaki"
                className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-terracotta/80">
              Portfolio
            </p>
            <h1 className="font-display text-4xl font-semibold text-espresso sm:text-5xl">
              <span className="gradient-text">Sorato Ozaki</span>
            </h1>

            <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {infoList.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-espresso/10 bg-black/[0.03] px-5 py-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-terracotta/80">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-espresso">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-2xl border border-espresso/10 bg-black/[0.03] px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-terracotta/80">
                休日の過ごし方
              </p>
              <p className="mt-1 text-cocoa">
                YouTube / ゲーム(Switch) / ドライブ / バスケ
              </p>
              <p className="mt-2 text-sm text-cocoa/80">
                ドライブは下道で道の駅を巡りながらのんびりドライブするのが好きです。
              </p>
              <p className="text-sm text-cocoa/80">
                2023年は下関、能登半島、静岡など車で旅行に行きました。
              </p>
              <p className="text-sm text-cocoa/80">
                2024年はハウステンボスに行きたいと思っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
