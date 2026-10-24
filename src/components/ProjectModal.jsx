import React from 'react'
import { X, ExternalLink, Code, Layers, ShieldCheck, Zap, GitBranch, Terminal, CheckCircle2 } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
        <div className='fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 select-none'>
            {/* Backdrop click */}
            <div className='absolute inset-0' onClick={onClose} />

            <div className='relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d14]/95 border border-white/20 rounded-3xl shadow-2xl overflow-y-auto text-white p-6 md:p-8 flex flex-col'>
                {/* Modal Top Header with macOS traffic lights */}
                <div className='flex items-center justify-between pb-4 border-b border-white/10 mb-6'>
                    <div className='flex items-center gap-3'>
                        {/* macOS Window Controls */}
                        <div className='flex items-center gap-1.5'>
                            <span onClick={onClose} className='size-3 rounded-full bg-[#ff5f56] cursor-pointer hover:opacity-80 transition' title='Close'></span>
                            <span className='size-3 rounded-full bg-[#ffbd2e]'></span>
                            <span className='size-3 rounded-full bg-[#27c93f]'></span>
                        </div>
                        <span className='text-xs font-mono text-gray-400 uppercase tracking-widest pl-2 border-l border-white/10'>
                            System Architecture Blueprint & Specifications
                        </span>
                    </div>

                    <button
                        onClick={onClose}
                        className='text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition'
                    >
                        <X className='size-5' />
                    </button>
                </div>

                {/* Main Project Title & Tagline */}
                <div className='mb-6'>
                    <div className='flex flex-wrap items-center gap-2 mb-2'>
                        <span className='text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'>
                            {project.category || 'Distributed AI Architecture'}
                        </span>
                        {project.sla && (
                            <span className='text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'>
                                {project.sla}
                            </span>
                        )}
                    </div>
                    <h2 className='text-2xl md:text-3xl font-extrabold text-white tracking-tight'>
                        {project.title}
                    </h2>
                    <p className='text-sm text-gray-300 mt-2 leading-relaxed'>
                        {project.fullDescription || project.description}
                    </p>
                </div>

                {/* Key Architectural Highlights Grid */}
                {project.highlights && project.highlights.length > 0 && (
                    <div className='mb-6'>
                        <h4 className='text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5'>
                            <Layers className='size-3.5' />
                            <span>Core Engineering Highlights & Impact</span>
                        </h4>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            {project.highlights.map((h, i) => (
                                <div key={i} className='p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5'>
                                    <CheckCircle2 className='size-4 text-emerald-400 shrink-0 mt-0.5' />
                                    <p className='text-xs text-gray-300 leading-relaxed'>{h}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tech Stack Chips */}
                {project.techStack && (
                    <div className='mb-6'>
                        <h4 className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-2'>Tech Stack</h4>
                        <div className='flex flex-wrap gap-1.5'>
                            {project.techStack.map((tech, i) => (
                                <span key={i} className='text-xs bg-white/10 border border-white/10 text-cyan-200 px-2.5 py-1 rounded-lg font-mono'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Documentation Suite Links */}
                <div className='mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3'>
                    <div className='flex flex-wrap items-center gap-2'>
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-xl text-xs font-bold transition shadow-lg'
                            >
                                <Code className='size-3.5' />
                                <span>GitHub Repo ↗</span>
                            </a>
                        )}
                        {project.archUrl && (
                            <a
                                href={project.archUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 px-3.5 py-2 rounded-xl text-xs font-semibold transition'
                            >
                                <Layers className='size-3.5' />
                                <span>ARCHITECTURE.md ↗</span>
                            </a>
                        )}
                        {project.docsImagesUrl && (
                            <a
                                href={project.docsImagesUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/40 px-3.5 py-2 rounded-xl text-xs font-semibold transition'
                            >
                                <span>docs/images ↗</span>
                            </a>
                        )}
                    </div>

                    {project.deployCommand && (
                        <div className='flex items-center gap-2 bg-black/60 border border-gray-800 rounded-xl px-3 py-1.5 text-xs font-mono text-emerald-400'>
                            <Terminal className='size-3.5 text-emerald-400 shrink-0' />
                            <span className='truncate max-w-[280px]'>{project.deployCommand}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
