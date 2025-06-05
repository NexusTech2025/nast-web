

// ======================= Bootstrap Carousel Item Function ======================= //

/**
 * Generates the HTML string for a Bootstrap carousel item.
 *
 * @param {string} title - The title for the carousel item.
 * @param {string} paragraph - The main paragraph text for the carousel item.
 * @param {string} imageSrc - The source URL for the image in the carousel item.
 * @param {boolean} active - Whether this carousel item should be active.
 * @returns {string} The HTML string representing a Bootstrap carousel item.
 */
function bsCarouseItem_DeveloperChallenges(title, paragraph, imageSrc, active) {
    // Use a template literal to construct the HTML string.
    // Bootstrap 5.3.x classes are used for styling, ensuring responsiveness and modern aesthetics.
    // The image has rounded corners, a shadow, and a mix-blend-multiply effect for visual appeal.
    return `
    <div class="carousel-item ${active ? 'active' : ''}">
        <div class="row align-items-center justify-content-center py-1 px-2 py-md-4  g-4">
            <div class="col-12 col-md-6 order-2 order-md-1">
                <h2 class="display-5 fw-bold text-gray-600 mb-3">${title}</h2>
                <p class="fs-5 text-secondary lh-base">
                    ${paragraph}
                </p>
            </div>
            <div class="col-12 col-md-6 order-1 order-md-2">
                <img class="img-fluid img-h-400 w-auto rounded-3 mix-blend-multiply object-fit-cover"
                    
                     src="${imageSrc}"
                     alt="${title} image">
            </div>
        </div>
    </div>
  `;
}


// ======================= Carousel Population Function ======================= // 


/**
 * Populates a carousel container with items generated from an array of data objects.
 * The first item in the array will automatically be set as 'active'.
 *
 * @param {HTMLElement} containerElement - The DOM element (e.g., the .carousel-inner) where the carousel items will be appended.
 * @param {Array<Object>} itemsData - An array of objects, where each object contains:
 * - {string} title: The title for the carousel item.
 * - {string} paragraph: The main paragraph text for the carousel item.
 * - {string} imageSrc: The source URL for the image in the carousel item.
 */
function populateCarouselItem_DevChallenges(containerId, itemsData) {

    const containerElement = document.getElementById(containerId);

    if (!containerElement || !itemsData || !Array.isArray(itemsData)) {
        console.error("Invalid container element or items data provided.");
        return;
    }

    containerElement.innerHTML = ''; // Clear existing content before populating

    itemsData.forEach((item, index) => {
        // Generate the HTML string for the carousel item.
        // The 'active' class is now passed directly to the bsCarouseItem_DeveloperChallenges function
        // for cleaner HTML generation.
        const itemHtml = bsCarouseItem_DeveloperChallenges(item.title, item.paragraph, item.imageSrc, index === 0);

        // Use insertAdjacentHTML for more efficient DOM manipulation.
        // 'beforeend' inserts the HTML string as the last child of the containerElement.
        containerElement.insertAdjacentHTML('beforeend', itemHtml);
    });
}


// ======================= Carousel Indicators Function ======================= //

/**
 * Generates the HTML string for Bootstrap carousel indicator buttons.
 *
 * @param {string} carouselTargetId - The ID of the carousel that these indicators control (e.g., "DataAnalysisToolsCarousel").
 * @param {number} numberOfSlides - The total number of slides in the carousel.
 * @returns {string} The HTML string representing the carousel indicator buttons.
 */
function createCarouselIndicators(carouselTargetId, numberOfSlides) {

    const carouselIndicator = document.getElementById(carouselTargetId);

    if (typeof numberOfSlides !== 'number' || numberOfSlides <= 0) {
        console.error("Invalid number of slides provided for carousel indicators.");
        return '';
    }

    let indicatorsHtml = '';
    for (let i = 0; i < numberOfSlides; i++) {
        // Determine if the current indicator should be active
        const isActive = i === 0;
        const activeClass = isActive ? 'active' : '';
        const ariaCurrent = isActive ? 'true' : 'false'; // Bootstrap recommends 'false' for inactive

        indicatorsHtml += `
      <button type="button"
              data-bs-target="#${carouselTargetId}"
              data-bs-slide-to="${i}"
              class="${activeClass}"
              aria-current="${ariaCurrent}"
              aria-label="Slide ${i + 1}"></button>
    `;
    }

    carouselIndicator.insertAdjacentHTML('beforeend', indicatorsHtml);
}



// Export the functions for use in other modules or scripts.
const BSComponents = {
    BSCarousel: {
        DevChallenges: populateCarouselItem_DevChallenges,
        Indicators: createCarouselIndicators
    }
}