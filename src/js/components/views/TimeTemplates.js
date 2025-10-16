import { formatTime, formatDate, formatGMTOffset } from '../time/TimeUtils.js';

export function renderCollapsedView(currentTime) {
  const zuluTime = formatTime(currentTime, 0);
  const localTime = formatTime(currentTime, null);
  const chevronClass = 'fa-chevron-down';
  return `
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6 text-sm font-semibold">
        <span class="text-blue-400 font-mono">
          <i class="fas fa-globe mr-2"></i>
          Z: ${zuluTime}
        </span>
        <span class="text-green-400 font-mono">
          <i class="fas fa-map-marker-alt mr-2"></i>
          Local: ${localTime}
        </span>
        <button id="copy-dtg-btn" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-colors font-semibold" title="Copy Zulu Date-Time Group">
          <i class="fas fa-copy mr-1"></i>
          Copy DTG
        </button>
      </div>
      <div class="text-gray-400 hover:text-white transition-colors">
        <i class="fas ${chevronClass}"></i>
      </div>
    </div>
  `;
}

export function renderExpandedView(currentTime, timeZones) {
  const chevronClass = 'fa-chevron-up';
  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-white font-semibold text-sm">
          <i class="fas fa-clock mr-2"></i>
          Time Reference
        </h3>
        <div class="flex items-center space-x-3">
          <button id="copy-dtg-btn" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors font-semibold" title="Copy Zulu Date-Time Group">
            <i class="fas fa-copy mr-1"></i>
            Copy DTG
          </button>
          <div class="text-gray-400 hover:text-white transition-colors">
            <i class="fas ${chevronClass}"></i>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3 overflow-x-auto">
        ${timeZones.map(tz => renderTimeZoneCard(currentTime, tz)).join('')}
      </div>
    </div>
  `;
}

function renderTimeZoneCard(currentTime, timeZone) {
  const time = formatTime(currentTime, timeZone.offset, timeZone.dstOffset);
  const date = formatDate(currentTime, timeZone.offset, timeZone.dstOffset);

  let colorClass = 'text-gray-300';
  if (timeZone.id === 'zulu') colorClass = 'text-blue-400';
  else if (timeZone.id === 'local') colorClass = 'text-green-400';
  else if (timeZone.abbreviation.includes('EST') || timeZone.abbreviation.includes('PST') || timeZone.abbreviation.includes('AKST')) colorClass = 'text-yellow-400';

  let headerText;
  const gmtOffset = formatGMTOffset(timeZone.offset, timeZone.dstOffset, currentTime);
  if (timeZone.id === 'zulu') headerText = `Zulu, ${gmtOffset}`;
  else if (timeZone.id === 'local') headerText = `Local System, ${gmtOffset}`;
  else headerText = `${timeZone.name} (${timeZone.abbreviation}, ${gmtOffset})`;

  return `
    <div class="bg-gray-700 rounded-lg p-3 min-w-0 flex-shrink-0 border border-gray-600 hover:border-gray-500 transition-colors">
      <div class="text-center">
        <div class="text-xs text-gray-400 mb-2 font-semibold">${headerText}</div>
        <div class="font-mono text-sm ${colorClass} font-bold">${time}</div>
        <div class="text-xs text-gray-500 mt-1">${date}</div>
      </div>
    </div>
  `;
}

