// Get references to the search input and results container
const searchInput = document.getElementById('navbar-search');
const searchResults = document.getElementById('navbar-search-results');

// Debounce: delays execution until user stops typing for `delay` ms
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

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

    const icon = item.type === 'menu' ? '🍽️' : '📄';
    div.innerHTML = `
      <span class="result-icon">${icon}</span>
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
        if (window.location.pathname.includes('menu.html')) {
          // Already on menu page - find and scroll to item
          const target = Array.from(document.querySelectorAll('.menu-item__name'))
            .find(el => el.textContent.trim() === item.name);

          if (target) {
            const menuItem = target.closest('.menu-item');
            menuItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Highlight briefly
            menuItem.style.backgroundColor = '#fffbeb';
            setTimeout(() => { menuItem.style.backgroundColor = ''; }, 2000);
          }
        } else {
          // Not on menu page - navigate there and store item to scroll to
          sessionStorage.setItem('scrollToItem', item.name);
          window.location.href = 'menu.html';
        }
      } else {
        // Regular page navigation
        window.location.href = item.link;
      }

      searchResults.style.display = 'none';
      searchInput.value = '';
    });

    searchResults.appendChild(div);
  });
}

// Listen for user input and update results in real time (debounced 300ms)
searchInput.addEventListener('input', debounce(() => {
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
    searchResults.innerHTML = '';
    const noResults = document.createElement('div');
    noResults.textContent = `No results found for "${query}"`;
    noResults.className = 'no-results-message';
    searchResults.appendChild(noResults);
    searchResults.style.display = 'block';
  }
}, 300));

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

// Handle scrolling to menu item after page navigation
window.addEventListener('load', () => {
  const itemToScroll = sessionStorage.getItem('scrollToItem');
  if (itemToScroll && window.location.pathname.includes('menu.html')) {
    const target = Array.from(document.querySelectorAll('.menu-item__name'))
      .find(el => el.textContent.trim() === itemToScroll);

    if (target) {
      setTimeout(() => {
        const menuItem = target.closest('.menu-item');
        menuItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        menuItem.style.backgroundColor = '#fffbeb';
        setTimeout(() => { menuItem.style.backgroundColor = ''; }, 2000);
      }, 500);
    }

    sessionStorage.removeItem('scrollToItem');
  }
});
