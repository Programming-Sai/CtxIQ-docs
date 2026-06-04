import { Check, Gauge } from "lucide-react";

const BULLET_ITEMS = [
  "Multi-model tiktoken support",
  "Intelligent message pruning (Last-in, First-out)",
  "Critical system prompt preservation",
];

function TokenMonitorPanel() {
  return (
    <div className="bg-[#111] col-1 h-[400px] justify-self-stretch relative rounded-[16px] row-1 self-center shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="bg-[rgba(0,0,0,0.2)] relative shrink-0 w-full">
          <div
            aria-hidden
            className="absolute border-[#1f1f1f] border-b border-solid inset-0 pointer-events-none"
          />
          <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
            <div className="flex gap-[8px] items-center">
              <div className="h-[16px] relative shrink-0 w-[22px]">
                <Gauge className="h-4 w-5 text-[#4fdbc8]" />
              </div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[14px] tracking-[0.7px] uppercase leading-[20px] whitespace-nowrap">
                TOKEN MONITOR
              </p>
            </div>
            <div className="relative rounded-[4px]">
              <div
                aria-hidden
                className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
              />
              <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#4fdbc8] text-[10px] leading-[15px] whitespace-nowrap">
                  TRIM HISTORY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
            {/* Input buffer label */}
            <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase leading-[15px] w-full">
                INPUT BUFFER
              </p>
            </div>

            {/* Textarea */}
            <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] min-h-px relative rounded-[4px] w-full overflow-auto">
              <div
                aria-hidden
                className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
              />
              <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[#6b7280] text-[14px] leading-[20px] w-full whitespace-pre-wrap">
                  {
                    "Paste text here to simulate token budgeting and clipping..."
                  }
                </p>
              </div>
            </div>

            {/* Token capacity bar */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="flex items-start justify-between w-full h-[17px]">
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.4)] tracking-[1.1px] uppercase leading-[16.5px] whitespace-nowrap">
                  CONTEXT CAPACITY
                </p>
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-white tracking-[1.1px] uppercase leading-[16.5px] whitespace-nowrap">
                  0 / 2048 TOKENS
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] h-[12px] relative rounded-[9999px] shrink-0 w-full" />
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

export default function TokenBudgetingSection() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative w-full border-t border-white/5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[124px] items-start pb-[96px] pt-[115px] px-[40px] relative size-full">
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_407px] px-[24px] relative size-full">
              <TokenMonitorPanel />

              {/* Right: text content */}
              <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0">
                {/* Badge */}
                <div className="bg-[rgba(79,219,200,0.05)] content-stretch flex items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0">
                  <div
                    aria-hidden
                    className="absolute border border-[rgba(79,219,200,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]"
                  />
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#4fdbc8] text-[12px] tracking-[0.6px] uppercase leading-[16px] whitespace-nowrap">
                    OPTIMIZATION
                  </p>
                </div>

                {/* Heading */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-white tracking-[-1.2px] leading-[48px] mb-0">
                    Token Budgeting :
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-[#4fdbc8] tracking-[-1.2px] leading-[48px]">
                    Precise Limits
                  </p>
                </div>

                {/* Description */}
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[18px] leading-[29.25px] w-full">
                  {`Never hit "Max Context Length" errors again. CtxIQ provides real-time token counting and automated trimming strategies. Paste text into the simulator to see how our budgeting engine reacts to overflow.`}
                </p>

                {/* Bullet list */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {BULLET_ITEMS.map((label) => (
                    <div
                      key={label}
                      className="flex gap-[12px] items-center w-full"
                    >
                      <div className="relative shrink-0 size-[20px]">
                        <Check className="h-5 w-5 text-[#4fdbc8]" />
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[14px] leading-[20px] whitespace-nowrap">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
