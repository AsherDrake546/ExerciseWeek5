// Get references to the search input and results container
const searchInput = document.getElementById('navbar-search');
const searchResults = document.getElementById('navbar-search-results');

// Filter searchData based on query matching name, description, or category/keywords
function filterSearch(query) {
  const q = query.toLowerCase();
  return searchData
    .filter(item =>
      item.name.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q))
    )
    .slice(0, 8); // Limit to top 8 results
}

// Display matching results in the dropdown
function displayResults(results) {
  searchResults.innerHTML = '';

  results.forEach(item => {
    const div = document.createElement('div');
    div.className = 'navbar__search-result-item';

    // Determine subtitle: category name for menu items, "Page" for pages
    const subtitle = item.type === 'menu'
      ? item.category
      : 'Page';

    div.innerHTML = `
      <span class="result-name">${item.name}</span>
      <span class="result-type">${subtitle}</span>
    `;

    // Apply hover styles inline to keep CSS changes minimal
    div.style.cssText = 'padding:0.55rem 1rem;cursor:pointer;display:flex;flex-direction:column;border-bottom:1px solid #f0f0f0;';
    div.addEventListener('mouseenter', () => { div.style.backgroundColor = '#f5f5f5'; });
    div.addEventListener('mouseleave', () => { div.style.backgroundColor = ''; });

    // Handle click: scroll to menu item on page, or navigate to page link
    div.addEventListener('click', () => {
      if (item.type === 'menu') {
        // If not on menu.html, navigate there first
        if (!window.location.pathname.includes('menu.html')) {
          window.location.href = 'menu.html';
        } else {
          // Find and scroll to the menu item on current page
          const menuItem = Array.from(document.querySelectorAll('.menu-item__name'))
            .find(el => el.textContent.trim() === item.name);

          if (menuItem) {
            const parent = menuItem.closest('.menu-item');

            // Scroll to the item smoothly
            parent.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Highlight the item briefly
            parent.style.backgroundColor = '#fff9e6';
            setTimeout(() => { parent.style.backgroundColor = ''; }, 2000);
          }
        }
      } else {
        // For pages, navigate normally
        window.location.href = item.link;
      }

      searchResults.style.display = 'none';
      searchInput.value = '';
    });

    searchResults.appendChild(div);
  });
}

// Listen for user input and update results in real time
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();

  if (query === '') {
    // Hide dropdown when input is empty
    searchResults.style.display = 'none';
    return;
  }

  const results = filterSearch(query);

  if (results.length > 0) {
    displayResults(results);
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
});

// Close results when clicking outside the search area
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = 'none';
  }
});

// Test logging: number of results and filtered arrays for sample queries
const testPollo = filterSearch('pollo');
console.log('Search test — "pollo":', testPollo.length, 'results', testPollo);
const testMenu = filterSearch('menu');
console.log('Search test — "menu":', testMenu.length, 'results', testMenu);
