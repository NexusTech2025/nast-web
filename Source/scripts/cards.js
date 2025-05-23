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
            iconHtml = `<img class="${card.imgClass}" src="${card.iconContent}" alt="${card.title} icon" onerror="this.onerror=null;this.src='https://placehold.co/48x48/cccccc/ffffff?text=Icon'">`;
        } else if (card.iconType === 'i' || card.iconType === 'span') {
            iconHtml = `<${card.iconType} class="${card.iconContent}"></${card.iconType}>`;
        } else {
            console.warn(`Unsupported iconType: ${card.iconType}. Skipping icon for card: ${card.title}`);
        }

        // Construct the full card HTML using a template literal
        const cardHtml = `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
                        <div class="glassy-card-enhanced p-4 rounded-xl w-100 mx-auto hover-lift-shadow text-center">
                            <div class="card-icon mb-3">
                                ${iconHtml}
                            </div>
                            <h4 class="card-title mb-2 fw-semibold">${card.title}</h4>
                            <p class="card-subtitle mb-0">${card.subtitle}</p>
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