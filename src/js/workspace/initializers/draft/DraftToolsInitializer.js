// src/js/workspace/initializers/draft/DraftToolsInitializer.js
// Feature-flagged Draft Tools initializer. Handles draft-opord, draft-mdmp, draft-jpp

import { detectBrowser, scheduleInitialize } from '../../utils/BrowserTiming.js';
import { assertContainers } from '../../utils/ContainerGuard.js';
import { executeEmbeddedScripts } from '../../utils/ScriptExecutor.js';
import { DOM_IDS } from '../../utils/Constants.js';

export class DraftToolsInitializer {
  constructor() { this.cancelled = false; }
  cancel() { this.cancelled = true; }
  isCancelled(ctx) { return this.cancelled || ctx?.cancellationToken?.isCancelled?.() === true; }

  canHandle(category, module) {
    // Accept both 'draft' and 'draft-tools' for backward compatibility
    if (category !== 'draft' && category !== 'draft-tools') return false;
    return new Set(['draft-opord','draft-mdmp','draft-jpp']).has(module);
  }

  async init(data, ctx) {
    const { category, module } = data || {};
    // Accept both 'draft' and 'draft-tools' for backward compatibility
    if (category !== 'draft' && category !== 'draft-tools') return;
    console.log(`🔧 DraftToolsInitializer handling: ${category}/${module}`);
    const browser = detectBrowser();
    const run = async () => {
      if (this.isCancelled(ctx)) return;
      switch (module) {
        case 'draft-opord':
          if (this.isCancelled(ctx)) return; await this.initDraftOpord(ctx); break;
        case 'draft-mdmp':
          if (this.isCancelled(ctx)) return; await this.initDraftMdmp(ctx); break;
        case 'draft-jpp':
          if (this.isCancelled(ctx)) return; await this.initDraftJpp(ctx); break;
        default:
          if (this.isCancelled(ctx)) return; await this.initDraftOpord(ctx);
      }
    };
    scheduleInitialize(browser, run);
  }

  ensureContainers(ids) { assertContainers(ids); }
  getImporter(ctx) { return (ctx && ctx.loader && typeof ctx.loader.import === 'function') ? ctx.loader.import : (s) => import(s); }

  async initDraftOpord(ctx) {
    const ids = DOM_IDS.draft['draft-opord'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalDraftOpordButtons } = await importer('../../../content/draft/UniversalDraftOpordButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalDraftOpordButtons();
    await buttons.initialize?.();
    window.universalDraftOpordButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'Draft/OPORD');
  }

  async initDraftMdmp(ctx) {
    const ids = DOM_IDS.draft['draft-mdmp'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalDraftMdmpButtons } = await importer('../../../content/draft/UniversalDraftMdmpButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalDraftMdmpButtons();
    await buttons.initialize?.();
    window.universalDraftMdmpButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'Draft/MDMP');
  }

  async initDraftJpp(ctx) {
    const ids = DOM_IDS.draft['draft-jpp'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalDraftJppButtons } = await importer('../../../content/draft/UniversalDraftJppButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalDraftJppButtons();
    await buttons.initialize?.();
    window.universalDraftJppButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'Draft/JPP');
  }
}

