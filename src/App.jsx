import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Cloud, Code, Briefcase, 
  GraduationCap, Mail, Phone, Globe, 
  ChevronRight, Lock, Server, Cpu
} from 'lucide-react';

// Reusable Components
const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-mono text-zinc-100">{title}</h2>
    <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4"></div>
  </div>
);

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 text-sm font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
    {children}
  </span>
);

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-mono font-bold text-zinc-100 flex items-center gap-2">
            <Lock className="text-emerald-400" size={20} />
            <span>P.L<span className="text-emerald-400">_</span></span>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-sm text-zinc-500">
            <a href="#about" className="hover:text-emerald-400 transition-colors">./about</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">./experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">./projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">./contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <section className={`mb-24 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono mb-6 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Status: Active
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-4 tracking-tight">
            Pratik Lokhande
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-500 font-mono mb-6 flex items-center gap-2">
            <Terminal size={24} className="text-emerald-400" />
            Cybersecurity Analyst
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl text-zinc-400 mb-8">
            Combining enterprise SecOps experience in corporate banking with strong cloud skills. 
            Proficient in proactive threat hunting, database hardening, and applying modern AI and LLM security frameworks.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a href="#contact" className="px-6 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/20 rounded-md transition-all flex items-center gap-2">
              <Mail size={16} /> Init Contact
            </a>
            <a href="https://Linkedin.com/in/pratiknlokhande" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 rounded-md transition-all flex items-center gap-2">
              <Globe size={16} /> LinkedIn
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about" className="mb-24 scroll-mt-24">
          <SectionHeader title="Technical Arsenal" icon={Cpu} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-zinc-100 font-mono mb-4 flex items-center gap-2"><Code size={16} className="text-emerald-400"/> Languages & Scripting</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>Bash</SkillBadge>
                <SkillBadge>SQL</SkillBadge>
                <SkillBadge>JavaScript</SkillBadge>
              </div>
            </div>

            <div className="bg-[#111] border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-zinc-100 font-mono mb-4 flex items-center gap-2"><Shield size={16} className="text-emerald-400"/> Security & CSPM</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Splunk</SkillBadge>
                <SkillBadge>IBM QRadar</SkillBadge>
                <SkillBadge>Prowler</SkillBadge>
                <SkillBadge>CyberArk</SkillBadge>
                <SkillBadge>Tripwire</SkillBadge>
                <SkillBadge>Wireshark</SkillBadge>
                <SkillBadge>Nmap</SkillBadge>
                <SkillBadge>Burp Suite</SkillBadge>
              </div>
            </div>

            <div className="bg-[#111] border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-zinc-100 font-mono mb-4 flex items-center gap-2"><Cloud size={16} className="text-emerald-400"/> Cloud & DevSecOps</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>AWS</SkillBadge>
                <SkillBadge>Azure</SkillBadge>
                <SkillBadge>GCP</SkillBadge>
                <SkillBadge>Terraform</SkillBadge>
                <SkillBadge>Checkov</SkillBadge>
                <SkillBadge>Tfsec</SkillBadge>
                <SkillBadge>AWS Lambda</SkillBadge>
                <SkillBadge>CI/CD</SkillBadge>
              </div>
            </div>

            <div className="bg-[#111] border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-zinc-100 font-mono mb-4 flex items-center gap-2"><Server size={16} className="text-emerald-400"/> Specializations</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Threat Hunting</SkillBadge>
                <SkillBadge>AI/LLM Security</SkillBadge>
                <SkillBadge>OWASP Top 10</SkillBadge>
                <SkillBadge>MITRE ATT&CK</SkillBadge>
                <SkillBadge>Incident Triage</SkillBadge>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <SectionHeader title="Experience" icon={Briefcase} />
          
          <div className="relative border-l border-zinc-800 ml-3 md:ml-4">
            <div className="mb-10 ml-8 md:ml-10">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#0a0a0a] border border-emerald-500/30 rounded-full -left-4 ring-4 ring-[#0a0a0a]">
                <Shield size={14} className="text-emerald-400" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-zinc-100">
                IT Officer - Security Operations
              </h3>
              <time className="block mb-4 text-sm font-normal leading-none text-zinc-500 font-mono">
                HDFC Bank Ltd. | Navi Mumbai | Apr 2025 - Present
              </time>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500/70 mt-0.5 shrink-0" />
                  <span>Monitored threat & compliance across <strong>350+ production databases</strong> (Oracle, MSSQL, NoSQL) using Tripwire & CyberArk to detect misconfigurations and anomalies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500/70 mt-0.5 shrink-0" />
                  <span>Remediated <strong>50+ high-risk OWASP vulnerabilities</strong> during UAT/SIT, driving a 30% reduction in recurring incidents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500/70 mt-0.5 shrink-0" />
                  <span>Engineered custom Python automation scripts to aggregate and parse logs across 350+ databases, reducing manual toil by 40% and <strong>cutting MTTR to under 15 minutes</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500/70 mt-0.5 shrink-0" />
                  <span>Executed <strong>25+ successful production changes</strong> via ServiceNow with zero rollback failures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500/70 mt-0.5 shrink-0" />
                  <span>Led a security hardening initiative mapping 50+ configuration controls to NIST SP 800-53 and CSF frameworks, clearing audits with zero major findings.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <SectionHeader title="Notable Operations" icon={Terminal} />
          
          <div className="grid grid-cols-1 gap-6">
            {/* Project 1 */}
            <div className="group bg-[#111] border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">AWS Auto-Remediation Engine</h3>
                <Terminal size={20} className="text-zinc-600" />
              </div>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Architected an event-driven Lambda pipeline to instantly detect and programmatically revert unauthorized security group modifications within <span className="text-emerald-400">{"<5 seconds"}</span>. Modularized infrastructure using Terraform and applied Checkov static analysis to enforce zero policy drift prior to production.
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>AWS Lambda</SkillBadge>
                <SkillBadge>CloudTrail</SkillBadge>
                <SkillBadge>Terraform</SkillBadge>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-[#111] border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">Automated Cloud Compliance & CSPM Pipeline</h3>
                <Cloud size={20} className="text-zinc-600" />
              </div>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Deployed Prowler to automate cloud configuration audits mapped to CIS Benchmarks and NIST SP 800-53 frameworks. Programmed a serverless Python pipeline to ingest scan logs and route real-time critical risk alerts to security dashboards.
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Prowler</SkillBadge>
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>AWS Lambda</SkillBadge>
                <SkillBadge>Slack API</SkillBadge>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="mb-24 grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Education" icon={GraduationCap} />
            <div className="bg-[#111] border border-zinc-800 rounded-xl p-6">
              <h4 className="text-zinc-100 font-bold mb-2">Bachelor of Computer Science</h4>
              <p className="text-zinc-400 text-sm mb-2">Dr. Babasaheb Ambedkar Marathwada University</p>
              <p className="text-emerald-500/80 font-mono text-sm">Aug 2021 - May 2024</p>
            </div>
          </div>
          
          <div>
            <SectionHeader title="Certifications" icon={Shield} />
            <ul className="space-y-3">
              {[
                "IBM Cybersecurity Certificate",
                "Google Cybersecurity Certificate",
                "Tata Cybersecurity Analyst Certificate",
                "J.P. Morgan Software Engineering Virtual Internship"
              ].map((cert, i) => (
                <li key={i} className="flex items-center gap-3 bg-[#111] border border-zinc-800 rounded-lg p-3 px-4">
                  <Shield size={16} className="text-emerald-500/70" />
                  <span className="text-sm text-zinc-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="border-t border-zinc-800/50 pt-12 pb-8 scroll-mt-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-2">Ready to secure the perimeter?</h2>
            <p className="text-zinc-500">Currently based in Navi Mumbai, Maharashtra.</p>
          </div>
          <div className="flex flex-col gap-3 font-mono text-sm w-full md:w-auto">
            <a href="mailto:pratiklokhande.work@gmail.com" className="flex items-center justify-center md:justify-start gap-3 px-6 py-3 bg-[#111] border border-zinc-800 hover:border-emerald-500/40 rounded-lg transition-colors group">
              <Mail size={16} className="text-zinc-500 group-hover:text-emerald-400" />
              <span className="text-zinc-300">pratiklokhande.work@gmail.com</span>
            </a>
            <div className="flex gap-3">
              <a href="tel:+919527764813" className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-[#111] border border-zinc-800 hover:border-emerald-500/40 rounded-lg transition-colors group">
                <Phone size={16} className="text-zinc-500 group-hover:text-emerald-400" />
                <span className="text-zinc-300">+91 95277 64813</span>
              </a>
            </div>
          </div>
        </section>
        
        <div className="text-center mt-12 text-zinc-600 font-mono text-xs">
          <p>© {new Date().getFullYear()} Pratik Lokhande. All rights reserved.</p>
        </div>

      </main>
    </div>
  );
}