// src/js/workspace/initializers/jpp/JppInitializer.js
// Feature-flagged JPP initializer. Handles steps 1–7 and Examples.

import { detectBrowser, scheduleInitialize } from '../../utils/BrowserTiming.js';
import { assertContainers } from '../../utils/ContainerGuard.js';
import { executeEmbeddedScripts } from '../../utils/ScriptExecutor.js';
import { DOM_IDS } from '../../utils/Constants.js';

export class JppInitializer {
  constructor() { this.cancelled = false; }
  cancel() { this.cancelled = true; }
  isCancelled(ctx) { return this.cancelled || ctx?.cancellationToken?.isCancelled?.() === true; }

  canHandle(category, module) {
    if (category !== 'jpp') return false;
    const acceptable = new Set([
      'planning-initiation',
      'mission-analysis',
      'coa-development',
      'coa-analysis',
      'coa-comparison',
      'coa-approval',
      'plan-development',
      'orders-development',
      'orders-production',
      'examples'
    ]);
    return acceptable.has(module);
  }

  async init(data, ctx) {
    const { category, module } = data || {};
    if (category !== 'jpp') return;
    const browser = detectBrowser();
    const run = async () => {
      if (this.isCancelled(ctx)) return;
      switch (module) {
        case 'planning-initiation':
          if (this.isCancelled(ctx)) return; await this.initPlanningInitiation(ctx); break;
        case 'mission-analysis':
          if (this.isCancelled(ctx)) return; await this.initMissionAnalysis(ctx); break;
        case 'coa-development':
          if (this.isCancelled(ctx)) return; await this.initCOADevelopment(ctx); break;
        case 'coa-analysis':
          if (this.isCancelled(ctx)) return; await this.initCOAAnalysis(ctx); break;
        case 'coa-comparison':
          if (this.isCancelled(ctx)) return; await this.initCOAComparison(ctx); break;
        case 'coa-approval':
          if (this.isCancelled(ctx)) return; await this.initCOAApproval(ctx); break;
        case 'plan-development':
          if (this.isCancelled(ctx)) return; await this.initPlanDevelopment(ctx); break;
        case 'orders-development':
          if (this.isCancelled(ctx)) return; await this.initOrdersDevelopment(ctx); break;
        case 'orders-production':
          if (this.isCancelled(ctx)) return; await this.initOrdersProduction(ctx); break;
        case 'examples':
          if (this.isCancelled(ctx)) return; await this.initExamples(ctx); break;
        default:
          if (this.isCancelled(ctx)) return; await this.initPlanningInitiation(ctx);
      }
    };
    scheduleInitialize(browser, run);
  }

  ensureContainers(ids) { assertContainers(ids); }
  getImporter(ctx) { return (ctx && ctx.loader && typeof ctx.loader.import === 'function') ? ctx.loader.import : (s) => import(s); }

  // Step 1 — Planning Initiation
  async initPlanningInitiation(ctx) {
    const ids = DOM_IDS.jpp['planning-initiation'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    // Import functional universal buttons for JPP — full Universal Button system
    const { UniversalPlanningInitiationButtons } = await importer('../../../content/jpp/UniversalPlanningInitiationButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalPlanningInitiationButtons();
    await buttons.initialize?.();
    window.universalPlanningInitiationButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/Planning Initiation');
  }

  async initMissionAnalysis(ctx) {
    const ids = DOM_IDS.jpp['mission-analysis'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalMissionAnalysisButtons } = await importer('../../../content/jpp/UniversalMissionAnalysisButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalMissionAnalysisButtons();
    await buttons.initialize?.();
    window.universalMissionAnalysisButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/Mission Analysis');
  }

  async initCOADevelopment(ctx) {
    const ids = DOM_IDS.jpp['coa-development'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalCOADevelopmentButtons } = await importer('../../../content/jpp/UniversalCOADevelopmentButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalCOADevelopmentButtons();
    await buttons.initialize?.();
    window.universalCOADevelopmentButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/COA Development');
  }

  async initCOAAnalysis(ctx) {
    const ids = DOM_IDS.jpp['coa-analysis'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalCOAAnalysisButtons } = await importer('../../../content/jpp/UniversalCOAAnalysisButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalCOAAnalysisButtons();
    await buttons.initialize?.();
    window.universalCOAAnalysisButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/COA Analysis');
  }

  async initCOAComparison(ctx) {
    const ids = DOM_IDS.jpp['coa-comparison'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalCOAComparisonButtons } = await importer('../../../content/jpp/UniversalCOAComparisonButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalCOAComparisonButtons();
    await buttons.initialize?.();
    window.universalCOAComparisonButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/COA Comparison');
  }

  async initOrdersDevelopment(ctx) {
    const ids = DOM_IDS.jpp['orders-development'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalJppOrdersDevelopmentButtons } = await importer('../../../content/jpp/UniversalJppOrdersDevelopmentButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalJppOrdersDevelopmentButtons();
    await buttons.initialize?.();
    window.universalJppOrdersDevelopmentButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/Orders Development');
  }

  async initCOAApproval(ctx) {
    const ids = DOM_IDS.jpp['coa-approval'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalCOAApprovalButtons } = await importer('../../../content/jpp/UniversalCOAApprovalButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalCOAApprovalButtons();
    await buttons.initialize?.();
    window.universalJppCOAApprovalButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/COA Approval');
  }

  async initPlanDevelopment(ctx) {
    const ids = DOM_IDS.jpp['plan-development'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalPlanDevelopmentButtons } = await importer('../../../content/jpp/UniversalPlanDevelopmentButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalPlanDevelopmentButtons();
    await buttons.initialize?.();
    window.universalJppPlanDevelopmentButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/Plan Development');
  }

  async initOrdersProduction(ctx) {
    const ids = DOM_IDS.jpp['orders-production'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalJppOrdersProductionButtons } = await importer('../../../content/jpp/UniversalJppOrdersProductionButtons.js');
    if (this.isCancelled(ctx)) return;
    const buttons = new UniversalJppOrdersProductionButtons();
    await buttons.initialize?.();
    window.universalJppOrdersProductionButtons = buttons;
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/Orders Production');
  }

  async initExamples(ctx) {
    const ids = DOM_IDS.jpp['examples'];
    this.ensureContainers([ids.nav, ids.content]);
    const importer = this.getImporter(ctx);
    const { UniversalJppExamplesButtons } = await importer('../../../content/jpp/UniversalJppExamplesButtons.js');
    if (this.isCancelled(ctx)) return;
    if (UniversalJppExamplesButtons) {
      const buttons = new UniversalJppExamplesButtons();
      await buttons.initialize?.();
      window.universalJppExamplesButtons = buttons;
    }
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(ids.content), 'JPP/Examples');
  }
}

