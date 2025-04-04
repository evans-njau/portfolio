const projects = [
    {
        title: "UNIFETE",
        description: "Full-stack community uniting app with Laravel and Blade",
        link: "#",
        technologies: ["Laravel", "Mysql", "Blade", "Boostrap"]
    },
    {
        title: "Ndengu App",
        description: "A community driven e-community which supports the poor.",
        link: "#",
        technologies: ["PHP", "JavaScript", "Boostrap", "SMTP", "HTML"]
    },
    {
        title: "Portfolio Website",
        description: "Fully responsive personal portfolio",
        link: "#",
        technologies: ["HTML", "CSS", "JavaScript", "Boostrap"]
    }
];

const techBadgeColors = {
    "HTML": "badge-html",
    "Laravel": "badge-laravel",
    "Mysql": "badge-mysql",
    "Boostrap": "badge-Boostrap",
    "PHP": "badge-PHP",
    "SMTP": "badge-smtp",
    "Blade": "badge-blade",
    "CSS": "badge-css",
    "JavaScript": "badge-js"
};

function generateProjectCards() {
    const container = document.getElementById('projects-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 mb-4';
        card.innerHTML = `
            <div class="card project-card text-center h-100 p-3">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text p-1">${project.description}</p>
                <div class="mb-3">
                    ${project.technologies.map(tech => 
                        `<span class="badge skill-badge ${techBadgeColors[tech] || 'badge-secondary'}">${tech}</span>`
                    ).join('')}
                </div>
            </div>`;
        container.appendChild(card);
    });
}

window.onload = generateProjectCards;