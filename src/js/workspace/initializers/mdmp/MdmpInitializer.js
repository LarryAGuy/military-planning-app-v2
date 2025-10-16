// src/js/workspace/initializers/mdmp/MdmpInitializer.js
// Feature-flagged MDMP initializer. Handles steps 1–7.

import { detectBrowser, scheduleInitialize } from '../../../workspace/utils/BrowserTiming.js';
import { assertContainers } from '../../../workspace/utils/ContainerGuard.js';
import { executeEmbeddedScripts } from '../../../workspace/utils/ScriptExecutor.js';

export class MdmpInitializer {
  constructor() {
    this.cancelled = false;
  }

  canHandle(category, module) {
    if (category !== 'mdmp') return false;
    const acceptable = new Set([
      'receipt-of-mission',
      'mission-analysis',
      'course-of-action-development',
      'course-of-action-analysis',
      'course-of-action-comparison',
      'coa-comparison',
      'course-of-action-approval',
      'coa-approval',
      'orders-production',
      'orders-production-main',
    ]);
    return acceptable.has(module);
  }

  cancel() { this.cancelled = true; }

  async init(data, ctx) {
    const { category, module } = data || {};
    if (category !== 'mdmp') return;
    const browser = detectBrowser();
    const isCancelled = () => this.cancelled || ctx?.cancellationToken?.isCancelled?.() === true;
    const run = async () => {
      if (isCancelled()) return;
      switch (module) {
        case 'orders-production':
        case 'orders-production-main':
          if (isCancelled()) return; await this.initOrdersProduction(ctx);
          break;
        case 'course-of-action-approval':
        case 'coa-approval':
          if (isCancelled()) return; await this.initCOAApproval(ctx);
          break;
        case 'course-of-action-comparison':
        case 'coa-comparison':
          if (isCancelled()) return; await this.initCOAComparison(ctx);
          break;
        case 'course-of-action-analysis':
          if (isCancelled()) return; await this.initCOAAnalysis(ctx);
          break;
        case 'course-of-action-development':
          if (isCancelled()) return; await this.initCOADevelopment(ctx);
          break;
        case 'mission-analysis':
          if (isCancelled()) return; await this.initMissionAnalysis(ctx);
          break;
        case 'receipt-of-mission':
        default:
          if (isCancelled()) return; await this.initReceiptOfMission(ctx);
      }
    };
    scheduleInitialize(browser, run);
  }

  ensureContainers(ids) {
    // assertContainers expects array of ids; throw on missing
    assertContainers(ids);
  }

  getImporter(ctx) {
    return (ctx && ctx.loader && typeof ctx.loader.import === 'function')
      ? ctx.loader.import
      : (s) => import(s);
  }

  async initOrdersProduction(ctx) {
    this.ensureContainers(['universal-orders-production-nav', 'orders-production-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalOrdersProductionButtons } = await importer('../../../content/mdmp/UniversalOrdersProductionButtons.js');
    const buttons = new UniversalOrdersProductionButtons();
    await buttons.initialize();
    window.universalOrdersProductionButtons = buttons;
    executeEmbeddedScripts(document.getElementById('orders-production-content-area'), 'MDMP/Orders Production');
  }

  async initCOAApproval(ctx) {
    this.ensureContainers(['universal-coa-approval-nav', 'coa-approval-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalCourseOfActionApprovalButtons } = await importer('../../../content/mdmp/UniversalCourseOfActionApprovalButtons.js');
    const buttons = new UniversalCourseOfActionApprovalButtons();
    await buttons.initialize();
    window.universalCOAApprovalButtons = buttons;
    executeEmbeddedScripts(document.getElementById('coa-approval-content-area'), 'MDMP/COA Approval');
  }

  async initCOAComparison(ctx) {
    this.ensureContainers(['universal-coa-comparison-nav', 'coa-comparison-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalCourseOfActionComparisonButtons } = await importer('../../../content/mdmp/UniversalCourseOfActionComparisonButtons.js');
    const buttons = new UniversalCourseOfActionComparisonButtons();
    await buttons.initialize();
    window.universalCOAComparisonButtons = buttons;
    executeEmbeddedScripts(document.getElementById('coa-comparison-content-area'), 'MDMP/COA Comparison');
  }

  async initCOAAnalysis(ctx) {
    this.ensureContainers(['universal-coa-analysis-nav', 'coa-analysis-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalCourseOfActionAnalysisButtons } = await importer('../../../content/mdmp/UniversalCourseOfActionAnalysisButtons.js');
    const buttons = new UniversalCourseOfActionAnalysisButtons();
    await buttons.initialize();
    window.universalCOAAnalysisButtons = buttons;
    executeEmbeddedScripts(document.getElementById('coa-analysis-content-area'), 'MDMP/COA Analysis');
  }

  async initCOADevelopment(ctx) {
    this.ensureContainers(['universal-coa-nav', 'coa-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalCourseOfActionDevelopmentButtons } = await importer('../../../content/mdmp/UniversalCourseOfActionDevelopmentButtons.js');
    const buttons = new UniversalCourseOfActionDevelopmentButtons();
    await buttons.initialize();
    window.universalCOADevelopmentButtons = buttons;
    executeEmbeddedScripts(document.getElementById('coa-content-area'), 'MDMP/COA Development');
  }

  async initMissionAnalysis(ctx) {
    this.ensureContainers(['universal-mission-analysis-nav', 'mission-analysis-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalMissionAnalysisButtons } = await importer('../../../content/mdmp/UniversalMissionAnalysisButtons.js');
    const buttons = new UniversalMissionAnalysisButtons();
    await buttons.initialize();
    window.universalMissionAnalysisButtons = buttons;
    executeEmbeddedScripts(document.getElementById('mission-analysis-content-area'), 'MDMP/Mission Analysis');
  }

  async initReceiptOfMission(ctx) {
    this.ensureContainers(['universal-receipt-nav', 'receipt-content-area']);
    const importer = this.getImporter(ctx);
    const { UniversalReceiptOfMissionButtons } = await importer('../../../content/mdmp/UniversalReceiptOfMissionButtons.js');
    const buttons = new UniversalReceiptOfMissionButtons();
    await buttons.initialize();
    window.universalReceiptOfMissionButtons = buttons;
    executeEmbeddedScripts(document.getElementById('receipt-content-area'), 'MDMP/Receipt of Mission');
  }
}

