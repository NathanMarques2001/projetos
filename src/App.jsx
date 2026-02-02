import React, { useState, useEffect } from 'react';
import {
    Server,
    Database,
    Layout,
    Terminal,
    Cpu,
    Globe,
    Github,
    Linkedin,
    Mail,
    ChevronRight,
    Code2,
    Layers,
    Box,
    ExternalLink,
    Download,
    Menu,
    X
} from 'lucide-react';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dados dos projetos conforme briefing
    const projects = [
        {
            id: 1,
            title: "CSApp – Ecossistema Prolinx",
            category: "Full Stack",
            tech: ["Node.js", "React", "MySQL", "Azure AD", "Nginx"],
            description: "Solução corporativa completa composta por 3 módulos integrados (Front, Back e Serviço de Email).",
            details: "Arquitetura de microsserviços rodando em Oracle Linux com proxy reverso Nginx. Foco em segurança via Azure AD e alta disponibilidade.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            id: 2,
            title: "IDE Nyx & Compilador LC",
            category: "System",
            tech: ["JavaFX", "RichTextFX", "Assembly x86", "Compiladores"],
            description: "Ambiente de desenvolvimento integrado com compilador próprio embarcado para linguagem LC.",
            details: "Desenvolvimento low-level envolvendo análise léxica/sintática e geração de código Assembly. Demonstração profunda de teoria da computação aplicada.",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            id: 3,
            title: "API Chatbot Corporativo",
            category: "Backend",
            tech: ["Java 25", "Spring Boot 4", "Oracle DB", "Docker"],
            description: "API robusta para automação de atendimento e processamento de linguagem natural.",
            details: "Uso de features de ponta do Java 25 e conteinerização completa com Docker para deploy agnóstico de ambiente.",
            icon: <Server className="w-6 h-6" />
        },
        {
            id: 4,
            title: "Movie Match + NLP",
            category: "Full Stack",
            tech: ["PHP 8", "MVC Custom", "PHP-ML", "TensorFlow"],
            description: "Plataforma de recomendação de filmes utilizando Machine Learning e arquitetura MVC própria.",
            details: "Implementação de arquitetura MVC sem frameworks prontos para otimização de performance e integração com bibliotecas de ML.",
            icon: <Database className="w-6 h-6" />
        },
        {
            id: 5,
            title: "Britaldo Estoque",
            category: "Frontend",
            tech: ["React", "Vite", "Firebase", "Tailwind"],
            description: "Sistema de gestão de inventário em tempo real para o setor educacional.",
            details: "SPA de alta performance com sincronização em tempo real via Firestore e autenticação segura.",
            icon: <Layout className="w-6 h-6" />
        },
        {
            id: 6,
            title: "WAS Desktop System",
            category: "System",
            tech: ["Java 17", "Swing", "DevOps", "Auto-Update"],
            description: "Aplicação Desktop com sistema proprietário de atualização automática e deploy contínuo.",
            details: "Foco na experiência do usuário desktop e ciclo de vida do software (DevOps) para distribuição de patches.",
            icon: <Box className="w-6 h-6" />
        }
    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()) || (activeTab === 'system' && (p.category === 'System' || p.category === 'Backend')));

    return (
        <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-blue-500/30">

            {/* Navigation / Header */}
            <nav className="fixed w-full z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
                        <Terminal className="text-blue-500" size={20} />
                        NATHAN<span className="text-slate-600">MARQUES</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
                        <a href="#stack" className="hover:text-blue-400 transition-colors">Tech Stack</a>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projetos</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#0B0F19] border-b border-slate-800 px-6 py-4 space-y-4 shadow-xl animate-in slide-in-from-top-5 duration-200">
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors py-2 border-b border-slate-800/50">Sobre</a>
                        <a href="#stack" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors py-2 border-b border-slate-800/50">Tech Stack</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors py-2 border-b border-slate-800/50">Projetos</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors py-2">Contato</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-12 md:pb-20 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wide">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            AVAILABLE FOR NEW PROJECTS
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Construo sistemas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">escalam.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
                            Desenvolvedor Full Stack especializado em arquitetura de software, infraestrutura cloud e soluções de alta complexidade. De servidores Linux a interfaces React modernas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                                Ver Projetos <ChevronRight size={18} />
                            </a>
                            <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                                <Download size={18} /> Download CV
                            </button>
                        </div>
                    </div>

                    {/* Abstract Tech Visual */}
                    <div className="flex-1 w-full max-w-md relative mt-8 md:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-3xl opacity-20"></div>
                        <div className="relative bg-[#111827] border border-slate-800 p-6 rounded-2xl font-mono text-xs sm:text-sm shadow-2xl overflow-x-auto">
                            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="space-y-2 text-slate-400 whitespace-nowrap">
                                <div className="flex"><span className="text-blue-400 mr-2">const</span> <span className="text-yellow-200">developer</span> = <span className="text-purple-400">{`{`}</span></div>
                                <div className="pl-4">name: <span className="text-green-400">'Nathan Marques'</span>,</div>
                                <div className="pl-4">role: <span className="text-green-400">'Full Stack Engineer'</span>,</div>
                                <div className="pl-4">stack: [<span className="text-green-400">'Node'</span>, <span className="text-green-400">'Java'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'Docker'</span>],</div>
                                <div className="pl-4">architecture: <span className="text-blue-400">true</span>,</div>
                                <div className="pl-4">focus: <span className="text-green-400">'High Performance Systems'</span></div>
                                <div className="flex"><span className="text-purple-400">{`}`}</span>;</div>
                                <div className="mt-4 text-slate-500">// Ready to deploy...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Summary Bar */}
            <div className="border-y border-slate-800 bg-[#0F172A]/50">
                <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">
                            {new Date().getFullYear() - 2023}+
                        </div>
                        <div className="text-xs md:text-sm text-slate-500 font-mono mt-1">ANOS DE EXPERIÊNCIA</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">Full Cycle</div>
                        <div className="text-xs md:text-sm text-slate-500 font-mono mt-1">DEV & DEPLOY</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">Backend</div>
                        <div className="text-xs md:text-sm text-slate-500 font-mono mt-1">JAVA & NODE POWERHOUSE</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">System</div>
                        <div className="text-xs md:text-sm text-slate-500 font-mono mt-1">ARQUITETURA & INFRA</div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-16 md:py-20 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Sobre Mim</h2>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                    Desenvolvedor Full Stack com forte viés em Engenharia de Software. Diferente do padrão de mercado, minha base técnica me permite transitar de aplicações web modernas a compiladores e otimizações de baixo nível.
                    <br /><br />
                    Meu foco é entregar valor através de código limpo e infraestrutura sólida. Experiência real com deploy em ambientes complexos (Oracle Linux, Azure), microsserviços e integração de APIs críticas. Busco desafios onde a performance e a arquitetura sejam tão importantes quanto a interface.
                </p>
            </section>

            {/* Tech Stack */}
            <section id="stack" className="py-16 md:py-20 px-6 bg-[#0E1320]">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Backend Card */}
                        <div className="bg-[#161F32] p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Server className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Backend & Core</h3>
                            <ul className="space-y-2 text-slate-400 text-sm md:text-base">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Java (17, 21, 25) + Spring Boot</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Node.js (API Rest)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>PHP 8 + Custom MVC</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Python (TensorFlow/NLP)</li>
                            </ul>
                        </div>

                        {/* Infra Card */}
                        <div className="bg-[#161F32] p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                            <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Infra & DevOps</h3>
                            <ul className="space-y-2 text-slate-400 text-sm md:text-base">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Docker & Containerization</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Oracle Linux / Ubuntu Server</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Nginx (Reverse Proxy)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Azure Cloud Services</li>
                            </ul>
                        </div>

                        {/* Frontend Card */}
                        <div className="bg-[#161F32] p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layout className="text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Frontend & Interface</h3>
                            <ul className="space-y-2 text-slate-400 text-sm md:text-base">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>React.js & Vite</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>JavaFX (Desktop UI)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Tailwind CSS</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Responsividade Mobile-First</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Projetos Selecionados</h2>
                        <p className="text-slate-400 mt-2">Casos reais que demonstram profundidade técnica.</p>
                    </div>

                    <div className="flex flex-wrap bg-[#161F32] p-1 rounded-lg self-start">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setActiveTab('system')}
                            className={`flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'system' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Sistemas
                        </button>
                        <button
                            onClick={() => setActiveTab('frontend')}
                            className={`flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'frontend' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Full Stack
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-[#161F32] border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all group flex flex-col h-full">
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-slate-800 rounded-lg text-slate-300">
                                        {project.icon}
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-800/50">
                                    <p className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">Destaque Técnico</p>
                                    <p className="text-slate-300 text-sm">{project.details}</p>
                                </div>
                            </div>

                            <div className="bg-[#0f1522] px-6 py-4 flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="border-t border-slate-800 bg-[#0B0F19] py-16 md:py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Pronto para o próximo nível?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto text-base md:text-lg">
                        Estou disponível para projetos que exijam arquitetura sólida e implementação meticulosa. Vamos discutir como posso agregar valor ao seu time.
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        <a href="https://github.com/NathanMarques2001" target="_blank" className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-marques-1a7818244" target="_blank" className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:[nathanbrandao1@gmail.com]" target="_blank" className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="text-slate-600 text-sm font-mono">
                        © {new Date().getFullYear()} Nathan Marques. Built with React & Tailwind.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
