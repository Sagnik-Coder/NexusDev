import React, { useState } from 'react';
import { 
  Zap, Sparkles, LogOut, Play, Terminal, 
  BarChart3, Code2, Trophy, Bot, Brain, Activity, 
  Network, LayoutDashboard, Cpu, FolderGit2, Settings,
  Flame, Bell, Search, ChevronRight, CheckCircle2
} from 'lucide-react';

// --- PREMIUM SVG COMPONENTS ---
const TrendLineSvg = ({ color }) => (
  <svg viewBox="0 0 100 25" className="w-full h-10 drop-shadow-md overflow-visible">
    <polyline points="0,20 15,15 30,22 45,10 60,18 75,5 90,12 100,2" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="100" cy="2" r="3" fill={color} className="animate-pulse shadow-[0_0_10px_rgba(currentColor,0.8)]"/>
  </svg>
);

const AreaChartSvg = ({ colorPrimary, colorSecondary }) => (
  <svg viewBox="0 0 100 40" className="w-full h-12 overflow-visible">
    <defs>
      <linearGradient id="premiumGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={colorPrimary} stopOpacity="0.4" />
        <stop offset="100%" stopColor={colorPrimary} stopOpacity="0" />
      </linearGradient>
    </defs>
    <polyline points="0,35 20,20 40,28 60,10 80,15 100,0" fill="none" stroke={colorSecondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polygon points="0,35 20,20 40,28 60,10 80,15 100,0 100,40 0,40" fill="url(#premiumGlow)"/>
  </svg>
);

// --- PREMIUM TELEMETRY CARD ---
const StatCard = ({ title, value, icon: Icon, subtitle, chart, trend }) => (
  <div className="bg-[#0b0b12]/60 backdrop-blur-2xl border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden transition-all duration-500 hover:bg-[#11111a]/80 hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
    {/* Subtle top inner border highlight */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
    
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center space-x-3">
        <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.05] text-slate-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">{title}</span>
      </div>
      {trend && (
        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md border border-emerald-400/20 flex items-center">
          <Flame className="w-3 h-3 mr-1" /> {trend}
        </span>
      )}
    </div>
    
    <div>
      <div className="text-3xl font-bold text-white mb-1 tracking-tight">{value}</div>
      <div className="text-xs text-slate-500 font-mono mb-4">{subtitle}</div>
      {chart && <div className="mt-4">{chart}</div>}
    </div>
  </div>
);

export default function Dashboard({ handleLogout }) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'System Overview', icon: LayoutDashboard },
    { id: 'modules', label: 'Neural Modules', icon: Cpu },
    { id: 'projects', label: 'Repositories', icon: FolderGit2 },
    { id: 'analytics', label: 'Telemetry', icon: Activity },
    { id: 'settings', label: 'Configuration', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#020204] text-slate-300 font-sans overflow-hidden selection:bg-cyan-500/30">
      
      {/* --- AMBIENT LIGHTING ENGINE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen"/>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/15 blur-[150px] rounded-full mix-blend-screen"/>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-purple-900/10 blur-[100px] rounded-full mix-blend-screen"/>
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGc+CiAgICA8cGF0aCBkPSJNMjAsMCBMMjAsNDAgTTAsMjAgTDQwLDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvZz4KPC9zdmc+')] opacity-50"/>
      </div>

      {/* --- LEFT SIDEBAR (ALWAYS OPEN) --- */}
      <aside className="w-[280px] h-full flex flex-col bg-[#050508]/80 backdrop-blur-3xl border-r border-white/[0.05] z-20 shrink-0">
        {/* Logo Area */}
        <div className="h-24 flex items-center px-8 border-b border-white/[0.05] relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-r-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"/>
          <div className="bg-gradient-to-br from-white/[0.08] to-transparent p-2 rounded-xl border border-white/[0.05] mr-4">
            <Zap className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white leading-none">
              NEXUS<span className="text-cyan-400">DEV</span>
            </h1>
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1 block">Engineering OS v2.4</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-8 space-y-2 overflow-y-auto no-scrollbar">
          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4 mb-4">Main Menu</div>
          {menuItems.map((item) => {
            const isActive = activeMenu === item.id;
            return (
              <button 
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-transparent text-white border border-cyan-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <item.icon className={`w-4 h-4 mr-4 ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto text-cyan-500/50" />}
              </button>
            );
          })}
        </div>

        {/* User Profile Area */}
        <div className="p-4 border-t border-white/[0.05] bg-gradient-to-t from-black/40 to-transparent">
          <div className="flex items-center p-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer border border-transparent hover:border-white/[0.05] group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[2px] mr-3">
              <div className="w-full h-full rounded-full bg-[#050508] flex items-center justify-center border border-black">
                <span className="text-xs font-bold text-white">E1</span>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-bold text-white truncate">ENGINEER_001</div>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"/>
                System Online
              </div>
            </div>
            <LogOut onClick={handleLogout} className="w-4 h-4 text-slate-500 hover:text-red-400 transition-colors" />
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative z-10 no-scrollbar">
        
        {/* Top Navbar */}
        <header className="h-24 px-8 lg:px-12 flex items-center justify-between sticky top-0 z-30 bg-[#020204]/80 backdrop-blur-xl border-b border-white/[0.02]">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white tracking-tight">System Overview</h2>
            <div className="text-xs font-mono text-slate-500 flex items-center mt-1">
              <Network className="w-3.5 h-3.5 mr-2 text-cyan-400" />
              Node: <span className="text-slate-300 ml-1">US-EAST-1</span> <span className="mx-2">|</span> Latency: <span className="text-emerald-400 ml-1">12ms</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center bg-[#0a0a10] border border-white/[0.05] rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-slate-500 mr-2" />
              <input 
                type="text" 
                placeholder="Query system data..." 
                className="bg-transparent border-none outline-none text-sm text-white placeholder-slate-600 w-48 font-mono"
              />
              <div className="text-[10px] font-mono bg-white/[0.05] text-slate-400 px-1.5 py-0.5 rounded ml-2">⌘K</div>
            </div>
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-500 rounded-full border border-[#020204]"></span>
            </button>
          </div>
        </header>

        <div className="p-8 lg:p-12 max-w-7xl mx-auto space-y-8">
          
          {/* Telemetry Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Execution Uptime" 
              value="99.9%" 
              icon={Activity} 
              subtitle="System stability index" 
              chart={<TrendLineSvg color="#10b981"/>} // Emerald
              trend="OPTIMAL"
            />
            <StatCard 
              title="Data Ingestion" 
              value="142.4 GB" 
              icon={Bot} 
              subtitle="Processed past 24h" 
              chart={<AreaChartSvg colorPrimary="#06b6d4" colorSecondary="#22d3ee"/>} // Cyan
            />
            <StatCard 
              title="Active Logic Loops" 
              value="2,841" 
              icon={Brain} 
              subtitle="Concurrency metric" 
              chart={<TrendLineSvg color="#8b5cf6"/>} // Purple
            />
            <StatCard 
              title="Quantum XP Vector" 
              value="24,590" 
              icon={Zap} 
              subtitle="Developer rank progression" 
              trend="+450 XP"
            />
          </div>

          {/* Main Grid: Modules & Projects */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Col (Takes up 2/3) */}
            <div className="xl:col-span-2 space-y-8">
              
              {/* Premium IDE / Execution Module */}
              <div className="bg-[#07070a]/80 backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"/>
                
                <div className="bg-[#040406] rounded-[22px] p-8 border border-white/[0.02]">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]"/>
                      <h3 className="text-sm font-bold text-white tracking-wide">ACTIVE_COMPILATION_MANIFOLD</h3>
                    </div>
                    <span className="text-[10px] font-mono bg-white/[0.03] border border-white/[0.05] text-slate-400 px-3 py-1.5 rounded-lg flex items-center">
                      <Terminal className="w-3 h-3 mr-2" /> ID: CYB_PY_02
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Visualizer Block */}
                    <div className="w-full md:w-[240px] shrink-0 bg-[#020203] rounded-2xl border border-white/[0.03] aspect-square flex flex-col items-center justify-center relative overflow-hidden group-hover:border-cyan-500/20 transition-colors duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
                      
                      {/* Abstract Code UI */}
                      <div className="w-32 h-32 relative">
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                          <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" strokeDasharray="60 40" />
                          <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="3" strokeDasharray="20 80" />
                        </svg>
                        <Play className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-1" />
                      </div>
                      
                      <div className="absolute bottom-4 left-0 w-full px-4 flex justify-between text-[9px] font-mono text-slate-500">
                        <span>CPU: 42%</span>
                        <span>MEM: 1.2G</span>
                      </div>
                    </div>
                    
                    {/* Data Block */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-3xl font-black text-white mb-3 tracking-tight">Python: Adv. Logic</h4>
                      <p className="text-sm text-slate-400 mb-8 leading-relaxed font-light">
                        Compiling the core engine for the Gym 1-Rep Max Calculator. Data structures are currently mapping spatial arrays for strength threshold predictions.
                      </p>
                      
                      <div className="bg-[#020203] rounded-xl p-5 border border-white/[0.03] mb-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"/>
                        <div className="flex justify-between text-xs font-mono mb-3">
                          <span className="text-slate-400">BUILD_PROGRESS</span>
                          <span className="text-cyan-400 font-bold">65.0%</span>
                        </div>
                        <div className="w-full bg-[#111116] h-1.5 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400 relative" style={{ width: '65%' }}>
                             <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white opacity-50"/>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button className="flex-1 bg-white text-black text-sm font-bold py-3.5 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2 fill-black" /> Resume Engine
                        </button>
                        <button className="px-6 bg-white/[0.03] text-white text-sm font-bold py-3.5 rounded-xl border border-white/[0.05] hover:bg-white/[0.08] transition-colors">
                          View Source
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repositories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Project Card 1 */}
                 <div className="bg-[#0b0b12]/60 backdrop-blur-2xl border border-white/[0.05] p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group relative">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"/>
                    </div>
                    <div className="bg-white/[0.03] w-12 h-12 rounded-xl flex items-center justify-center border border-white/[0.05] mb-5 group-hover:scale-110 transition-transform">
                      <LayoutDashboard className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">CoC Base Optimizer</h4>
                    <p className="text-xs text-slate-500 mb-6 leading-relaxed line-clamp-2">Python-driven data science engine for spatial logic and defensive structuring.</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono bg-[#050508] border border-white/[0.05] px-2 py-1 text-slate-400 rounded">Python</span>
                      <span className="text-[10px] font-mono bg-[#050508] border border-white/[0.05] px-2 py-1 text-slate-400 rounded">Pandas</span>
                    </div>
                 </div>

                 {/* New Project Action */}
                 <div className="bg-transparent border border-dashed border-white/[0.1] p-6 rounded-2xl hover:bg-white/[0.02] hover:border-cyan-500/40 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center min-h-[200px] group">
                    <div className="bg-[#050508] w-12 h-12 rounded-full flex items-center justify-center border border-white/[0.05] mb-4 group-hover:bg-cyan-500/10 transition-colors">
                      <Code2 className="w-5 h-5 text-slate-500 group-hover:text-cyan-400" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Deploy New Scaffold</h4>
                    <p className="text-[10px] font-mono text-slate-600 mt-2">Initialize empty vector</p>
                 </div>
              </div>

            </div>

            {/* Right Col (Takes up 1/3) */}
            <div className="space-y-8">
              
              {/* Challenge Card */}
              <div className="bg-gradient-to-b from-[#0b0b12] to-[#07070a] border border-white/[0.05] rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none"/>
                
                <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center mb-6">
                  <Brain className="w-4 h-4 mr-2 text-cyan-400" /> Neural Challenge
                </h3>
                
                <div className="bg-[#040406] rounded-xl p-5 border border-white/[0.03] mb-6 group cursor-pointer hover:border-cyan-500/30 transition-colors relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-cyan-500/50 rounded-r opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    <span className="text-cyan-400 mr-2">»</span>
                    Write a Python function to parse a complex JSON log file and extract anomaly patterns using recursion.
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20">
                    +150 XP Reward
                  </span>
                  <button className="text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg transition-colors">
                    Execute
                  </button>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-[#0b0b12]/60 backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-white/[0.05] pb-4">
                  System Logs
                </h3>
                
                <div className="space-y-5 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/[0.05] z-0"/>
                  
                  {[
                    { id: 1, text: "Model weights optimized", time: "2m ago", status: "success", icon: CheckCircle2 },
                    { id: 2, text: "Data ingestion pipeline active", time: "1h ago", status: "info", icon: Activity },
                    { id: 3, text: "User Engineer_001 authenticated", time: "3h ago", status: "neutral", icon: LayoutDashboard },
                    { id: 4, text: "Previous instance terminated", time: "Yday", status: "neutral", icon: LogOut },
                  ].map((log) => (
                    <div key={log.id} className="flex items-start relative z-10 group cursor-default">
                      <div className={`w-4 h-4 rounded-full mt-0.5 mr-4 flex items-center justify-center border-2 border-[#0b0b12] shadow-sm ${
                        log.status === 'success' ? 'bg-emerald-400 text-black' : 
                        log.status === 'info' ? 'bg-cyan-400 text-black' : 'bg-slate-600 text-white'
                      }`}>
                        <log.icon className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">{log.text}</p>
                        <span className="text-[10px] text-slate-500 font-mono">{log.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

    </div>
  );
}