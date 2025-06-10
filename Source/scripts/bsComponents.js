

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


//----------------------------

/**
 * Generates an HTML section with a split layout for business solutions,
 * styled using Bootstrap 5.3.x classes.
 * The layout can be customized to place the image on the left or right on larger screens.
 * On small mobile devices, the image will always be displayed on top.
 *
 * @param {object} options - Configuration options for the section.
 * @param {string} options.imageUrl - The URL for the business solution image.
 * @param {string} options.imageAlt - The alt text for the image.
 * @param {string} options.title - The main title for the section (e.g., "Business").
 * @param {string} options.subtitle - The subtitle for the section.
 * @param {string} options.description - The main descriptive text for the section.
 * @param {boolean} [options.imageOnRight=false] - If true, the image will be on the right for medium+ screens; otherwise, it will be on the left.
 * @returns {string} The generated HTML string.
 */
function generateSplitLayoutSection({ imageUrl, imageAlt, title, subtitle, description, imageOnRight = false }) {
    // Placeholder image for fallback if the provided URL is invalid or empty
    const placeholderImageUrl = `https://placehold.co/600x450/6C757D/FFFFFF?text=Placeholder+Image`;
    const finalImageUrl = imageUrl || placeholderImageUrl; // Use placeholder if imageUrl is empty

    let imageColumnHtml;
    let textColumnHtml;

    // On mobile, the image column will always be first (order-1)
    // On medium+ screens, order-md-1 or order-md-2 will apply based on imageOnRight
    if (imageOnRight) {
        // For desktop: Text then Image (text order-md-1, image order-md-2)
        imageColumnHtml = `
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center p-4 order-1 order-md-2">
                        <img src="${finalImageUrl}"
                             onerror="this.src='${placeholderImageUrl}'"
                             class="img-fluid rounded-3 w-auto mix-blend-multiply"
                             alt="${imageAlt}">
                    </div>
                `;
        textColumnHtml = `
                    <div class="col-12 col-md-6 d-flex flex-column justify-content-center p-4 order-2 order-md-1">
                        <h3 class="display-5 fw-bold text-gray-600 mb-2">${title}</h3>
                        <h4 class="fs-3 text-gray-600 mb-4">${subtitle}</h4>
                        <p class="lead text-secondary">${description}</p>
                    </div>
                `;
    } else {
        // For desktop: Image then Text (image order-md-1, text order-md-2 - or just default HTML order)
        imageColumnHtml = `
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center p-4 order-1 order-md-1">
                        <img src="${finalImageUrl}"
                             onerror="this.src='${placeholderImageUrl}'"
                             class="img-fluid rounded-3 w-auto mix-blend-multiply"
                             alt="${imageAlt}">
                    </div>
                `;
        textColumnHtml = `
                    <div class="col-12 col-md-6 d-flex flex-column justify-content-center p-4 order-2 order-md-2">
                        <h3 class="display-5 fw-bold text-gray-600 mb-2">${title}</h3>
                        <h4 class="fs-3 text-gray-600 mb-4">${subtitle}</h4>
                        <p class="lead text-secondary">${description}</p>
                    </div>
                `;
    }

    return `
                <div class="row g-md-5 align-items-center justify-content-between mb-10 bg-white rounded-4  overflow-hidden">
                    ${imageColumnHtml}
                    ${textColumnHtml}
                </div>
            `;
}


//----------------------------

/**
 * Generates the HTML string for a single carousel item.
 *
 * @param {string} backgroundImageUrl - The URL for the background image of the carousel item.
 * @param {string} itemTitle - The main title to display in the carousel item.
 * @param {string} itemDescription - The detailed description for the carousel item.
 * @returns {string} The complete HTML string for the carousel item.
 */
function bsCarouseItem_AiEcoSystem(backgroundImageUrl, itemTitle, itemDescription, isActive) {
    return `
    <div class="carousel-item rounded-3 ${isActive ? 'active' : ''}" 
        style="background-image: url('${backgroundImageUrl}') ">
        <div class="carousel-caption py-2 py-md-5 px-2 px-md-5 d-flex align-items-center">
            <div class="px-1 px-md-5 mx-0 mx-md-5"> 
                <h3 class="display-4 fw-bold md-3">${itemTitle}</h3>
                <p class="fs-5 fs-md-4">
                    ${itemDescription}
                </p>
            </div>
        </div>
    </div>
  `;
}

//----------------------------

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



/**
 * Populates a carousel with multiple items from an array of data objects
 * and inserts it into a specified HTML container element.
 *
 * @param {string} containerId - The ID of the HTML element where the carousel should be inserted.
 * @param {Array<Object>} itemsData - An array of objects, where each object
 * represents a carousel item and should have the following properties:
 * - `backgroundImageUrl`: (string) The URL for the item's background image.
 * - `itemTitle`: (string) The title of the carousel item.
 * - `itemDescription`: (string) The description of the carousel item.
 */
function populateCarouselItem_AiEcoSystem(containerId, itemsData) {
    // Get the container element using the provided ID
    const containerElement = document.getElementById(containerId);

    // Validate the container element and itemsData
    if (!containerElement) {
        console.error(`Error: Element with ID '${containerId}' not found.`);
        return;
    }
    if (!Array.isArray(itemsData) || itemsData.length === 0) {
        console.error("Input 'itemsData' must be a non-empty array.");
        return;
    }


    itemsData.forEach((item, index) => {
        // For the first item, add the 'active' class
        const isActive = index === 0 ? true : false;

        // Generate HTML for each item. The `activeClass` is directly applied here.
        let carouselItemsHTML = bsCarouseItem_AiEcoSystem(item.bgImg, item.title, item.description, isActive)


        // Insert the generated HTML into the specified container element
        containerElement.insertAdjacentHTML('beforeend', carouselItemsHTML);
    });


}


/**
        * Populates a given container with multiple split-layout sections.
        *
        * @param {string} containerId - The ID of the HTML element to populate.
        * @param {Array<object>} sectionsArray - An array of objects, where each object
        * contains the options for a single split-layout section (matching parameters
        * of generateSplitLayoutSection).
        */
function populateSplitLayoutSections(containerId, sectionsArray, alter = false) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    // Clear any existing content in the container before populating
    container.innerHTML = '';

    sectionsArray.forEach((sectionData, index) => {

        if ((index + 1) % 2 == 0) {
            sectionData = alter ? { ...sectionData, imageOnRight: true } : sectionData;
        }


        const sectionHtml = generateSplitLayoutSection(sectionData);

        container.insertAdjacentHTML('beforeend', sectionHtml);
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
        AiEcoSystem: populateCarouselItem_AiEcoSystem,
        Indicators: createCarouselIndicators
    },
    Layouts: {
        SplitLayout: populateSplitLayoutSections
    }
}