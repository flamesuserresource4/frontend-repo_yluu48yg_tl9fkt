import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, PlayCircle, Sparkles, Shield, Brain, CheckCircle2, Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 ring-1 ring-white/20" />
            <span className="text-white font-semibold tracking-tight">Memorae</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#product" className="text-white/80 hover:text-white transition">Product</a>
            <a href="#solutions" className="text-white/80 hover:text-white transition">Solutions</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="#resources" className="text-white/80 hover:text-white transition">Resources</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-md">Sign in</button>
            <button className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-white text-black hover:bg-white/90 transition">
              Get started <ArrowRight size={16} />
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#product" className="block text-white/80 hover:text-white">Product</a>
            <a href="#solutions" className="block text-white/80 hover:text-white">Solutions</a>
            <a href="#pricing" className="block text-white/80 hover:text-white">Pricing</a>
            <a href="#resources" className="block text-white/80 hover:text-white">Resources</a>
            <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 text-white/80 hover:text-white text-sm px-3 py-2 rounded-md border border-white/10">Sign in</button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-white text-black hover:bg-white/90 transition">
                Get started <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden bg-gradient-to-b from-[#0a0b10] via-[#0b0d16] to-[#07080f]">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles size={14} className="text-cyan-400" />
              AI memory that evolves with you
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Remember everything.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Learn faster.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl">
              Capture knowledge, connect ideas, and surface insights when you need them. Memorae blends neuroscience and AI to make learning effortless.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                Get started free <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition">
                <PlayCircle size={18} className="text-cyan-400" /> Watch demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-400" size={18} />
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-400" size={18} />
                Private by default
              </div>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[460px] sm:h-[540px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/20">
              <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Soft overlay to blend with the background */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-transparent to-cyan-500/10" />
          </div>
        </div>

        {/* Logos row */}
        <div className="mt-16 lg:mt-24">
          <p className="text-center text-xs uppercase tracking-widest text-white/40">Trusted by learners at</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70">
            {['NeuroLab','DeepLearn','CortexAI','Visionary','LoopWorks','Aperture'].map((name) => (
              <div key={name} className="flex items-center justify-center py-3 rounded-md border border-white/5 bg-white/5 text-white/70 text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
          <Icon className="text-cyan-300" size={20} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section id="product" className="relative py-20 bg-[#07080f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles size={14} className="text-cyan-400" /> What makes Memorae different
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Your second brain, powered by AI</h2>
          <p className="mt-3 text-white/70">Organize information automatically, connect ideas across sources, and retrieve knowledge on demand.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Brain} title="Neural capture" desc="Clip from anywhere: web, PDFs, lectures. Everything is enriched with context and citations." />
          <Feature icon={Sparkles} title="Semantic search" desc="Ask in natural language. Find concepts, not just keywords — even across languages." />
          <Feature icon={Shield} title="Private by default" desc="Local-first encryption with granular sharing controls. You own your data." />
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#07080f] to-[#090b14]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <p className="text-xl sm:text-2xl leading-relaxed text-white/90">
            “Memorae feels like a mind extension. I capture ideas effortlessly and they resurface exactly when I need them.”
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600" />
            <div>
              <p className="text-white font-medium">Dr. Lina Chen</p>
              <p className="text-white/60 text-sm">Neuroscientist, Cortex Lab</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="pricing" className="relative py-20 bg-[#090b14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white">Start building your second brain today</h3>
            <p className="mt-3 text-white/70">Free forever for individuals. Upgrade anytime for advanced collaboration and knowledge graphs.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                Create your account <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition">
                Contact sales
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ul className="space-y-3 text-white/80">
                {[
                  'Unlimited notes and web clips',
                  'AI summaries and concept maps',
                  'Semantic search across sources',
                  'Private spaces and sharing controls'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-cyan-400" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0c15] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 ring-1 ring-white/20" />
            <span className="text-white/80">© {new Date().getFullYear()} Memorae</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}
