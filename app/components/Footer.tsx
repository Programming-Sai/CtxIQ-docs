export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#9281f7] rounded-sm" />
              <span className="text-2xl font-bold">CtxIQ</span>
            </div>
            <p className="text-sm text-[#8e90a0] max-w-[320px]">
              The orchestration layer for stateful LLM applications. Built for production speed and developer joy.
            </p>
            <div className="border border-white/10 rounded px-2.5 py-1.5 inline-block self-start">
              <span className="text-[10px] font-bold text-[#8e90a0] tracking-wider">MIT LICENSED</span>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold tracking-wider text-white">PRODUCT</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#8e90a0]">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Playground</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold tracking-wider text-white">COMPANY</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#8e90a0]">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold tracking-wider text-white">NEWSLETTER</h4>
            <p className="text-xs text-[#8e90a0]">Get the latest updates in AI orchestration.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9281f7]/50"
              />
              <button className="bg-white text-black font-bold px-4 py-2.5 rounded-lg text-xs hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-xs text-[#8e90a0] text-center">
            © 2024 CtxIQ Orchestration Labs. Built with precision and atmosphere.
          </p>
        </div>
      </div>
    </footer>
  );
}
