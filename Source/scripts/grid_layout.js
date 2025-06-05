
/**
* Creates a dynamic web page layout with a two-column structure,
* a responsive 3x3 grid, and tab-controlled content with animations.
*
* @param {object} config - The configuration object for the layout.
* @param {string} config.rootElementId - The ID of the HTML element where the layout will be rendered.
* @param {Array < object >} config.tabsData - An array of tab configuration objects.
* @param {string} config.tabsData[].id - Unique ID for the tab (e.g., 'tab1').
* @param {string} config.tabsData[].label - Text to display on the tab button.
* @param {string} config.tabsData[].title - Title to display in the grid column for this tab.
* @param {Array < object >} config.tabsData[].gridItems - An array of grid item objects for this tab.
* @param {string} config.tabsData[][].id - Unique ID for the grid item.
* @param {string} config.tabsData[][].content - The content to display inside the grid item.
* @param {string} config.tabsData[][].classes - CSS classes for styling and spanning the grid item.
* @param {string} config.initialTabId - The ID of the tab to display initially.
*/
function createDynamicLayout(config) {
    const rootElement = document.getElementById(config.rootElementId);
    if (!rootElement) {
        console.error(`Root element with ID '${config.rootElementId}' not found.`);
        return;
    }

    // Map tabsData array to an object for easier lookup by tab ID
    const tabContentMap = config.tabsData.reduce((acc, tab) => {
        acc[tab.id] = tab;
        return acc;
    }, {});

    let currentActiveTab = config.initialTabId;

    // HTML template string for the entire layout structure
    const layoutHtml = `
    <div class="container-fluid bg-white shadow-lg rounded-3 p-4 p-md-5 d-flex flex-column flex-lg-row gap-4" style="max-width: 1200px;">
        <div class="col-lg-8 bg-light p-4 rounded-3 border border-light-subtle d-flex flex-column">
            <h2 id="grid-title" class="fs-4 fw-bold text-dark mb-4 text-center"></h2>
            <div id="grid-container" class="custom-grid grid-transition grid-visible">
            </div>
        </div>

        <div class="col-lg-4 bg-light p-4 rounded-3 border border-light-subtle d-flex flex-column align-items-center justify-content-start">
            <h2 class="fs-5 fw-semibold text-dark mb-4">Select Content</h2>
            <div id="tab-buttons-container" class="d-flex flex-column gap-3 w-100">
            </div>
        </div>
    </div>
    `;

    // Inject the main layout structure into the root element
    rootElement.innerHTML = layoutHtml;

    // Get references to the elements AFTER they have been injected into the DOM
    const gridContainer = document.getElementById('grid-container');
    const gridTitle = document.getElementById('grid-title');
    const tabButtonsContainer = document.getElementById('tab-buttons-container');



    // Function to render the grid content based on the active tab
    function renderGrid(tabId) {
        const content = tabContentMap[tabId];
        if (!content) {
            console.error(`Content for tab ID '${tabId}' not found.`);
            return;
        }
        gridTitle.textContent = content.title;

        const gridItemsHtml = content.gridItems.map(item => `
    <div id="${item.id}" class="grid-item ${item.classes} text-gray-700">
        ${item.content}
    </div>
    `).join('');

        gridContainer.innerHTML = gridItemsHtml;
    }



    // Function to handle tab changes with animation
    function handleTabChange(tabId) {
        if (tabId === currentActiveTab) return;

        gridContainer.classList.remove('grid-visible');
        gridContainer.classList.add('grid-hidden');

        const tabButtons = tabButtonsContainer.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            if (button.dataset.tab === tabId) {
                button.classList.remove('btn-custom-inactive');
                button.classList.add('btn-custom-active');
            } else {
                button.classList.remove('btn-custom-active');
                button.classList.add('btn-custom-inactive');
            }
        });

        setTimeout(() => {
            renderGrid(tabId);
            currentActiveTab = tabId;
            gridContainer.classList.remove('grid-hidden');
            gridContainer.classList.add('grid-visible');
        }, 300);
    }



    // Function to create tab buttons dynamically
    function createTabButtons() {
        config.tabsData.forEach(tab => {
            const button = document.createElement('button');
            button.dataset.tab = tab.id;
            button.textContent = tab.label;
            button.classList.add('tab-button', 'btn', 'py-3', 'px-4', 'rounded-3', 'fw-semibold', 'transition-all', 'duration-300', 'ease-in-out');

            if (tab.id === currentActiveTab) {
                button.classList.add('btn-custom-active');
            } else {
                button.classList.add('btn-custom-inactive');
            }

            button.addEventListener('click', (event) => {
                handleTabChange(event.target.dataset.tab);
            });
            tabButtonsContainer.appendChild(button);
        });
    }

    // Initial calls
    createTabButtons();
    renderGrid(currentActiveTab);
}



// Example Usage:
document.addEventListener('DOMContentLoaded', () => {
    const myLayoutConfig = {
        rootElementId: 'app-root',
        tabsData: [
            {
                id: 'tab1',
                label: 'Tab 1 Content',
                title: 'Dynamic Content for Section One',
                gridItems: [
                    { id: 'item1-1', content: 'This is the first element for Tab 1, spanning all three columns and the first row.', classes: 'grid-col-span-3 grid-row-span-1 bg-blue-200' },
                    { id: 'item1-2', content: 'This is the second element for Tab 1, spanning the remaining rows in the first column.', classes: 'grid-col-span-1 grid-row-span-2 bg-green-200' },
                    { id: 'item1-3', content: 'This is the third element for Tab 1, spanning the remaining grid area.', classes: 'grid-col-span-2 grid-row-span-2 bg-yellow-200' },
                ],
            },
            {
                id: 'tab2',
                label: 'Tab 2 Details',
                title: 'Exploring Details in Section Two',
                gridItems: [
                    { id: 'item2-1', content: 'Welcome to Tab 2! This element covers the top section with specific details.', classes: 'grid-col-span-3 grid-row-span-1 bg-purple-200' },
                    { id: 'item2-2', content: 'Tab 2 specific content in the left vertical section, focusing on data points.', classes: 'grid-col-span-1 grid-row-span-2 bg-red-200' },
                    { id: 'item2-3', content: 'More comprehensive details for Tab 2 in the larger right section, including charts.', classes: 'grid-col-span-2 grid-row-span-2 bg-orange-200' },
                ],
            },
            {
                id: 'tab3',
                label: 'Tab 3 Features',
                title: 'Showcasing Features in Section Three',
                gridItems: [
                    { id: 'item3-1', content: 'Tab 3 introduces new concepts across the top, highlighting key features.', classes: 'grid-col-span-3 grid-row-span-1 bg-teal-200' },
                    { id: 'item3-2', content: 'Key information for Tab 3 in this narrow column, detailing specifications.', classes: 'grid-col-span-1 grid-row-span-2 bg-indigo-200' },
                    { id: 'item3-3', content: 'Comprehensive overview for Tab 3 in the main area, with user testimonials.', classes: 'grid-col-span-2 grid-row-span-2 bg-pink-200' },
                ],
            },
        ],
        initialTabId: 'tab1'
    };

    createDynamicLayout(myLayoutConfig);
});
