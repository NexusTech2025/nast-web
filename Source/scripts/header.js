function createNavbar(config) {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) {
        console.error('Navbar container element not found.');
        return;
    }

    let navbarHTML = `
        <nav class="navbar navbar-expand-lg">
            <div class="container gap-3">
                <h1 class="m-0" style='font-size:50px; 
                    font-family: inter;'>
                <a class='text-decoration-none' href='${config.logo.homeRef}' alt='${config.logo.alt}'>NAST</a>    
                </h1>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-4 d-flex">
    `;

    config.navItems.forEach(item => {
        if (item.type === 'dropdown') {
            navbarHTML += `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="${item.id}" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        ${item.label}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="${item.id}">
            `;
            item.dropdownLinks.forEach(link => {
                navbarHTML += `
                    <li><a class="dropdown-item" href="${link.href}">${link.label}</a></li>
                `;
            });
            navbarHTML += `
                    </ul>
                </li>
            `;
        } else if (item.type === 'button') {
            navbarHTML += `
                <li class="nav-item">
                    <a class="nav-link btn ${item.buttonStyle} rounded-pill" href="${item.href}">${item.label}</a>
                </li>
            `;
        }
        else {
            navbarHTML += `
                <li class="nav-item">
                    <a class="nav-link" href="${item.href}">${item.label}</a>
                </li>
            `;
        }
    });

    navbarHTML += `
                    </ul>
                </div>
            </div>
        </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;
    // Add Bootstrap JS for dropdown functionality

}


//============================================================//

let BASE_URL = "http://127.0.0.1:5550"


let href_location = window.location.href;
if (href_location.startsWith("https://nexustech2025.github.io/nast-web/")) {
    BASE_URL = "https://nexustech2025.github.io/nast-web"
}



const PLATFORMS = BASE_URL + "/Source/platforms"
const SOLUTIONS = BASE_URL + "/Source/solutions"
const LEARN = BASE_URL + "/Source/learn"

const navbarConfig = {
    backgroundColor: 'rgb(246, 246, 246)',
    logo: {
        homeRef: BASE_URL + "/index.html",
        src: 'https://datatron.com/wp-content/uploads/2021/10/logo.svg',
        alt: 'Datatron Logo'
    },
    navItems: [
        {
            type: 'dropdown',
            id: 'platformsDropdown',
            label: 'PLATFORMS',
            dropdownLinks: [
                // { href: PLATFORMS + '/MLOPS.html', label: 'MLOPS' },
                { href: PLATFORMS + '/Web & Mobile Development.html', label: 'Web & Mobile Development' },
                { href: PLATFORMS + '/Data Analysis.html', label: 'Data Analysis' },
                { href: PLATFORMS + '/MODEL & MONITORING.html', label: 'AI Model & Monitoring' },
                // { href: PLATFORMS + '/HOW ITS WORKS.html', label: 'HOW ITS WORKS' },

            ]
        },
        {
            type: 'dropdown',
            id: 'solutionsDropdown',
            label: 'SOLUTIONS',
            dropdownLinks: [
                { href: SOLUTIONS + '/education.html', label: 'Education' },
                { href: SOLUTIONS + '/business.html', label: 'Business' },
                { href: SOLUTIONS + '/e-commerce.html', label: 'E Commerce' },
                { href: SOLUTIONS + '/healthcare.html', label: 'Healthcare' },
            ]
        },
        // {
        //     type: 'dropdown',
        //     id: 'learnDropdown',
        //     label: 'LEARN',
        //     dropdownLinks: [
        //         { href: './MOPS & AI GOVERENCE', label: 'MLOPS & AI GOVERENCE' },
        //         { href: './EVENTS.HTML', label: 'EVENTS' },
        //         { href: './WEBINAR', label: 'WEBINAR' },
        //         { href: './WHITE PAPERS.HTML', label: 'WHITE PAPERS' },
        //         { href: './BLOGS.HTML', label: 'BLOGS' }
        //     ]
        // },
        {
            type: 'dropdown',
            id: 'companyDropdown',
            label: 'COMPANY',
            dropdownLinks: [
                { href: './ABOUT.HTML', label: 'About Us' },
                { href: './TEAM.HTML', label: 'Team' },
                { href: './CAREERS.HTML', label: 'Careers' }
            ]
        },
        {
            type: 'button',
            label: 'CONTACT US',
            href: '#',
            buttonStyle: 'btn-outline-secondary'
        }
    ]
};
