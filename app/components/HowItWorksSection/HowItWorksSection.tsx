import svgPaths from "./svg-dxao8h0vke";

function AppPreview() {
  return (
    <div className="bg-[#111] h-[500px] relative rounded-[16px] shrink-0 w-full">
      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_498px] overflow-clip p-px relative rounded-[inherit] size-full">
        {/* Chat Simulation */}
        <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
          <div
            aria-hidden
            className="absolute border-[#1f1f1f] border-r border-solid inset-0 pointer-events-none"
          />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px relative size-full">
            {/* Header */}
            <div className="bg-[rgba(0,0,0,0.2)] relative shrink-0 w-full">
              <div
                aria-hidden
                className="absolute border-[#1f1f1f] border-b border-solid inset-0 pointer-events-none"
              />
              <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative size-full">
                <div className="opacity-40">
                  <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[#e2e2e2] text-[12px] tracking-[1.2px] uppercase leading-[16px]">
                    CHAT INTERFACE
                  </p>
                </div>
                <div className="bg-[rgba(146,129,247,0.1)] rounded-[9999px] px-[8px] py-[2px]">
                  <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#9281f7] text-[10px] leading-[15px]">
                    Simulated
                  </p>
                </div>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-[1_0_0] min-h-px relative w-full overflow-auto">
              <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
                <div className="content-stretch flex h-[46px] items-start relative shrink-0 w-full">
                  <div className="bg-[#0a0a0a] max-w-[420.79998779296875px] relative rounded-[8px] self-stretch shrink-0">
                    <div
                      aria-hidden
                      className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                    <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[17px] py-[13px] relative size-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#e2e2e2] text-[14px] leading-[20px] whitespace-nowrap">
                        Explain the sliding window strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="relative shrink-0 w-full">
              <div
                aria-hidden
                className="absolute border-[#1f1f1f] border-solid border-t inset-0 pointer-events-none"
              />
              <div className="content-stretch flex flex-col items-start pb-[24px] pt-[25px] px-[24px] relative size-full">
                <div className="relative shrink-0 w-full">
                  <div className="bg-black relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex items-start justify-center pb-[15px] pt-[14px] px-[17px] relative size-full overflow-clip rounded-[inherit]">
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b7280] text-[14px] leading-[normal] flex-[1_0_0] min-w-px">
                        Type a message to see the stack update...
                      </p>
                    </div>
                    <div
                      aria-hidden
                      className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                  </div>
                  <div className="absolute bottom-[32.61%] flex flex-col items-center justify-center right-[12px] top-[32.61%]">
                    <div className="h-[16px] relative shrink-0 w-[19px]">
                      <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 19 16"
                      >
                        <path
                          d={svgPaths.pb36e280}
                          fill="var(--fill-0, #9281F7)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Context Stack Visualization */}
        <div className="bg-[#0d0d0d] col-2 justify-self-stretch relative row-1 self-stretch shrink-0">
          <div className="content-stretch flex flex-col items-start relative size-full">
            {/* Header */}
            <div className="bg-[rgba(0,0,0,0.2)] relative shrink-0 w-full">
              <div
                aria-hidden
                className="absolute border-[#1f1f1f] border-b border-solid inset-0 pointer-events-none"
              />
              <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative size-full">
                <div className="opacity-40">
                  <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[#e2e2e2] text-[12px] tracking-[1.2px] uppercase leading-[16px]">
                    VISUAL CONTEXT STACK
                  </p>
                </div>
                <div className="bg-[rgba(79,219,200,0.1)] opacity-0 px-[9px] py-[5px] relative rounded-[4px]">
                  <div
                    aria-hidden
                    className="absolute border border-[rgba(79,219,200,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]"
                  />
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#4fdbc8] text-[10px] leading-[15px]">
                    SUMMARIZE
                  </p>
                </div>
              </div>
            </div>

            {/* Stack area */}
            <div className="flex-[1_0_0] min-h-px relative w-full" />

            {/* Token budget footer */}
            <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-full">
              <div
                aria-hidden
                className="absolute border-[#1f1f1f] border-solid border-t inset-0 pointer-events-none"
              />
              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[25px] px-[24px] relative size-full">
                <div className="relative shrink-0 w-full flex items-center justify-between">
                  <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[#8e90a0] text-[10px] tracking-[1px] uppercase leading-[15px]">
                    ACTIVE BUDGET
                  </p>
                  <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-white text-[10px] leading-[15px]">
                    34 / 200 Tokens
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative rounded-[9999px] shrink-0 w-full overflow-clip">
                  <div className="absolute bg-[#9281f7] inset-[0_83%_0_0]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative w-full border-t border-white/5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[124px] items-start pb-[96px] pt-[115px] px-[40px] relative size-full">
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="content-stretch flex flex-col gap-[64px] items-start px-[24px] relative size-full">
              {/* Heading */}
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-center text-white tracking-[-1.2px] leading-[48px] whitespace-nowrap">
                  {`How It Works : `}
                  <span className="text-[#9281f7]">See Your Context Stack</span>
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[16px] text-center leading-[24px] max-w-[672px]">
                  Real-time visualization of how CtxIQ structures messages and
                  manages memory limits before sending to the LLM.
                </p>
              </div>

              <AppPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
