export default function InstallationSection() {
  return (
    <section className="border-t border-white/5 bg-black py-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="max-w-[672px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Get Started in Seconds</h2>
            <p className="text-lg text-[#c4c5d7]/80">Add CtxIQ to your project using your favorite package manager.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1b1b1b] to-[#0e0e0e] border border-white/5 rounded-2xl p-6 flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-4">
              <span className="text-[#9281f7] text-xl font-mono">$</span>
              <code className="text-lg text-white/90 font-mono">npm install ctxiq</code>
            </div>
            <button className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <svg className="w-3 h-4" fill="white" viewBox="0 0 12.75 15">
                <path d="M4.5 12C4.0875 12 3.73437 11.8531 3.44062 11.5594C3.14687 11.2656 3 10.9125 3 10.5V1.5C3 1.0875 3.14687 0.734375 3.44062 0.440625C3.73437 0.146875 4.0875 0 4.5 0H11.25C11.6625 0 12.0156 0.146875 12.3094 0.440625C12.6031 0.734375 12.75 1.0875 12.75 1.5V10.5C12.75 10.9125 12.6031 11.2656 12.3094 11.5594C12.0156 11.8531 11.6625 12 11.25 12H4.5V12M4.5 10.5H11.25V10.5V10.5V1.5V1.5V1.5H4.5V1.5V1.5V10.5V10.5V10.5V10.5M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3H1.5V13.5V13.5V13.5H9.75V15H1.5V15M4.5 10.5V10.5V10.5V1.5V1.5V1.5V1.5V1.5V1.5V10.5V10.5V10.5V10.5V10.5" />
              </svg>
              <span className="text-xs font-bold text-white">COPY</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
