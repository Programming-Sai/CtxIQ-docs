import Link from "next/link";

export default function HeaderTopNavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#9281f7] rounded-sm" />
            <span className="text-xl font-bold tracking-tight">CtxIQ</span>
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/docs" className="text-sm font-medium text-[#8e90a0] hover:text-white transition-colors">Docs</Link>
            <a href="#" className="text-sm font-medium text-[#8e90a0] hover:text-white transition-colors">APIs</a>
            <a href="#" className="text-sm font-medium text-[#8e90a0] hover:text-white transition-colors">Examples</a>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-[448px]">
            <input
              type="text"
              placeholder="Search Documentation..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-12 py-2 text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9281f7]/50"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px]" fill="#8E90A0" viewBox="0 0 18 18">
              <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18V18M6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11V11" />
            </svg>
          </div>
          <a href="#" className="text-[#8e90a0] hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0V0" />
            </svg>
          </a>
          <button className="bg-white text-black font-semibold px-4 py-1.5 rounded text-sm hover:bg-white/90 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
