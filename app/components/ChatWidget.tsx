export default function ChatWidget() {
  return (
    <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg shadow-[0px_40px_100px_-20px_rgba(0,0,0,0.9)] h-[600px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-black/40 border-b border-[#1f1f1f] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0px_0px_8px_0px_rgba(16,185,129,0.4)]" />
          <span className="text-[10px] font-bold text-white/90 tracking-widest">LIVE SIMULATION</span>
        </div>
        <div className="flex items-center gap-6 text-[10px]">
          <div>
            <div className="text-[9px] text-white/30 tracking-widest mb-0.5">INSTANCE</div>
            <div className="text-white/60 font-mono">US-EAST-1</div>
          </div>
          <div>
            <div className="text-[9px] text-white/30 tracking-widest mb-0.5">STATUS</div>
            <div className="text-[#34d399]/80 font-mono">READY</div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-3.5 max-w-[85%]">
          <p className="text-sm text-[#8e90a0] leading-relaxed">
            Hello! I am the CtxIQ test assistant. How can I help you manage your session memory?
          </p>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-black/60 border-t border-[#1f1f1f] p-6 flex flex-col gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Type a command..."
            className="w-full bg-black border border-[#1f1f1f] rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#9281f7]/50"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
            <svg className="w-4 h-4 fill-white/40" viewBox="0 0 15 15">
              <path d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15V15" />
            </svg>
          </button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 border border-[#1f1f1f] rounded py-2.5 text-[10px] font-semibold text-white/40 tracking-wider hover:bg-white/5 transition-colors">
            MOCK REPLY
          </button>
          <button className="flex-1 border border-[#1f1f1f] rounded py-2.5 text-[10px] font-semibold text-white/40 tracking-wider hover:bg-white/5 transition-colors">
            BUILD PROMPT
          </button>
        </div>

        <div className="border-t border-[#1f1f1f] pt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-[9px] text-white/20 tracking-widest mb-1">TOKEN COUNT</div>
            <div className="font-mono text-xs">
              <span className="text-white/80">26</span>
              <span className="text-white/20"> / 8192</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-white/20 tracking-widest mb-1">SESSION ENTROPY</div>
            <div className="font-mono text-xs text-white/80">0.3 t/char</div>
          </div>
        </div>
      </div>
    </div>
  );
}
