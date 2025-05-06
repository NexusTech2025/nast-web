function createNavbar(config) {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) {
        console.error('Navbar container element not found.');
        return;
    }

    let navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container gap-3" style="background-color: ${config.backgroundColor};">
                <a class="navbar-brand" href="#">
                    <img src="${config.logo.src}" alt="${config.logo.alt}">
                </a>
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
const navbarConfig = {
    backgroundColor: 'rgb(246, 246, 246)',
    logo: {
        src: 'https://datatron.com/wp-content/uploads/2021/10/logo.svg',
        alt: 'Datatron Logo'
    },
    navItems: [
        {
            type: 'dropdown',
            id: 'platformsDropdown',
            label: 'PLATFORMS',
            dropdownLinks: [
                { href: './MLOPS.html', label: 'MLOPS' },
                { href: './AI MODEL MONOTERING & AI GOVERENCE.html', label: 'AI MODEL MONOTERING & AI GOVERENCE' },
                { href: './ENTERPRICE.html', label: 'ENTRRPRICE-READY' },
                { href: './HOW ITS WORKS.html', label: 'HOW ITS WORKS' },
                { href: '#', label: 'My Link Test' }
            ]
        },
        {
            type: 'dropdown',
            id: 'solutionsDropdown',
            label: 'SOLUTIONS',
            dropdownLinks: [
                { href: './BUSSINESS EDUCATIVE.HTML', label: 'BUSINESS-EDUCATIVE' },
                { href: './DATA SCEINTIST.HTML', label: 'DATA SCEINTIST' },
                { href: './ENGINEERING & DEVELOP.HTML', label: 'ENGINEERING & DEVLOP' }
            ]
        },
        {
            type: 'dropdown',
            id: 'learnDropdown',
            label: 'LEARN',
            dropdownLinks: [
                { href: './MOPS & AI GOVERENCE', label: 'MLOPS & AI GOVERENCE' },
                { href: './EVENTS.HTML', label: 'EVENTS' },
                { href: './WEBINAR', label: 'WEBINAR' },
                { href: './WHITE PAPERS.HTML', label: 'WHITE PAPERS' },
                { href: './BLOGS.HTML', label: 'BLOGS' }
            ]
        },
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
