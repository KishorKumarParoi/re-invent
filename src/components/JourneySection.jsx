import React, { useState } from 'react'
import { AI_ENGINEERING_JOURNEY } from '../constants/journey'
import {
    GraduationCap,
    ExternalLink,
    Search,
    Layers,
    Sparkles,
    Check,
    Copy,
    ChevronRight,
    Terminal
} from 'lucide-react'

const JourneySection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedPhase, setSelectedPhase] = useState('all')
    const [copiedCode, setCopiedCode] = useState(null)

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(code)
        setTimeout(() => setCopiedCode(null), 2000)
    }

    const filteredPhases = AI_ENGINEERING_JOURNEY.phases
        .filter((phase) => selectedPhase === 'all' || phase.phase.includes(selectedPhase))
        .map((phase) => {
            if (!searchQuery.trim()) return phase
            const q = searchQuery.toLowerCase()
            const filteredMods = phase.modules.filter(
                (m) => m.code.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
            )
            return { ...phase, modules: filteredMods }
        })
        .filter((phase) => phase.modules.length > 0)

    const totalCount = AI_ENGINEERING_JOURNEY.phases.reduce((acc, p) => acc + p.modules.length, 0)

    return (
        <section id="journey" className="relative w-full py-24 px-4 sm:px-8 md:px-16 bg-black text-white overflow-hidden">
            {/* Background cyber grid & glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto space-y-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
                            <Sparkles className="size-3.5" />
                            <span>CURRICULUM & ARCHITECTURE ROADMAP</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-zentry">
                            AI Engineering <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Learning Journey</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
                            {AI_ENGINEERING_JOURNEY.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <div className="text-2xl font-mono font-bold text-emerald-400">
                                {totalCount}
                            </div>
                            <div className="text-xs text-gray-500 font-mono">Curriculum Modules</div>
                        </div>
                        <a
                            href={AI_ENGINEERING_JOURNEY.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold font-mono tracking-wider uppercase transition shadow-lg shadow-emerald-900/30 cursor-pointer"
                        >
                            <span>Explore Repo</span>
                            <ExternalLink size={13} />
                        </a>
                    </div>
                </div>

                {/* Filter tabs and search bar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-mono">
                        {[
                            { id: 'all', label: 'All Modules' },
                            { id: 'Phase I', label: 'I: Foundations' },
                            { id: 'Phase II', label: 'II: Agents' },
                            { id: 'Phase III', label: 'III: Eval & LoRA' },
                            { id: 'Phase IV', label: 'IV: Cloud MLOps' },
                            { id: 'Phase V', label: 'V: Platform & HITL' },
                            { id: 'Enterprise', label: 'Flagship Systems' },
                        ].map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setSelectedPhase(btn.id)}
                                className={`px-3 py-1.5 rounded-lg border transition whitespace-nowrap cursor-pointer ${
                                    selectedPhase === btn.id
                                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search 38 modules & systems..."
                            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 outline-none focus:border-emerald-400 focus:bg-white/10 transition font-mono"
                        />
                    </div>
                </div>

                {/* Phase Cards Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPhases.map((phase, pIdx) => (
                        <div
                            key={pIdx}
                            className={`group relative rounded-2xl border p-6 bg-gradient-to-b ${phase.color} backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl flex flex-col justify-between`}
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                                    <div>
                                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                                            <Layers className={`size-4 ${phase.accent}`} />
                                            <span>{phase.phase}</span>
                                        </h3>
                                        <div className="text-xs text-gray-400 mt-0.5">
                                            {phase.tag}
                                        </div>
                                    </div>
                                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-current ${phase.accent}`}>
                                        {phase.badge}
                                    </span>
                                </div>

                                <ul className="space-y-2.5">
                                    {phase.modules.map((mod, mIdx) => (
                                        <li
                                            key={mIdx}
                                            className="group/item flex items-start justify-between gap-2 p-2 rounded-lg bg-black/40 border border-white/5 hover:border-white/20 hover:bg-black/60 transition"
                                        >
                                            <div className="flex items-start gap-2 min-w-0">
                                                <code className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded shrink-0">
                                                    {mod.code}
                                                </code>
                                                <span className="text-xs text-gray-300 leading-snug">
                                                    {mod.desc}
                                                </span>
                                            </div>

                                            <button
                                                onClick={() => handleCopy(mod.code)}
                                                className="opacity-0 group-hover/item:opacity-100 p-1 text-gray-400 hover:text-white transition shrink-0 cursor-pointer"
                                                title="Copy module identifier"
                                            >
                                                {copiedCode === mod.code ? (
                                                    <Check className="size-3 text-emerald-400" />
                                                ) : (
                                                    <Copy className="size-3" />
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JourneySection
