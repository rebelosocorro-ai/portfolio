'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Download,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  Menu,
  X,
  Bot,
  BrainCircuit,
  BarChart3,
  Server,
  ShieldCheck,
  Users,
  GraduationCap,
  Award,
  ExternalLink
} from 'lucide-react'

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeFaq, setActiveFaq] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const emailAddress = 'rebelosocorro0825@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const projects = [
    {
      id: 'P001',
      title: 'Claude MCP Automation Suite',
      category: 'ai',
      categoryLabel: 'Generative AI / Agentic AI',
      categoryBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Built autonomous AI agents, micro-apps, and real-time voice bots using Claude and Model Context Protocol (MCP) integrations for automated tool calling and structured workflows.',
      tags: ['Claude', 'MCP', 'Python', 'Agentic AI'],
      role: 'Lead AI Developer',
      githubLink: null
    },
    {
      id: 'P002',
      title: 'Cyberwar Banking Defence Simulator',
      category: 'cyber',
      categoryLabel: 'Cybersecurity / Data',
      categoryBadge: 'bg-rose-50 text-rose-700 border-rose-200',
      description: 'Python and SQL-based security simulation environment modeling cyber threat vectors against financial banking systems, deployed on Vercel/Render for demonstration.',
      tags: ['Python', 'SQL', 'Vercel / Render', 'Threat Modeling'],
      role: 'Developer & Security Modeler',
      githubLink: null
    },
    {
      id: 'P003',
      title: 'Custom AI Assistant “Jerry”',
      category: 'ai',
      categoryLabel: 'Generative AI',
      categoryBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Rapid-prototyped and deployed an interactive conversational AI assistant tailored for business workflow guidance, successfully showcased at a startup demo day.',
      tags: ['LLMs', 'Prompt Architecture', 'Voice & Chat UI', 'Prototyping'],
      role: 'AI Solutions Architect',
      githubLink: null
    },
    {
      id: 'P004',
      title: 'Business Intelligence Dashboards',
      category: 'data',
      categoryLabel: 'Data Analytics / BI',
      categoryBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Designed and implemented high-impact Power BI and Tableau dashboards for executive KPI tracking, revenue trends, customer segmentation, and stakeholder reporting.',
      tags: ['Power BI', 'Tableau', 'SQL', 'Advanced Excel'],
      role: 'Business Data Analyst',
      githubLink: 'https://github.com/rebelosocorro-ai/Power-BI'
    },
    {
      id: 'P005',
      title: 'AI-Generated Commercial Prototype',
      category: 'ai',
      categoryLabel: 'Creative GenAI',
      categoryBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Produced a short audio and video advertisement using modern generative AI media tools, demonstrating end-to-end creative workflows for marketing and brand storytelling.',
      tags: ['GenAI Video', 'AI Audio & Voice', 'Prompt Scripting', 'Media'],
      role: 'Creative AI Producer',
      githubLink: null
    },
    {
      id: 'P006',
      title: 'AI-Powered Spam Filter & Form Router',
      category: 'ai',
      categoryLabel: 'AI Automation',
      categoryBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Built an end-to-end n8n workflow connecting Google Sheets and OpenAI with precision prompt engineering to classify inbound form submissions and route them automatically.',
      tags: ['n8n', 'OpenAI API', 'Google Sheets', 'Smart Routing'],
      role: 'Automation Engineer',
      githubLink: 'https://github.com/rebelosocorro-ai/n8n'
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const faqs = [
    {
      question: 'What roles and contract arrangements is Socorro open to?',
      answer: 'Socorro is open to both full-time roles (Data Scientist, Business Data Analyst, Generative AI Specialist, Microsoft IT Support Specialist) and freelance/contract consulting projects across Europe and globally.'
    },
    {
      question: 'What is Socorro\'s work authorization in Europe?',
      answer: 'Socorro is a Portuguese / EU citizen based in Lisbon, Portugal. He holds full, permanent work authorization across Portugal and the European Union with no visa or sponsorship needed.'
    },
    {
      question: 'What tools and technologies does Socorro specialize in?',
      answer: 'Python (Pandas, NumPy, Scikit-learn, Matplotlib), SQL, Machine Learning, Power BI, Tableau, Claude & MCP, OpenAI API, n8n automation, Microsoft 365 administration, Windows/Mac systems, VPNs, and cybersecurity controls.'
    },
    {
      question: 'What languages does Socorro speak?',
      answer: 'English (Native proficiency), Hindi (B2 - Professional), Swahili (B1 - Intermediate), and French (A1 - Basic).'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
              SR
            </span>
            <span className="font-bold text-slate-900 text-base tracking-tight group-hover:text-blue-600 transition-colors">
              Socorro Rebelo
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">Q&amp;A</a>
            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-sm hover:shadow"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              About
            </a>
            <a 
              href="#expertise" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              Expertise
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              Experience
            </a>
            <a 
              href="#education" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              Education
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              Q&amp;A
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-lg mt-2 hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-slate-50/80 via-white to-white" id="hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Copy & Actions) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Open to Full-time Roles &amp; Freelance Work (EU Citizen)</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                I build <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI agents, data dashboards</span>, and practical tech solutions.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Data Scientist, Generative AI Specialist &amp; Microsoft-certified IT Specialist based in Lisbon, Portugal. Bringing 20+ years of high-stakes operations, maritime, and defense leadership into modern data and AI engineering.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/socorro-rebelo-717560g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#006097] transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/rebelosocorro-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href="/Profile - LinkedIn.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-300 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
                >
                  <Download size={16} />
                  <span>CV (PDF)</span>
                </a>
              </div>

              {/* Key Credentials Strip */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-lg font-extrabold text-slate-900">30+ Years</div>
                  <div className="text-xs text-slate-500 font-medium">Leadership &amp; Tech</div>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <div className="text-lg font-extrabold text-slate-900">IIT Roorkee</div>
                  <div className="text-xs text-slate-500 font-medium">Exec PG in Data Science</div>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <div className="text-lg font-extrabold text-slate-900">Microsoft</div>
                  <div className="text-xs text-slate-500 font-medium">Certified IT Specialist</div>
                </div>
              </div>
            </div>

            {/* Right Column (Profile Card with Real Photo) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10" />
                
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 shadow-sm flex-shrink-0">
                    <Image
                      src="/profile.jpg"
                      alt="Socorro Bonifacio Rebelo"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight">
                      Socorro Bonifacio Rebelo
                    </h2>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      Data Scientist &amp; GenAI Specialist
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin size={13} />
                      <span>Lisbon, Portugal • EU Citizen</span>
                    </div>
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-3 bg-slate-50/80 rounded-xl p-4 border border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Focus:</span>
                    <span className="font-semibold text-slate-800 text-right">Data Science, GenAI &amp; IT Ops</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Email:</span>
                    <span className="font-semibold text-slate-800 truncate max-w-[180px]">{emailAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Languages:</span>
                    <span className="font-semibold text-slate-800 text-right">English (Native), Hindi, Swahili, French</span>
                  </div>
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Claude & MCP', 'Python & SQL', 'Power BI & Tableau', 'n8n Automations', 'Microsoft 365', 'Risk & Security'].map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Background &amp; Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              About Socorro
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="text-slate-900 font-semibold text-base sm:text-lg">
                I am a Data Scientist and Microsoft-certified IT Support Specialist with hands-on Generative AI and automation expertise (Claude, MCPs, n8n, Python).
              </p>
              <p>
                What distinguishes my technical work is over <strong>20+ years of senior operations, risk, and security leadership</strong> across demanding corporate, maritime, and defense environments.
              </p>
              <p>
                From directing high-stakes security operations for 6,500 guests and 2,500 crew aboard Royal Caribbean’s <em>Allure of the Seas</em> to serving in the Indian Air Force during Operation Kargil, I bring proven crisis discipline, seasoned judgment under pressure, and clear stakeholder communication to every technical build.
              </p>
              <p>
                Today, I bridge the gap between technical infrastructure and business decision-making — building AI automation workflows, robust machine learning models, and insightful executive dashboards.
              </p>

              {/* Personal Interests Box */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 mt-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Personal Interests &amp; Hobbies
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">🧘 Yoga</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">🎸 Playing Guitar</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">🎤 Singing</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">🍳 Cooking</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars Highlight Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                  🎓
                </div>
                <h3 className="font-bold text-slate-900 text-sm">IIT Roorkee Alum</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Executive PG Certificate in Data Science &amp; AI focusing on ML models, NLP, and GenAI applications.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                  🛡️
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Security &amp; Risk Proven</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  20+ years managing critical operations, compliance auditing, and emergency response.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Agentic AI &amp; Automation</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hands-on creation of custom Model Context Protocol (MCP) servers and autonomous n8n workflows.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                  🌍
                </div>
                <h3 className="font-bold text-slate-900 text-sm">EU Work Authorization</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Portuguese / EU citizen based in Lisbon, ready for on-site or remote work across Europe.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Areas of Expertise */}
      <section className="py-20 bg-white" id="expertise">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Areas of Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Combining technical depth in artificial intelligence and data with secure infrastructure and executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Bot size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Generative &amp; Agentic AI</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Design and implementation of autonomous AI agents, Model Context Protocol (MCP) integrations, n8n automations, and custom AI assistants.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Claude &amp; MCP Integrations</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> n8n Workflow Automation</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> AI Assistants &amp; Voice Prototypes</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Prompt Engineering &amp; Evaluation</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BrainCircuit size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Data Science &amp; Machine Learning</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Exploratory data analysis, statistical modeling, feature engineering, and deploying supervised/unsupervised ML algorithms for actionable insights.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Python (Pandas, NumPy, Scikit-learn)</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Gradient Boosting &amp; Regression</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Clustering &amp; Sentiment Analysis</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> SQL Extraction &amp; Cleaning</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BarChart3 size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Business Intelligence &amp; Analytics</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Translating complex multi-source datasets into clean, interactive dashboards that empower executives to make fast, evidence-based decisions.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Power BI &amp; Tableau Dashboards</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> KPI Tracking &amp; Executive Reporting</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Customer Behaviour Analytics</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Advanced Excel Modeling</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Server size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">IT Systems &amp; Microsoft Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Microsoft-certified IT support specialist managing system administration, hardware/software troubleshooting, and network setup for SMEs.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Microsoft 365 &amp; Azure Basics</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Windows &amp; Mac OS Support</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> ITSM Ticketing &amp; SLA Tracking</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> VPN &amp; MFA Endpoint Security</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Cybersecurity &amp; Compliance</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Practical security controls, incident handling, risk frameworks, and internal auditing certified through NEBOSH and IMS standards.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Security Operations &amp; Incident Mgmt</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Endpoint Hardening &amp; Access Controls</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> NEBOSH Health, Safety &amp; Risk</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Integrated Management Systems (IMS)</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Users size={22} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">Operations &amp; Crisis Leadership</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Decades of leadership managing high-pressure situations, coordinating large cross-functional teams, and advising executives with calm discipline.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Emergency Protocols &amp; Crowd Control</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Multi-site &amp; Vendor Management</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> High-stakes Stakeholder Communication</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> Process Discipline &amp; Optimization</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Projects Section with Category Filters */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200" id="projects">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Verified Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Explore practical projects delivered across Generative AI, Data Science, Business Intelligence, and Security.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'Generative AI & Automation' },
              { id: 'data', label: 'Data Science & BI' },
              { id: 'cyber', label: 'Cybersecurity & IT' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                    : 'bg-white text-slate-600 hover:text-blue-600 hover:border-slate-300 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${project.categoryBadge}`}>
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{project.id}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((t) => (
                      <span key={t} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer (Role & GitHub link) */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium"><strong>Role:</strong> {project.role}</span>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
                      >
                        <span>GitHub</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Career Timeline */}
      <section className="py-20 bg-white" id="experience">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Career Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-10">
            
            {/* Role 1 */}
            <div className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Aug 2026 – Present</span>
                  <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Current</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">Freelance IT, Data &amp; Generative AI Consultant</h3>
                <p className="text-xs font-medium text-slate-500">Self-Employed • Remote / Lisbon, Portugal</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2 list-disc list-inside">
                  <li>Deliver remote IT support (Windows/Mac troubleshooting, VPN setup, Microsoft 365 administration) and network/security hardening for SME clients.</li>
                  <li>Build Generative AI automation workflows and custom AI assistants using Claude, MCPs, and n8n (including voice bots and startup prototypes).</li>
                  <li>Design Power BI/Tableau dashboards and execute data cleaning, feature engineering, and statistical analysis for business clients.</li>
                  <li>Set up ITSM ticketing workflows and SLA reporting for operational teams.</li>
                </ul>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Feb 2026 – Aug 2026</span>
                <h3 className="font-bold text-slate-900 text-base">Business Data Analyst</h3>
                <p className="text-xs font-medium text-slate-500">Unified Mentor Private Limited • Haryana, India / Remote</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2 list-disc list-inside">
                  <li>Conducted exploratory data analysis in Python (Pandas, NumPy, Matplotlib, Seaborn) to uncover actionable trends for stakeholder reporting.</li>
                  <li>Authored SQL queries for data extraction, cleaning, and transformation supporting executive decision-making.</li>
                  <li>Constructed interactive Power BI and Tableau dashboards tracking KPIs and customer behavior metrics.</li>
                  <li>Applied machine learning techniques (Gradient Boosting, Logistic Regression, Clustering, Sentiment Analysis) to improve risk assessment and customer satisfaction strategies.</li>
                </ul>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Aug 2025 – Feb 2026</span>
                <h3 className="font-bold text-slate-900 text-base">Security Advisor</h3>
                <p className="text-xs font-medium text-slate-500">Self-Employed • Dar es Salaam, Tanzania &amp; Mumbai, India</p>
                <p className="text-xs text-slate-600 pt-1">
                  Delivered data-driven advisory reports combining SQL, Power BI, Python, and machine learning for risk management and compliance decision-making.
                </p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">2003 – 2022 (18+ Years)</span>
                <h3 className="font-bold text-slate-900 text-base">Operations, Risk &amp; Security Leadership</h3>
                <p className="text-xs font-medium text-slate-500">Royal Caribbean International • Ultimate Security • Knight Support • Mohamed Enterprise</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2 list-disc list-inside">
                  <li><strong>Commercial Security Supervisor (Royal Caribbean, Miami):</strong> Directed security operations for 6,500 guests and 2,500 crew aboard <em>Allure of the Seas</em>; led emergency response drills and crowd control.</li>
                  <li><strong>Special Project Manager (Ultimate Security):</strong> Secured diplomatic sites and expatriates; formally commended by the British High Commission for service excellence.</li>
                  <li><strong>Operations General Manager (Knight Support):</strong> Formulated risk frameworks for government and private-sector clients; boosted cost efficiency through data analysis.</li>
                  <li><strong>Corporate Security Manager (Mohamed Enterprise):</strong> Oversaw security operations across 10 manufacturing units and 24 branches nationwide.</li>
                </ul>
              </div>
            </div>

            {/* Role 5 */}
            <div className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">1987 – 2003 (15+ Years)</span>
                <h3 className="font-bold text-slate-900 text-base">Corporal (Armed Forces)</h3>
                <p className="text-xs font-medium text-slate-500">Indian Air Force • New Delhi, India</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2 list-disc list-inside">
                  <li>Operated mission-critical surveillance and communication systems during Operation Kargil.</li>
                  <li>Coordinated disaster relief logistics during the Latur earthquake with calm resilience under extreme conditions.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Education & Certifications */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200" id="education">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Academic &amp; Professional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Education &amp; Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Academic Degrees */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-blue-600" size={20} />
                <h3 className="font-bold text-slate-900 text-lg">Academic Degrees &amp; Diplomas</h3>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-blue-600">2025 – 2026</span>
                <h4 className="font-bold text-slate-900 text-sm">Executive PG Certificate in Data Science &amp; AI</h4>
                <p className="text-xs font-medium text-slate-600">Indian Institute of Technology Roorkee (IIT Roorkee)</p>
                <p className="text-xs text-slate-500 pt-1">SQL, Python Programming, Machine Learning, NLP, GenAI, Power BI, Advanced Analytics.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-blue-600">2022 – 2024</span>
                <h4 className="font-bold text-slate-900 text-sm">PG Diploma in Management (IT Specialization)</h4>
                <p className="text-xs font-medium text-slate-600">MIT School of Distance Education, Pune</p>
                <p className="text-xs text-slate-500 pt-1">Computer/Information Technology Administration and Systems Management.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-blue-600">2022 – 2023</span>
                <h4 className="font-bold text-slate-900 text-sm">Post Graduation Program in Cyber Security</h4>
                <p className="text-xs font-medium text-slate-600">The University of Texas at Austin</p>
                <p className="text-xs text-slate-500 pt-1">Designing Security Controls, Security Operations &amp; Incident Management.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-blue-600">1997 – 1999</span>
                <h4 className="font-bold text-slate-900 text-sm">PG Diploma in Marketing Management</h4>
                <p className="text-xs font-medium text-slate-600">Indira Gandhi National Open University (IGNOU), New Delhi</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-blue-600">1989 – 1991</span>
                <h4 className="font-bold text-slate-900 text-sm">Bachelor of Arts (B.A.)</h4>
                <p className="text-xs font-medium text-slate-600">Osmania University, Hyderabad</p>
                <p className="text-xs text-slate-500 pt-1">English, Political Science, Public Administration, Sociology, French.</p>
              </div>
            </div>

            {/* Column 2: Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-blue-600" size={20} />
                <h3 className="font-bold text-slate-900 text-lg">Professional Certifications</h3>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded mt-0.5">Certified</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Microsoft IT Support Specialist</h4>
                  <p className="text-xs text-slate-500">Microsoft / Coursera (2026)</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded mt-0.5">Certified</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Generative AI Mastermind</h4>
                  <p className="text-xs text-slate-500">OutSkill (2026)</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded mt-0.5">Certified</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">NEBOSH International General Certificate (IGC)</h4>
                  <p className="text-xs text-slate-500">Occupational Health &amp; Safety Standards (2017)</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded mt-0.5">Certified</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Integrated Management System Internal Auditor (IMS)</h4>
                  <p className="text-xs text-slate-500">Quality, Security &amp; Environmental Process Auditing</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded mt-0.5">Certified</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Essential Aspects of Software, Hardware &amp; Data Backup</h4>
                  <p className="text-xs text-slate-500">Technical Diagnostics &amp; Recovery</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded mt-0.5">Certified</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Hazardous Waste Operations &amp; Emergency Response</h4>
                  <p className="text-xs text-slate-500">Crisis Management &amp; Safety Compliance</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Quick Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Key information for recruiters, hiring managers, and prospective clients.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full px-5 py-4 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-blue-600 transition-transform duration-200 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Section (Recruiters & Freelance Dual Paths) */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200" id="contact">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Available for full-time roles across Europe or freelance / AI consulting projects worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: For Recruiters */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  For Recruiters &amp; Employers
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Full-time Roles &amp; Team Positions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Looking for a Data Scientist, AI Specialist, or IT Leader with deep operational maturity? I am available for immediate discussions across Europe.
                </p>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Work Status:</span>
                    <span className="font-semibold text-emerald-700">Portuguese / EU Citizen (No Visa Needed)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Location:</span>
                    <span className="font-semibold text-slate-800">Lisbon, Portugal (Remote / On-site)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href="https://www.linkedin.com/in/socorro-rebelo-717560g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0077b5] text-white py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-[#006097] transition-all shadow-sm"
                >
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href="/Profile - LinkedIn.pdf"
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Download size={16} />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Card 2: For Clients */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  For Clients &amp; Companies
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Freelance &amp; AI Consulting
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need custom AI automation workflows (Claude/n8n), executive Power BI dashboards, data cleaning, or remote IT/security hardening?
                </p>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Email:</span>
                    <span className="font-semibold text-slate-800">{emailAddress}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Phone / WhatsApp:</span>
                    <span className="font-semibold text-slate-800">+91 9136742336</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-sm"
                >
                  <Mail size={16} />
                  <span>Send an Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-sm"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-sm">Socorro Bonifacio Rebelo</div>
            <div className="text-slate-400 text-xs mt-0.5">Data Scientist • GenAI Specialist • Microsoft IT Support Specialist</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="https://www.linkedin.com/in/socorro-rebelo-717560g/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/rebelosocorro-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>

          <div className="text-slate-500">
            &copy; {new Date().getFullYear()} Socorro Rebelo. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}
