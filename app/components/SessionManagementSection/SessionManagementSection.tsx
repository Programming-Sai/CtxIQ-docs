import { Check, Database } from "lucide-react";

const BULLET_ITEMS = [
  "Automatic Redis and LocalStorage adapters",
  "Customizable Time-to-Live (TTL) policies",
  "Metadata injection for rich session tracing",
];

function SessionConsolePanel() {
  return (
    <div className="bg-[#111] col-2 h-[400px] justify-self-stretch relative rounded-[16px] row-1 self-center shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="bg-[rgba(0,0,0,0.2)] relative shrink-0 w-full">
          <div
            aria-hidden
            className="absolute border-[#1f1f1f] border-b border-solid inset-0 pointer-events-none"
          />
          <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
            <div className="flex gap-[8px] items-center">
              <div className="relative shrink-0 size-[18px]">
                <Database className="h-[18px] w-[18px] text-[#9281f7]" />
              </div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[14px] tracking-[0.7px] uppercase leading-[20px] whitespace-nowrap">
                SESSION CONSOLE
              </p>
            </div>
            <div className="relative rounded-[4px]">
              <div
                aria-hidden
                className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
              />
              <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#e2e2e2] text-[10px] leading-[15px] whitespace-nowrap">
                  + NEW SESSION
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-[1_0_0] min-h-px relative w-full flex items-start">
          {/* Session list sidebar */}
          <div className="bg-[rgba(0,0,0,0.2)] h-full relative shrink-0 w-[180.66px]">
            <div
              aria-hidden
              className="absolute border-[#1f1f1f] border-r border-solid inset-0 pointer-events-none"
            />
            <div className="content-stretch flex flex-col gap-[4px] items-start pl-[8px] pr-[9px] py-[8px] relative size-full">
              {/* Active session */}
              <div className="bg-[rgba(146,129,247,0.1)] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#9281f7] text-[11px] leading-[16.5px] whitespace-nowrap">
                    General
                  </p>
                  <div className="bg-[#9281f7] relative rounded-[9999px] shrink-0 size-[6px]" />
                </div>
              </div>
              {/* Inactive sessions */}
              {["Code Debug", "Refactoring"].map((name) => (
                <div
                  key={name}
                  className="relative rounded-[4px] shrink-0 w-full"
                >
                  <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[#8e90a0] text-[11px] leading-[16.5px] w-full">
                      {name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session metadata panel */}
          <div className="h-full relative shrink-0 w-[361.34px]">
            <div className="content-stretch flex flex-col gap-[15px] items-start pb-[69px] pt-[15px] px-[16px] relative size-full">
              {/* Session Metadata */}
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[9px] text-[rgba(255,255,255,0.4)] tracking-[0.9px] uppercase leading-[13.5px] w-full">
                  SESSION METADATA
                </p>
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.8)] leading-[16.5px] w-full">
                  id: sess_921az02
                </p>
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.8)] leading-[16.5px] w-full">
                  ttl: 3600s
                </p>
              </div>

              {/* History Storage */}
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[9px] text-[rgba(255,255,255,0.4)] tracking-[0.9px] uppercase leading-[13.5px] w-full">
                  HISTORY STORAGE
                </p>
                <div className="flex gap-[8px] items-center w-full">
                  <div className="bg-[#22c55e] relative rounded-[9999px] shrink-0 size-[8px]" />
                  <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.8)] leading-[16.5px] whitespace-nowrap">
                    Redis Connected
                  </p>
                </div>
              </div>

              {/* Active Window */}
              <div className="content-stretch flex flex-col gap-[8px] items-start pt-[17px] relative shrink-0 w-full">
                <div
                  aria-hidden
                  className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none"
                />
                <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[9px] text-[rgba(255,255,255,0.4)] tracking-[0.9px] uppercase leading-[13.5px] w-full">
                  ACTIVE WINDOW
                </p>
                <div className="bg-[rgba(0,0,0,0.4)] h-[96px] relative rounded-[4px] shrink-0 w-full overflow-auto">
                  <div
                    aria-hidden
                    className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
                  />
                  <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
                    <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[10px] text-[rgba(255,255,255,0.3)] leading-[15px] w-full">
                      {`Recent: "Explain the architecture..."`}
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

export default function SessionManagementSection() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative w-full border-t border-white/5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[124px] items-start pb-[96px] pt-[115px] px-[40px] relative size-full">
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_407px] px-[24px] relative size-full">
              {/* Left: text content */}
              <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0">
                {/* Badge */}
                <div className="bg-[rgba(146,129,247,0.05)] content-stretch flex items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0">
                  <div
                    aria-hidden
                    className="absolute border border-[rgba(146,129,247,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]"
                  />
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#9281f7] text-[12px] tracking-[0.6px] uppercase leading-[16px] whitespace-nowrap">
                    INFRASTRUCTURE
                  </p>
                </div>

                {/* Heading */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-white tracking-[-1.2px] leading-[48px] mb-0">
                    Session Management :
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-[#9281f7] tracking-[-1.2px] leading-[48px]">
                    Stateful Persistence
                  </p>
                </div>

                {/* Description */}
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[18px] leading-[29.25px] w-full">
                  Manage long-running conversations with ease. CtxIQ handles
                  session TTLs, persistent storage across restarts, and instant
                  retrieval. Use the widget to switch between active context
                  threads and monitor metadata in real-time.
                </p>

                {/* Bullet list */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {BULLET_ITEMS.map((label) => (
                    <div
                      key={label}
                      className="flex gap-[12px] items-center w-full"
                    >
                      <div className="relative shrink-0 size-[20px]">
                        <Check className="h-5 w-5 text-[#9281f7]" />
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[14px] leading-[20px] whitespace-nowrap">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <SessionConsolePanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
