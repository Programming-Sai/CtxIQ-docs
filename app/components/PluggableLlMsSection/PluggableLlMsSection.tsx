import { ChevronDown, Plug, Settings2 } from "lucide-react";

const PROVIDER_CARDS = [
  { label: "OpenAI", sublabel: "Full GPT-4o Support" },
  { label: "Anthropic", sublabel: "Claude 3.5 Sonnet" },
];

type SelectFieldProps = {
  label: string;
  value: string;
};

function SelectField({ label, value }: SelectFieldProps) {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative self-start shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase leading-[15px] whitespace-nowrap">
        {label}
      </p>
      <div className="bg-black relative rounded-[4px] shrink-0 w-full">
        <div
          aria-hidden
          className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
        />
        <div className="content-stretch flex items-center p-[9px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[212px] pr-[9px] py-[8px] relative rounded-[inherit] flex-shrink-0">
            <div className="relative shrink-0 size-[18px]">
              <ChevronDown className="h-[18px] w-[18px] text-[#6b7280]" />
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-white leading-[16px] flex-[1_0_0] min-w-px">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function ModelConfigPanel() {
  return (
    <div className="bg-[#111] col-2 h-[400px] justify-self-stretch relative rounded-[16px] row-1 self-center shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="bg-[rgba(0,0,0,0.2)] relative shrink-0 w-full">
          <div
            aria-hidden
            className="absolute border-[#1f1f1f] border-b border-solid inset-0 pointer-events-none"
          />
          <div className="content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
            <div className="flex gap-[8px] items-center w-full">
              <div className="h-[23px] relative shrink-0 w-[24px]">
                <Settings2 className="h-[23px] w-[24px] text-white" />
              </div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[14px] tracking-[0.7px] uppercase leading-[20px] whitespace-nowrap">
                MODEL CONFIGURATION CONSOLE
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
            {/* Provider / Storage dropdowns */}
            <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_55px] relative shrink-0 w-full">
              <SelectField label="PROVIDER" value="OpenAI" />
              <SelectField label="STORAGE" value="LocalStorage" />
            </div>

            {/* Config JSON preview */}
            <div className="bg-[rgba(0,0,0,0.2)] flex-[1_0_0] min-h-px relative rounded-[4px] w-full">
              <div
                aria-hidden
                className="absolute border border-[#353535] border-solid inset-0 pointer-events-none rounded-[4px]"
              />
              <div className="content-stretch flex flex-col items-start pb-[17.75px] pt-[15.69px] px-[17px] relative size-full">
                <pre className="font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.5)] leading-[17.88px] w-full whitespace-pre-wrap m-0">
                  {`{\n  "engine": "gpt-4-turbo",\n  "temperature": 0.7,\n  "persistence": "browser-local",\n  "encryption": "aes-256-gcm"\n}`}
                </pre>
              </div>
            </div>

            {/* Test connection button */}
            <div className="bg-white content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[4px] shrink-0 w-full">
              <div className="h-[20px] relative shrink-0 w-[16px]">
                <Plug className="h-5 w-4 text-black" />
              </div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-black text-[12px] leading-[16px] whitespace-nowrap">
                TEST CONNECTION
              </p>
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

export default function PluggableLlMsSection() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative w-full border-t border-white/5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[124px] items-start pb-[96px] pt-[115px] px-[40px] relative size-full">
          <div className="max-w-[1200px] relative shrink-0 w-full mx-auto">
            <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_400px] px-[24px] relative size-full">
              {/* Left: text content */}
              <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0">
                {/* Badge */}
                <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0">
                  <div
                    aria-hidden
                    className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]"
                  />
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[12px] tracking-[0.6px] uppercase leading-[16px] whitespace-nowrap">
                    COMPATIBILITY
                  </p>
                </div>

                {/* Heading */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-white tracking-[-1.2px] leading-[48px] mb-0">
                    Pluggable LLMs :
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[48px] text-[rgba(255,255,255,0.6)] tracking-[-1.2px] leading-[48px]">
                    Provider Agnostic
                  </p>
                </div>

                {/* Description */}
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[18px] leading-[29.25px] w-full">
                  One integration, every model. Switch between OpenAI,
                  Anthropic, or local Llama instances without changing your
                  business logic. Configure your engine and storage backend
                  through our standardized configuration interface.
                </p>

                {/* Provider cards */}
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_69px] relative shrink-0 w-full">
                  {PROVIDER_CARDS.map(({ label, sublabel }) => (
                    <div
                      key={label}
                      className="bg-[rgba(255,255,255,0.05)] relative rounded-[12px] self-start shrink-0 w-full"
                    >
                      <div
                        aria-hidden
                        className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]"
                      />
                      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
                        <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[12px] leading-[16px] w-full">
                          {label}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8e90a0] text-[10px] leading-[15px] w-full">
                          {sublabel}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ModelConfigPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
