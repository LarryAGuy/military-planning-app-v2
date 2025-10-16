// src/js/workspace/utils/ContainerGuard.js
export function assertContainers(ids) {
  const missing = ids.filter(id => !document.getElementById(id));
  if (missing.length) {
    const err = new Error(`Missing container(s): ${missing.join(', ')}`);
    err.name = 'ContainerNotFoundError';
    err.missing = missing;
    throw err;
  }
}

