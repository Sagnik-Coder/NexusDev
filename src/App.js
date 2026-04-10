import React, { useState, useEffect } from 'react';
import { 
  Zap, User, Mail, Lock, ArrowRight, Play, 
  Brain, Code2, Terminal, Shield, ChevronRight, 
  Search, CheckCircle2, Star, Sparkles, MessageSquare, 
  Globe, Cpu, Layers
} from 'lucide-react';

// IMPORTING YOUR PERSONAL DASHBOARD
import Dashboard from './PersonalDash';

// ==========================================
// COMPONENT: AUTHENTICATION MODAL
// ==========================================
const AuthModal = ({ showAuthModal, setShowAuthModal, isSignUp, setIsSignUp, handleAuthSubmit }) => {
  if (!showAuthModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl transition-opacity"
        onClick={() => setShowAuthModal(false)}
      ></div>

      <div className="relative bg-[#0a1020]/90 border border-blue-500/30 rounded-3xl p-8 w-full max-w-md shadow-[0_0_80px_rgba(37,99,235,0.2)] transform transition-all animate-modal-pop backdrop-blur-2xl">
        
        {/* Glow behind modal */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>

        <div className="flex items-center justify-center space-x-2 mb-8 relative z-10">
          <Zap className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          <h2 className="text-3xl font-black text-white tracking-tighter">NEXUS<span className="text-emerald-400">DEV</span></h2>
        </div>

        <h3 className="text-xl font-bold text-center text-white mb-6 tracking-wide">
          {isSignUp ? 'Initialize Sequence' : 'Welcome Back, Engineer'}
        </h3>

        <form onSubmit={handleAuthSubmit} className="space-y-5 relative z-10">
          {isSignUp && (
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              <input type="text" placeholder="Full Name" required className="w-full bg-[#020617]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner" />
            </div>
          )}
          
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
            <input type="email" placeholder="Email Address" required className="w-full bg-[#020617]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner" />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
            <input type="password" placeholder="Password" required className="w-full bg-[#020617]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner" />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 mt-2">
            {isSignUp ? 'START CODING' : 'AUTHENTICATE'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8">
          {isSignUp ? 'Already in the system?' : "Need access credentials?"}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 underline-offset-4"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT: THE ULTRA-POLISHED LANDING PAGE
// ==========================================
const LandingPage = ({ setIsSignUp, setShowAuthModal }) => {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative scroll-smooth">
      
      {/* 100/10 CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
        @keyframes drift { 0% { transform: translateX(0) rotate(0deg); } 100% { transform: translateX(20px) rotate(5deg); } }
        @keyframes modal-pop { 0% { opacity: 0; transform: scale(0.95) translateY(10px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite reverse; }
        .animate-modal-pop { animation: modal-pop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .glass-panel { background: rgba(10, 16, 32, 0.4); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.05); }
        .glass-card { background: linear-gradient(145deg, rgba(30,41,59,0.4) 0%, rgba(15,23,42,0.4) 100%); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); }
        .bg-grid { background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px); background-size: 60px 60px; }
      `}</style>

      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full animate-float-fast"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-emerald-600/5 blur-[150px] rounded-full animate-float-slow"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-500">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-emerald-500/10 p-2 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
            <Zap className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">NEXUS<span className="text-emerald-400">DEV</span></h1>
        </div>
        <div className="hidden lg:flex space-x-10 text-sm font-bold text-gray-400">
          {['About', 'Curriculum', 'Pricing', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-5">
          <button onClick={() => { setIsSignUp(false); setShowAuthModal(true); }} className="text-gray-300 text-sm font-bold hover:text-white transition-colors hidden sm:block">
            Sign In
          </button>
          <button onClick={() => { setIsSignUp(true); setShowAuthModal(true); }} className="bg-white hover:bg-gray-100 text-[#020617] px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95">
            Start Free
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-24 px-6 flex flex-col items-center text-center min-h-[90vh] justify-center">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase">Nexus Engine v2.0 Live</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-white z-10">
          DON'T JUST LEARN CODE.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">ENGINEER THE FUTURE.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light z-10">
          The world's first AI-Native programming lab. Master Python, Data Science, and React with hyper-personalized AI avatars and real-world project scenarios.
        </p>
        <button onClick={() => { setIsSignUp(true); setShowAuthModal(true); }} className="group bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px] rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300">
           <div className="bg-[#020617] group-hover:bg-transparent transition-colors px-10 py-4 rounded-full flex items-center justify-center">
              <span className="font-bold text-white group-hover:text-[#020617] transition-colors">Launch Workspace</span>
              <ArrowRight className="w-5 h-5 ml-2 text-cyan-400 group-hover:text-[#020617] transition-colors group-hover:translate-x-1" />
           </div>
        </button>
      </section>
      

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-0 right-10 w-px h-32 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 blur-2xl rounded-3xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="glass-card p-2 rounded-3xl relative z-10 border border-white/10 overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Code Engine" className="rounded-2xl opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="text-cyan-400 font-bold tracking-widest text-sm uppercase flex items-center"><Globe className="w-4 h-4 mr-2"/> Who We Are</div>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">The Neural Engine for <br/>Next-Gen Developers.</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              We aren't just another video course platform. NexusDev is a live, AI-integrated ecosystem. We believe that reading code doesn't make you an engineer—writing, breaking, and optimizing it does.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Our neural avatars act as senior developers, conducting pair-programming sessions with you in real-time, adapting to your specific learning vector.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-black text-white">100k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">99%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Code Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU WILL LEARN (BENTO BOX) */}
      <section id="curriculum" className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Master the AI Stack</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">A hyper-focused curriculum designed to take you from syntax syntax basics to deploying production-grade AI models.</p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Main Large Box */}
          <div className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
            <Terminal className="w-10 h-10 text-cyan-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">Core Python & Algorithms</h4>
            <p className="text-gray-400 max-w-md">Build a rock-solid foundation. Learn memory management, advanced data structures, and algorithmic optimization.</p>
            <div className="absolute right-6 bottom-6 opacity-10 group-hover:opacity-20 transition-opacity"><Code2 className="w-32 h-32 text-white" /></div>
          </div>

          {/* Top Right Box */}
          <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500 border-t-4 border-t-emerald-400">
            <Brain className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Machine Learning</h4>
            <p className="text-sm text-gray-400">Train models, understand neural networks, and manipulate datasets with Pandas/NumPy.</p>
          </div>

          {/* Bottom Left Box */}
          <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500 border-b-4 border-b-purple-500">
            <Layers className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Full-Stack React</h4>
            <p className="text-sm text-gray-400">Connect your AI engines to beautiful, responsive front-ends using modern React hooks and Tailwind.</p>
          </div>

          {/* Bottom Right Large Box */}
          <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-900/40 to-[#020617] border border-blue-500/20 p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500">
            <Cpu className="w-10 h-10 text-blue-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">LLM Integration & MLOps</h4>
            <p className="text-gray-400 max-w-md">Learn to deploy scalable AI apps. Integrate OpenAI APIs, vector databases, and manage cloud deployments.</p>
            <div className="mt-6 flex gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">Docker</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">Pinecone</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">AWS</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Invest in Your Future</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Transparent pricing. No hidden fees. Upgrade your brain's firmware today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Free Tier */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Initiate</h4>
            <div className="text-4xl font-black text-white mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-gray-400 text-sm">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-gray-600"/> Basic Python Syntax</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-gray-600"/> 5 AI prompts / day</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-gray-600"/> Community Access</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">Start Free</button>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.2)] transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#020617] text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full z-10">Most Popular</div>
            <div className="bg-[#0a1020] p-8 rounded-[22px] h-full">
              <h4 className="text-xl font-bold text-white mb-2">Engineer Pro</h4>
              <div className="text-5xl font-black text-white mb-6">$49<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-cyan-400"/> Full Curriculum Access</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-cyan-400"/> Unlimited AI Neural Tutor</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-cyan-400"/> Real-world Project Labs</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-cyan-400"/> Certificate of Engineering</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-1">Upgrade to Pro</button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
            <div className="text-4xl font-black text-white mb-6">$199<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-gray-400 text-sm">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-gray-600"/> Team Analytics Dashboard</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-gray-600"/> Custom AI Model Training</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-gray-600"/> Dedicated Support Vector</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden relative">
          {/* BG Design */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>
          
          <div className="flex flex-col md:flex-row gap-12 relative z-10">
            <div className="flex-1">
              <h3 className="text-3xl font-black text-white mb-4">System Support // Comms</h3>
              <p className="text-gray-400 mb-8">Encountered an anomaly in the matrix? Want to discuss an enterprise deployment? Open a comm channel.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/5 p-3 rounded-lg"><Mail className="w-5 h-5 text-cyan-400"/></div>
                  <div>
                    <div className="text-sm font-bold text-white">Email Override</div>
                    <div className="text-xs text-gray-500">support@nexusdev.io</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/5 p-3 rounded-lg"><MessageSquare className="w-5 h-5 text-cyan-400"/></div>
                  <div>
                    <div className="text-sm font-bold text-white">Community Discord</div>
                    <div className="text-xs text-gray-500">Join 100k+ Engineers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="space-y-4">
                <input type="text" placeholder="Designation (Name)" className="w-full bg-[#020617]/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                <input type="email" placeholder="Comms Link (Email)" className="w-full bg-[#020617]/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                <textarea rows="4" placeholder="Transmit Message..." className="w-full bg-[#020617]/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                <button className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-bold py-3 rounded-xl transition-all duration-300">Transmit Data</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-8 border-t border-white/5 relative z-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-black tracking-tighter text-white">NEXUS<span className="text-emerald-500">DEV</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">Connecting Bengal to the global tech ecosystem. Building the engineers of tomorrow.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#curriculum" className="hover:text-cyan-400 transition-colors">Curriculum</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 max-w-7xl mx-auto">
          <p>© 2026 NexusDev. All rights reserved.</p>
          <a href="https://sagnik-coder.github.io/sagniksengupta/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-2 hover:text-emerald-400 transition-colors mt-4 md:mt-0">
            <User className="w-4 h-4" />
            <span className="font-bold tracking-tight text-gray-400 group-hover:text-emerald-400 transition-colors">Created by Me</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// MAIN APP ROUTING COMPONENT
// ==========================================
export default function App() {
  // --- STATE MANAGEMENT ---
  const [isAuthenticated, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // --- AUTH LOGIC ---
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setShowAuthModal(false);
    setIsLoggedIn(true);
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isAuthenticated ? (
        // Renders the Personal Dashboard when logged in
        <Dashboard handleLogout={handleLogout} />
      ) : (
        // Renders the highly-polished Landing Page
        <LandingPage setIsSignUp={setIsSignUp} setShowAuthModal={setShowAuthModal} />
      )}
      
      {/* Universal Auth Modal */}
      <AuthModal 
        showAuthModal={showAuthModal} 
        setShowAuthModal={setShowAuthModal} 
        isSignUp={isSignUp} 
        setIsSignUp={setIsSignUp} 
        handleAuthSubmit={handleAuthSubmit} 
      />
    </>
  );
}