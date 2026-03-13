import { motion } from 'motion/react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TABS: TabType[] = ['Standard', 'Instant', 'Ads', 'Idea Corner'];

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21ff94]/20 text-[#21ff94] shadow-[0_0_15px_rgba(33,255,148,0.3)]">
            <span className="font-bold text-lg tracking-tighter">RM</span>
          </div>
          <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            SKYOPS AUTOGRAFIS
          </h1>
        </div>

        <nav className="flex w-full overflow-x-auto pb-2 md:w-auto md:pb-0 hide-scrollbar">
          <div className="flex w-full min-w-max gap-2 rounded-2xl bg-[#0f172a] p-1 border border-white/5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab ? 'text-[#020617]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-xl bg-[#21ff94] shadow-[0_0_10px_rgba(33,255,148,0.4)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
