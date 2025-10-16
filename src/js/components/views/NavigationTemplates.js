export function renderNavigation(items, currentView, expandedDropdowns, currentSubItem) {
  return items
    .sort((a, b) => a.order - b.order)
    .map(item => renderNavigationItem(item, currentView, expandedDropdowns, currentSubItem))
    .join('');
}

function renderNavigationItem(item, currentView, expandedDropdowns, currentSubItem) {
  if (item.type === 'dropdown') {
    return renderDropdownItem(item, currentView, expandedDropdowns, currentSubItem);
  }
  return renderSimpleItem(item, currentView);
}

function renderSimpleItem(item, currentView) {
  const isActive = currentView === item.id;
  const activeClass = isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
  return `
    <button
      class="nav-item w-full text-left p-3 rounded-lg transition-colors duration-200 ${activeClass}"
      data-view="${item.id}"
      title="${item.description}"
      aria-label="${item.label} - ${item.description}"
      aria-current="${isActive ? 'page' : 'false'}"
      role="menuitem"
    >
      <div class="flex items-center space-x-3">
        <i class="${item.icon} text-lg"></i>
        <div class="flex-1">
          <div class="font-semibold">${item.label}</div>
          <div class="text-xs opacity-75">${item.description}</div>
        </div>
        ${isActive ? '<i class="fas fa-chevron-right text-sm"></i>' : ''}
      </div>
    </button>
  `;
}

function renderDropdownItem(item, currentView, expandedDropdowns, currentSubItem) {
  const isExpanded = expandedDropdowns.has(item.id);
  const chevronClass = isExpanded ? 'fa-chevron-down rotate-180' : 'fa-chevron-down';
  return `
    <div class="dropdown-container">
      <button
        class="dropdown-toggle w-full text-left p-3 rounded-lg transition-all duration-200 text-gray-300 hover:bg-gray-700 hover:text-white"
        data-dropdown="${item.id}"
        title="${item.description}"
        aria-expanded="${isExpanded}"
      >
        <div class="flex items-center space-x-3">
          <i class="${item.icon} text-lg"></i>
          <div class="flex-1">
            <div class="font-semibold">${item.label}</div>
            <div class="text-xs opacity-75">${item.description}</div>
          </div>
          <i class="fas ${chevronClass} text-sm transition-transform duration-200"></i>
        </div>
      </button>
      <div class="dropdown-content ${isExpanded ? 'expanded' : 'collapsed'} ml-4 mt-1 space-y-1 transition-all duration-200 overflow-hidden">
        ${item.items ? item.items.map(subItem => renderDropdownSubItem(subItem, item.id, currentView, currentSubItem)).join('') : ''}
      </div>
    </div>
  `;
}

function renderDropdownSubItem(subItem, parentCategory, currentView, currentSubItem) {
  const isActive = currentSubItem
    ? (currentSubItem.category === parentCategory && currentSubItem.module === subItem.contentModule)
    : (currentView === subItem.id);
  const activeClass = isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-600 hover:text-white';
  return `
    <button
      class="nav-sub-item w-full text-left p-2 pl-4 rounded transition-colors duration-200 ${activeClass}"
      data-view="${subItem.id}"
      data-category="${parentCategory || ''}"
      data-module="${subItem.contentModule || ''}"
      title="${subItem.description}"
    >
      <div class="flex items-center space-x-2">
        <i class="${subItem.icon} text-sm"></i>
        <div class="flex-1">
          <div class="text-sm font-medium">${subItem.label}</div>
          <div class="text-xs opacity-75">${subItem.description}</div>
        </div>
      </div>
    </button>
  `;
}

