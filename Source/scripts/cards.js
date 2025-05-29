/**
 * Generates and appends glassy cards to a specified container using an HTML template string.
 * @param {Array<Object>} cardData - An array of objects, each representing a card.
 * @param {string} containerId - The ID of the HTML element where cards will be appended.
 */
function createGlassyCards(cardData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    cardData.forEach(card => {
        let iconHtml = '';
        // Determine the HTML for the icon based on its type
        if (card.iconType === 'svg') {
            iconHtml = card.iconContent; // SVG string
        } else if (card.iconType === 'img') {
            // Include onerror for fallback image
            iconHtml = `<img class="${card.imgClass} icon-logo" src="${card.iconContent}" alt="${card.title} icon" onerror="this.onerror=null;this.src='https://placehold.co/48x48/cccccc/ffffff?text=Icon'">`;
        } else if (card.iconType === 'i' || card.iconType === 'span') {
            iconHtml = `<${card.iconType} class="${card.iconContent}"></${card.iconType}>`;
        } else {
            console.warn(`Unsupported iconType: ${card.iconType}. Skipping icon for card: ${card.title}`);
        }

        // Construct the full card HTML using a template literal
        const cardHtml = `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center mb-4">
                            <div class="glassy-bg-filter">
                                <input type="checkbox" class="card-toggle d-none" id="toggle-${card.title.replace(/\s+/g, '-')}">
                                <div class="glassy-card-enhanced p-4 rounded-xl w-100 mx-auto hover-lift-shadow text-center" id="card-${card.title.replace(/\s+/g, '-')}">
                                    <div class="card-icon mb-3">
                                        ${iconHtml}
                                    </div>
                                    <h4 class="card-title mb-2 fw-semibold">${card.title}</h4>
                                    <p class="card-subtitle mb-2">${card.subtitle}</p>

                                    
                                    
                                    ${card.text ? `
                                    <label for="toggle-${card.title.replace(/\s+/g, '-')}" class="see-more-btn mt-2 btn btn-sm btn-outline-primary">See more</label>
                                    <div class="card-extra-text sub-lead">
                                        <div class="extra-content mt-3">
                                            <p>${card.text}</p>
                                            <label for="toggle-${card.title.replace(/\s+/g, '-')}" class="btn btn-sm btn-outline-secondary">See less</label>
                                        </div>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `;


        // Append the created HTML string to the container
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ============================================================ //

/**
 * Generates and appends simple glassy cards (icon and title only) to a specified container.
 * @param {Array<Object>} cardData - An array of objects, each representing a card.
 * @param {string} containerId - The ID of the HTML element where cards will be appended.
 */
function glassyCardsInline(cardData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    cardData.forEach(card => {
        let iconHtml = '';
        // Determine the HTML for the icon based on its type
        if (card.iconType === 'svg') {
            iconHtml = card.iconContent; // SVG string
        } else if (card.iconType === 'img') {
            // Include onerror for fallback image
            iconHtml = `<img src="${card.iconContent}" alt="${card.title} icon" onerror="this.onerror=null;this.src='https://placehold.co/48x48/cccccc/ffffff?text=Icon'">`;
        } else if (card.iconType === 'i' || card.iconType === 'span') {
            iconHtml = `<${card.iconType} class="${card.iconContent}"></${card.iconType}>`;
        } else {
            console.warn(`Unsupported iconType: ${card.iconType}. Skipping icon for card: ${card.title}`);
        }

        // Construct the full card HTML using a template literal for the simple card
        const cardHtml = `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <div class="glassy-bg-filter column-gap-3 glassy-card-inline px-3 py-2 rounded-xl w-100 mx-auto hover-lift-shadow text-center">
                            <div class="card-icon">
                                ${iconHtml} 
                            </div>
                            <h4 class="card-title-simple mb-0 fw-semibold">${card.title}</h4>
                        </div>
                    </div>
                `;

        // Append the created HTML string to the container
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}



// ================= Owl Carousel Item Card ================= //

/**
 * Generates the HTML string for an Owl Carousel item with dynamic icon type.
 *
 * @param {object} itemData - An object containing all necessary information for the carousel item.
 * @param {string} itemData.iconType - The type of icon element to use ('i', 'span', or 'img').
 * @param {string} itemData.iconContent - The content for the icon (class name for 'i'/'span', src for 'img').
 * @param {string} itemData.title - The main title for the carousel item.
 * @param {string} itemData.subtitle - The subtitle/paragraph text for the carousel item.
 * @returns {string} The HTML string representing an Owl Carousel item.
 */
function createOwlCarouselItemHtml({ iconType, iconContent, title, subtitle }) {
    let iconHtml = '';

    // Determine the HTML for the icon based on iconType
    if (iconType === 'i') {
        // For <i>, iconContent is expected to be a class name (e.g., "fas fa-star" for Font Awesome)
        // Added Bootstrap classes for styling: display-4 for size, mb-3 for margin-bottom, text-primary for color.
        iconHtml = `<i class="${iconContent} display-4 mb-3 text-primary"></i>`;
    } else if (iconType === 'span') {
        // For <span>, iconContent is expected to be a class name (e.g., "bi bi-house" for Bootstrap Icons)
        // Added Bootstrap classes for styling: display-4 for size, mb-3 for margin-bottom, text-primary for color.
        iconHtml = `<span class="${iconContent} display-4 mb-3 text-primary"></span>`;
    } else if (iconType === 'img') {
        // For <img>, iconContent is expected to be the image source URL
        // Added img-fluid for responsiveness and max-width for consistent sizing.
        iconHtml = `<img src="${iconContent}" alt="icon" class="img-fluid mb-3 icon-logo">`;
    } else {
        // Log a warning if an unsupported iconType is provided
        console.warn(`Unsupported iconType: ${iconType}. No icon will be rendered.`);
    }

    // Use a template literal to construct the HTML string based on the provided Owl Carousel item template.
    // The dynamically generated icon HTML is inserted before the title.
    return `
    <div class="item">
        <div class="card glassy-bg-filter shadow rounded-4 h-100 border-0">
            <div class="card-body p-4 text-center">
                <div class="d-flex justify-content-center mb-4"">
                    ${iconHtml}
                </div>
                <h2 class="h4 fw-semibold text-gray-700 mb-3">${title}</h2>
                <p class="sub-lead lh-base">
                    ${subtitle}
                </p>
            </div>
        </div>
    </div>
  `;
}


// ================== Owl Carousel Population Function ================== //


/**
 * Populates a target container element with Owl Carousel items generated from an array of data objects.
 * Each item's HTML is inserted using insertAdjacentHTML.
 *
 * @param {string} containerId - The ID of the target container element (e.g., a div with class 'owl-carousel').
 * @param {Array<object>} itemsData - An array of objects, where each object contains the data
 * for a single Owl Carousel item (iconType, iconContent, title, subtitle).
 */
function populateOwlCarouselItems(containerId, itemsData) {
    const containerElement = document.getElementById(containerId);

    if (!containerElement) {
        console.error(`Container element with ID "${containerId}" not found.`);
        return;
    }

    if (!Array.isArray(itemsData) || itemsData.length === 0) {
        console.warn("No items data provided or itemsData is empty.");
        return;
    }

    // Clear existing content in the container before populating
    containerElement.innerHTML = '';

    // Iterate over the itemsData array and append each generated item HTML
    itemsData.forEach(item => {
        const itemHtml = createOwlCarouselItemHtml(item);
        containerElement.insertAdjacentHTML('beforeend', itemHtml);
    });
}


function initOwlCarousel(itemsData, containerId) {

    $(document).ready(function () {

        populateOwlCarouselItems(
            containerId,
            itemsData
        );

        $(`#${containerId}`).owlCarousel({
            loop: true, // Loop the items
            margin: 10, // Space between items
            nav: true, // Show navigation buttons
            dots: true, // Show pagination dots
            responsive: {
                0: {
                    items: 1 // 1 item on extra small devices (mobile)
                },
                576: { // Bootstrap's sm breakpoint
                    items: 2 // 2 items on small devices
                },
                768: { // Bootstrap's md breakpoint
                    items: 2 // 2 items on medium devices
                },
                992: { // Bootstrap's lg breakpoint
                    items: 2 // 3 items on large devices
                },
                1200: { // Bootstrap's xl breakpoint
                    items: 3 // 3 items on extra large devices
                }
            }
        });
    });

}