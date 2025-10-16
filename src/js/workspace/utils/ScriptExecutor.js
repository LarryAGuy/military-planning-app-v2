// src/js/workspace/utils/ScriptExecutor.js
export function executeEmbeddedScripts(rootEl, label = 'Embedded') {
  if (!rootEl) return;
  const scripts = rootEl.querySelectorAll('script');
  scripts.forEach((oldScript) => {
    if (oldScript.dataset && oldScript.dataset.executed === 'true') return;
    const newScript = document.createElement('script');
    for (const attr of oldScript.attributes) newScript.setAttribute(attr.name, attr.value);
    if (!oldScript.src) newScript.textContent = oldScript.textContent;
    oldScript.parentNode.replaceChild(newScript, oldScript);
    newScript.dataset.executed = 'true';
  });
}

