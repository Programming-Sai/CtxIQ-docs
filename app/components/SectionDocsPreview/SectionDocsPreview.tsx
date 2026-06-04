import { ChevronRight, Copy } from "lucide-react";

const NAV_ITEMS = [
  { label: "Introduction", active: true },
  { label: "Quick Start", active: false },
  { label: "Session Management", active: false },
];

function CodePanel() {
  return (
    <div className="bg-[#111] col-[6/span_7] justify-self-stretch relative rounded-[16px] row-1 self-center shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        {/* Titlebar */}
        <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-full">
          <div
            aria-hidden
            className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none"
          />
          <div className="content-stretch flex items-center justify-between pb-[17px] pl-[24px] pr-[24.01px] pt-[16px] relative size-full">
            {/* Traffic lights */}
            <div className="flex gap-[6px] items-start">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0 size-[12px]"
                />
              ))}
            </div>
            {/* Filename */}
            <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[#8e90a0] text-[12px] leading-[16px] whitespace-nowrap">
              getting-started.ts
            </p>
            {/* Copy button */}
            <div className="flex gap-[4px] items-center">
              <Copy className="h-4 w-4 text-[#8e90a0]" />
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[12px] leading-[16px] whitespace-nowrap">
                Copy
              </p>
            </div>
          </div>
        </div>

        {/* Code */}
        <div className="bg-[rgba(0,0,0,0.6)] relative shrink-0 w-full overflow-auto">
          <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
            <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[182px] leading-[0] relative shrink-0 text-[14px] w-full whitespace-nowrap">
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#9281f7] top-[33.75px]">
                <p className="mb-0 whitespace-pre">
                  <span className="leading-[22.75px]">const</span>
                  <span className="leading-[22.75px] text-white">{` ai = `}</span>
                  <span className="leading-[22.75px]">new</span>
                  <span className="leading-[22.75px] text-white">{` Orchestrator({`}</span>
                </p>
                <p className="mb-0 whitespace-pre">
                  <span className="leading-[22.75px] text-white">{`  `}</span>
                  <span className="leading-[22.75px] text-[#4fdbc8]">
                    maxTokens
                  </span>
                  <span className="leading-[22.75px] text-white">{`: 4096,`}</span>
                </p>
                <p className="whitespace-pre">
                  <span className="leading-[22.75px] text-white">{`  `}</span>
                  <span className="leading-[22.75px] text-[#4fdbc8]">
                    strategy
                  </span>
                  <span className="leading-[22.75px] text-white">{`: `}</span>
                  <span className="leading-[22.75px] text-[#5c7cff]">{`'sliding-window'`}</span>
                </p>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-white top-[79.25px]">
                <p className="leading-[22.75px] mb-0 whitespace-pre">{`});`}</p>
                <p className="leading-[22.75px] mb-0 whitespace-pre">â€‹</p>
                <p className="leading-[22.75px] whitespace-pre">â€‹</p>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#9281f7] top-[147.5px]">
                <p className="mb-0 whitespace-pre">
                  <span className="leading-[22.75px]">const</span>
                  <span className="leading-[22.75px] text-white">{` prompt = `}</span>
                  <span className="leading-[22.75px]">await</span>
                  <span className="leading-[22.75px] text-white">{` ai.session(`}</span>
                  <span className="leading-[22.75px] text-[#5c7cff]">{`'user-1'`}</span>
                  <span className="leading-[22.75px] text-white">)</span>
                </p>
                <p className="mb-0 whitespace-pre">
                  <span className="leading-[22.75px] text-white">{`  .addMessage(`}</span>
                  <span className="leading-[22.75px] text-[#5c7cff]">{`'user'`}</span>
                  <span className="leading-[22.75px] text-white">{`, `}</span>
                  <span className="leading-[22.75px] text-[#5c7cff]">{`'Hello!'`}</span>
                  <span className="leading-[22.75px] text-white">)</span>
                </p>
                <p className="leading-[22.75px] text-white whitespace-pre">{`  .build();`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

export default function SectionDocsPreview() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative w-full border-t border-white/5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[124px] items-start pb-[96px] pt-[115px] px-[40px] relative size-full">
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_312px] relative shrink-0 w-full">
              {/* Left: heading + nav */}
              <div className="col-[1/span_5] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-center shrink-0">
                {/* Heading */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-white tracking-[-1.2px] leading-[48px] mb-0">
                    Simple API.
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-[#9281f7] tracking-[-1.2px] leading-[48px]">
                    Powerful results.
                  </p>
                </div>

                {/* Nav items */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  {NAV_ITEMS.map(({ label, active }) =>
                    active ? (
                      <div
                        key={label}
                        className="bg-[rgba(255,255,255,0.05)] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full"
                      >
                        <div
                          aria-hidden
                          className="absolute border-[#9281f7] border-l-2 border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]"
                        />
                        <div className="content-stretch flex items-center justify-between pl-[22px] pr-[20px] py-[16px] relative size-full">
                          <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[16px] leading-[24px] whitespace-nowrap">
                            {label}
                          </p>
                          <ChevronRight className="h-3 w-3 text-white" />
                        </div>
                      </div>
                    ) : (
                      <div
                        key={label}
                        className="bg-[rgba(255,255,255,0.01)] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full"
                      >
                        <div className="content-stretch flex items-center justify-between pl-[22px] pr-[20px] py-[16px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[16px] leading-[24px] whitespace-nowrap">
                            {label}
                          </p>
                          <ChevronRight className="h-3 w-3 text-[#6b7280]" />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <CodePanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
