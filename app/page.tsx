export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Security Tool for Discord Admins
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Audit Discord Bot Permissions<br />
          <span className="text-[#58a6ff]">Before They Become a Risk</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Scan every bot in your Discord servers, flag overprivileged permissions, and get clear security recommendations — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Auditing — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No Discord data stored.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Full Bot Scan", desc: "Scans all bots across every server you manage" },
          { icon: "🚨", title: "Risk Flagging", desc: "Highlights dangerous permissions like Administrator" },
          { icon: "✅", title: "Fix Guidance", desc: "Step-by-step recommendations to reduce exposure" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold mb-1">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited server scans",
              "Permission risk scoring",
              "Detailed audit reports",
              "Email alerts for new bots",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What permissions does this tool need?",
              a: "We use Discord OAuth with read-only scopes. We can see your servers and their bots, but we never post messages or modify anything."
            },
            {
              q: "Do you store my Discord data?",
              a: "No. Scans run in real time and results are shown only to you. We do not persist any guild or bot data after your session ends."
            },
            {
              q: "Which permissions are considered high risk?",
              a: "Administrator, Manage Server, Manage Roles, Manage Webhooks, and Manage Channels are flagged as high risk. We explain exactly why each one matters."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Bot Permission Auditor. Not affiliated with Discord Inc.
      </footer>
    </main>
  );
}
