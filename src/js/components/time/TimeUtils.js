export function isDST(date, offset) {
  // Simple DST detection for US time zones
  if (offset === -5 || offset === -8 || offset === -9) { // EST, PST, AKST
    const year = date.getFullYear();
    // DST starts second Sunday in March
    const dstStart = getNthSundayOfMonth(year, 2, 2); // March = 2
    // DST ends first Sunday in November
    const dstEnd = getNthSundayOfMonth(year, 10, 1); // November = 10
    return date >= dstStart && date < dstEnd;
  }
  return false;
}

export function getNthSundayOfMonth(year, month, n) {
  const firstDay = new Date(year, month, 1);
  const firstSunday = new Date(year, month, 1 + (7 - firstDay.getDay()) % 7);
  return new Date(year, month, firstSunday.getDate() + (n - 1) * 7);
}

export function formatTime(date, offset, dstOffset = null) {
  let targetDate;
  if (offset === null) {
    targetDate = new Date(date);
  } else {
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let adjustedOffset = offset;
    if (dstOffset !== null && dstOffset !== undefined && isDST(date, offset)) {
      adjustedOffset = dstOffset;
    }
    targetDate = new Date(utc + (adjustedOffset * 3600000));
  }
  return targetDate.toTimeString().slice(0, 8); // HH:MM:SS
}

export function formatDate(date, offset, dstOffset = null) {
  let targetDate;
  if (offset === null) {
    targetDate = new Date(date);
  } else {
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let adjustedOffset = offset;
    if (dstOffset !== null && dstOffset !== undefined && isDST(date, offset)) {
      adjustedOffset = dstOffset;
    }
    targetDate = new Date(utc + (adjustedOffset * 3600000));
  }
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const day = targetDate.getDate().toString().padStart(2, '0');
  const month = months[targetDate.getMonth()];
  const year = targetDate.getFullYear();
  return `${day} ${month} ${year}`;
}

export function formatGMTOffset(offset, dstOffset, date) {
  if (offset === null) {
    const localOffset = -date.getTimezoneOffset() / 60;
    return localOffset >= 0 ? `GMT+${localOffset}` : `GMT${localOffset}`;
  }
  let actualOffset = offset;
  if (dstOffset !== null && dstOffset !== undefined && isDST(date, offset)) {
    actualOffset = dstOffset;
  }
  if (actualOffset === 0) return 'GMT+0';
  if (actualOffset > 0) return `GMT+${actualOffset}`;
  return `GMT${actualOffset}`;
}

