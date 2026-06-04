import Link from "next/link";
import ChatWidget from "./ChatWidget";
import FeatureCard from "./FeatureCard";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-10 mb-16">
      <div className="flex gap-16 items-center">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 self-start">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4fdbc8]" />
            <span className="text-xs font-medium text-[#4fdbc8] tracking-wide">
              TypeScript-First : Framework-Agnostic : Open-Source
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-7xl font-bold tracking-tight leading-[1]">
              <div className="mb-0">Context & Memory</div>
              <div className="mb-0">Orchestration for</div>
              <div>AI Assistants</div>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[672px]">
            <p className="text-xl text-[#8e90a0] leading-relaxed">
              Stop reinventing conversation management. CtxIQ gives you
              composable building blocks for session management, token
              budgeting, and prompt construction.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-[576px]">
            <FeatureCard
              icon="plus"
              color="purple"
              label="Multi-Session Management"
            />
            <FeatureCard icon="plugs" color="teal" label="Pluggable LLMs" />
            <FeatureCard icon="layers" color="blue" label="Context Stack" />
            <FeatureCard
              icon="calculator"
              color="white"
              label="Token Counter"
            />
          </div>

          {/* CTAs */}
          <div className="flex gap-4">
            <Link
              href="/docs"
              className="bg-gradient-to-r from-[#9281f7] to-[#5c7cff] text-white font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>Read the Docs</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9V9" />
              </svg>
            </Link>
            <button className="bg-white/5 border border-white/10 text-white font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.47833 0 0 4.4775 0 10C0 14.4183 2.865 18.1667 6.83917 19.4892C7.33833 19.5817 7.5 19.2717 7.5 19.0083V17.1467C4.71833 17.7517 4.13917 15.9667 4.13917 15.9667C3.68417 14.8108 3.02833 14.5033 3.02833 14.5033C2.12083 13.8825 3.0975 13.8958 3.0975 13.8958C4.10167 13.9658 4.63 14.9267 4.63 14.9267C5.52167 16.455 6.96917 16.0133 7.54 15.7575C7.62917 15.1117 7.88833 14.67 8.175 14.4208C5.95417 14.1667 3.61917 13.3092 3.61917 9.47833C3.61917 8.38583 4.01 7.49417 4.64917 6.79417C4.54583 6.54167 4.20333 5.52417 4.74667 4.1475C4.74667 4.1475 5.58667 3.87917 7.4975 5.1725C8.295 4.95083 9.15 4.84 10 4.83583C10.85 4.84 11.7058 4.95083 12.505 5.1725C14.4142 3.87917 15.2525 4.1475 15.2525 4.1475C15.7967 5.525 15.4542 6.5425 15.3508 6.79417C15.9925 7.49417 16.38 8.38667 16.38 9.47833C16.38 13.3192 14.0408 14.165 11.8142 14.4125C12.1725 14.7225 12.5 15.3308 12.5 16.2642V19.0083C12.5 19.2742 12.66 19.5867 13.1675 19.4883C17.1383 18.1642 20 14.4167 20 10C20 4.4775 15.5225 0 10 0V0" />
              </svg>
              <span>View on GitHub</span>
            </button>
          </div>
        </div>

        {/* Right Side - Chat Widget */}
        <div className="w-[435px] shrink-0">
          <ChatWidget />
        </div>
      </div>
    </section>
  );
}
