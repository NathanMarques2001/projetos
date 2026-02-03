// Project Data
const projects = [
    {
        id: 1,
        title: "CSApp – Ecossistema Prolinx",
        category: "Full Stack",
        tech: ["Node.js", "React", "MySQL", "Azure AD", "Nginx"],
        description: "Solução corporativa completa composta por 3 módulos integrados (Front, Back e Serviço de Email).",
        details: "Arquitetura de microsserviços rodando em Oracle Linux com proxy reverso Nginx. Foco em segurança via Azure AD e alta disponibilidade.",
        icon: "globe"
    },
    {
        id: 2,
        title: "Britaldo Estoque",
        category: "Full Stack",
        tech: ["React", "Vite", "Firebase", "Tailwind"],
        description: "Sistema de gestão de inventário em tempo real para o setor educacional.",
        details: "SPA de alta performance com sincronização em tempo real via Firestore e autenticação segura.",
        icon: "layout"
    },
    {
        id: 3,
        title: "Movie Match + NLP",
        category: "Full Stack",
        tech: ["PHP 8", "MVC Custom", "PHP-ML", "TensorFlow"],
        description: "Plataforma de recomendação de filmes utilizando Machine Learning e arquitetura MVC própria.",
        details: "Implementação de arquitetura MVC sem frameworks prontos para otimização de performance e integração com bibliotecas de ML.",
        icon: "database"
    },
    {
        id: 4,
        title: "API Chatbot Corporativo",
        category: "Backend",
        tech: ["Java 25", "Spring Boot 4", "Oracle DB", "Docker"],
        description: "API robusta para automação de atendimento e integração com chatbot.",
        details: "Uso de features de ponta do Java 25 e conteinerização completa com Docker para deploy agnóstico de ambiente.",
        icon: "server"
    },
    {
        id: 5,
        title: "WAS Desktop System",
        category: "System",
        tech: ["Java 17", "Swing", "DevOps", "Auto-Update"],
        description: "Aplicação Desktop com sistema proprietário de atualização automática e deploy contínuo.",
        details: "Foco na experiência do usuário desktop e ciclo de vida do software (DevOps) para distribuição de patches.",
        icon: "box"
    },
    {
        id: 6,
        title: "IDE Nyx & Compilador LC",
        category: "System",
        tech: ["JavaFX", "RichTextFX", "Assembly x86", "Compiladores"],
        description: "Ambiente de desenvolvimento integrado com compilador próprio embarcado para linguagem LC.",
        details: "Desenvolvimento low-level envolvendo análise léxica/sintática e geração de código Assembly. Demonstração profunda de teoria da computação aplicada.",
        icon: "cpu"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initial Render
renderProjects('all');

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        console.log('Filtering by:', filterValue);

        // Render projects
        renderProjects(filterValue);
    });
});

function renderProjects(filter) {
    // Clear grid
    projectsGrid.innerHTML = '';

    // Filter projects
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => {
            if (filter === 'system') {
                return p.category === 'System' || p.category === 'Backend';
            } else if (filter === 'fullstack') {
                return p.category === 'Full Stack';
            }
        });

    // Generate HTML
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card group'; // Added group for hover effects if needed

        const techStackHtml = project.tech.map(t =>
            `<span class="tech-tag">${t}</span>`
        ).join('');

        card.innerHTML = `
            <div class="card-body">
                <div class="card-header">
                    <div class="project-icon-wrapper">
                        <i data-lucide="${project.icon}"></i>
                    </div>
                </div>
                
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                
                <div class="project-details">
                    <p class="detail-label">Destaque Técnico</p>
                    <p class="detail-text">${project.details}</p>
                </div>
            </div>
            
            <div class="card-footer">
                ${techStackHtml}
            </div>
        `;

        projectsGrid.appendChild(card);
    });

    // Re-initialize icons for new elements
    if (window.lucide) {
        lucide.createIcons();
    }
}
