import { Code2, Copy, Plus } from "lucide-react";

function PromptArchitectPanel() {
  return (
    <div className="bg-[#111] h-[460px] max-w-[896px] relative rounded-[16px] shrink-0 w-[896px]">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="bg-[rgba(0,0,0,0.2)] relative shrink-0 w-full">
          <div
            aria-hidden
            className="absolute border-[#1f1f1f] border-b border-solid inset-0 pointer-events-none"
          />
          <div className="content-stretch flex items-center justify-between pb-[17px] pl-[16px] pr-[15.99px] pt-[16px] relative size-full">
            <div className="flex gap-[8px] items-center">
              <div className="h-[20px] relative shrink-0 w-[18px]">
                <Code2 className="h-5 w-5 text-[#5c7cff]" />
              </div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[14px] tracking-[0.7px] uppercase leading-[20px] whitespace-nowrap">
                LIVE PROMPT ARCHITECT
              </p>
            </div>
            <div className="relative rounded-[4px]">
              <div
                aria-hidden
                className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
              />
              <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative">
                <Plus className="h-3.5 w-3.5 text-[#e2e2e2]" />
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#e2e2e2] text-[10px] leading-[15px] whitespace-nowrap">
                  ADD MOCK MESSAGE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body: two-column grid */}
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_396px] overflow-clip relative rounded-[inherit] size-full">
            {/* Left: empty message builder area */}
            <div className="bg-[rgba(0,0,0,0.1)] col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
              <div
                aria-hidden
                className="absolute border-[#1f1f1f] border-r border-solid inset-0 pointer-events-none"
              />
            </div>

            {/* Right: JSON payload preview */}
            <div className="bg-[rgba(0,0,0,0.4)] col-2 justify-self-stretch relative row-1 self-stretch shrink-0">
              <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
                {/* Label */}
                <div className="content-stretch flex flex-col items-center pb-[12px] relative shrink-0 w-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1px] uppercase leading-[15px] whitespace-nowrap">
                    PROVIDER PAYLOAD PREVIEW
                  </p>
                </div>

                {/* Code block */}
                <div className="bg-[rgba(0,0,0,0.6)] flex-[1_0_0] min-h-px relative rounded-[8px] w-full overflow-auto">
                  <div
                    aria-hidden
                    className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
                    <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-[rgba(79,219,200,0.7)] leading-[16.5px] whitespace-nowrap">
                      {`{}`}
                    </p>
                  </div>
                </div>

                {/* Copy button */}
                <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full">
                  <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[7.99px] items-center justify-center px-px py-[11px] relative rounded-[4px] shrink-0 w-full">
                    <div
                      aria-hidden
                      className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
                    />
                    <Copy className="h-4.5 w-4.5 text-white" />
                    <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] text-white leading-[16.5px] whitespace-nowrap">
                      COPY JSON PAYLOAD
                    </p>
                  </div>
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

export default function PromptBuilderSection() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative w-full border-t border-white/5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[124px] items-start pb-[96px] pt-[115px] px-[40px] relative size-full">
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="content-stretch flex flex-col gap-[48px] items-center px-[24px] relative size-full">
              {/* Header text */}
              <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-[768px]">
                {/* Badge */}
                <div className="bg-[rgba(92,124,255,0.05)] content-stretch flex items-center justify-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0">
                  <div
                    aria-hidden
                    className="absolute border border-[rgba(92,124,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]"
                  />
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#5c7cff] text-[12px] tracking-[0.6px] uppercase leading-[16px] whitespace-nowrap">
                    CONSTRUCTION
                  </p>
                </div>

                {/* Heading */}
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-center text-white tracking-[-1.2px] leading-[48px] whitespace-nowrap mb-0">
                  {`Prompt Builder : `}
                  <span className="text-[#5c7cff]">Composable</span>
                  <br />
                  <span className="text-[#5c7cff]">Chains</span>
                </h2>

                {/* Description */}
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[18px] text-center leading-[29.25px] whitespace-nowrap">
                  Construct complex multi-modal prompts by chaining messages,
                  system instructions, and
                  <br />
                  dynamic context variables. Use the interactive builder below
                  to add mock messages and
                  <br />
                  see the generated JSON structure used by the LLM providers.
                </p>
              </div>

              <PromptArchitectPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
