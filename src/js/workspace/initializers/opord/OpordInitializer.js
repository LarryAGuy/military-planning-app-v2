// src/js/workspace/initializers/opord/OpordInitializer.js
// Feature-flagged OPORD initializer. Handles sections: situation, mission, execution, sustainment, command-control, annexes, examples.

import { detectBrowser, scheduleInitialize } from '../../utils/BrowserTiming.js';
import { assertContainers } from '../../utils/ContainerGuard.js';
import { executeEmbeddedScripts } from '../../utils/ScriptExecutor.js';
import { DOM_IDS } from '../../utils/Constants.js';

export class OpordInitializer {
  constructor() { this.cancelled = false; }
  cancel() { this.cancelled = true; }
  isCancelled(ctx) { return this.cancelled || ctx?.cancellationToken?.isCancelled?.() === true; }

  canHandle(category, module) {
    if (category !== 'opord') return false;
    const sections = new Set(['situation','mission','execution','sustainment','command-control','annexes','examples']);
    return sections.has(module);
  }

  getImporter(ctx) {
    return (ctx && ctx.loader && typeof ctx.loader.import === 'function')
      ? ctx.loader.import
      : (s) => import(s);
  }

  ensureContainers(ids) {
    assertContainers(ids);
  }

  async init(data, ctx) {
    const { category, module } = data || {};
    if (category !== 'opord') return;
    const browser = detectBrowser();
    const run = async () => {
      if (this.isCancelled(ctx)) return;
      switch (module) {
        case 'situation':
          await this.initSituation(ctx); break;
        case 'mission':
          await this.initMission(ctx); break;
        case 'execution':
          await this.initExecution(ctx); break;
        case 'sustainment':
          await this.initSustainment(ctx); break;
        case 'command-control':
          await this.initCommandControl(ctx); break;
        case 'annexes':
          await this.initAnnexes(ctx); break;
        case 'examples':
          await this.initExamples(ctx); break;
        default:
          return;
      }
    };
    scheduleInitialize(browser, run);
  }

  async initSituation(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord.situation;
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalSituationButtons } = await importer('../../../content/opord/UniversalSituationButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalSituationButtons();
    await buttons.initialize();
    window.universalSituationButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Situation');
  }

  async initMission(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord.mission;
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalMissionButtons } = await importer('../../../content/opord/UniversalMissionButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalMissionButtons();
    await buttons.initialize();
    window.universalMissionButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Mission');
  }

  async initExecution(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord.execution;
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalExecutionButtons } = await importer('../../../content/opord/UniversalExecutionButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalExecutionButtons();
    await buttons.initialize();
    window.universalExecutionButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Execution');
  }

  async initSustainment(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord.sustainment;
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalSustainmentButtons } = await importer('../../../content/opord/UniversalSustainmentButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalSustainmentButtons();
    await buttons.initialize();
    window.universalSustainmentButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Sustainment');
  }

  async initCommandControl(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord['command-control'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalCommandControlButtons } = await importer('../../../content/opord/UniversalCommandControlButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalCommandControlButtons();
    await buttons.initialize();
    window.universalCommandControlButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Command & Control');
  }

  async initAnnexes(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord.annexes;
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalAnnexesButtons } = await importer('../../../content/opord/UniversalAnnexesButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalAnnexesButtons();
    await buttons.initialize();
    window.universalAnnexesButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Annexes');
  }

  async initExamples(ctx) {
    if (this.isCancelled(ctx)) return;
    const ids = DOM_IDS.opord.examples;
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalExamplesButtons } = await importer('../../../content/opord/UniversalExamplesButtons.js');
    if (this.isCancelled(ctx)) return;
    if (UniversalExamplesButtons) {
      const buttons = new UniversalExamplesButtons();
      await buttons.initialize?.();
      window.universalOpordExamplesButtons = buttons;
    }
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'OPORD/Examples');
  }
}

