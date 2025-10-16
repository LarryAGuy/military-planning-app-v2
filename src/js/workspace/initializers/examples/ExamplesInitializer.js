// src/js/workspace/initializers/examples/ExamplesInitializer.js
// Feature-flagged Examples initializer. Handles opord/mdmp/jpp examples

import { detectBrowser, scheduleInitialize } from '../../utils/BrowserTiming.js';
import { assertContainers } from '../../utils/ContainerGuard.js';
import { executeEmbeddedScripts } from '../../utils/ScriptExecutor.js';
import { DOM_IDS } from '../../utils/Constants.js';

export class ExamplesInitializer {
  constructor() { this.cancelled = false; }
  cancel() { this.cancelled = true; }
  isCancelled(ctx) { return this.cancelled || ctx?.cancellationToken?.isCancelled?.() === true; }

  canHandle(category, module) {
    if (category !== 'examples') return false;
    return new Set(['opord','mdmp','jpp']).has(module);
  }

  async init(data, ctx) {
    const { category, module } = data || {};
    if (category !== 'examples') return;
    const browser = detectBrowser();
    const run = async () => {
      if (this.isCancelled(ctx)) return;
      switch (module) {
        case 'opord': if (this.isCancelled(ctx)) return; await this.initOpord(ctx); break;
        case 'mdmp': if (this.isCancelled(ctx)) return; await this.initMdmp(ctx); break;
        case 'jpp': if (this.isCancelled(ctx)) return; await this.initJpp(ctx); break;
        default: if (this.isCancelled(ctx)) return; await this.initOpord(ctx);
      }
    };
    scheduleInitialize(browser, run);
  }

  ensureContainers(ids) { assertContainers(ids); }
  getImporter(ctx) { return (ctx && ctx.loader && typeof ctx.loader.import === 'function') ? ctx.loader.import : (s) => import(s); }

  async initOpord(ctx) {
    const ids = DOM_IDS.examples['opord'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalExamplesOpordButtons } = await importer('../../../content/examples/UniversalExamplesOpordButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalExamplesOpordButtons();
    await buttons.initialize?.();
    window.universalExamplesOpordButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'Examples/OPORD');
  }

  async initMdmp(ctx) {
    const ids = DOM_IDS.examples['mdmp'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalExamplesMdmpButtons } = await importer('../../../content/examples/UniversalExamplesMdmpButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalExamplesMdmpButtons();
    await buttons.initialize?.();
    window.universalExamplesMdmpButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'Examples/MDMP');
  }

  async initJpp(ctx) {
    const ids = DOM_IDS.examples['jpp'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalExamplesJppButtons } = await importer('../../../content/examples/UniversalExamplesJppButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalExamplesJppButtons();
    await buttons.initialize?.();
    window.universalExamplesJppButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'Examples/JPP');
  }
}

