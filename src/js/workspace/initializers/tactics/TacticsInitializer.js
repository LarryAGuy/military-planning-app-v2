// src/js/workspace/initializers/tactics/TacticsInitializer.js
// Feature-flagged Tactics initializer. Mirrors other domain initializers with a simple overview module.

import { detectBrowser, scheduleInitialize } from '../../utils/BrowserTiming.js';
import { assertContainers } from '../../utils/ContainerGuard.js';
import { executeEmbeddedScripts } from '../../utils/ScriptExecutor.js';
import { DOM_IDS } from '../../utils/Constants.js';

export class TacticsInitializer {
  constructor() { this.cancelled = false; }
  cancel() { this.cancelled = true; }
  isCancelled(ctx) { return this.cancelled || ctx?.cancellationToken?.isCancelled?.() === true; }

  canHandle(category, module) {
    if (category !== 'tactics') return false;
    const acceptable = new Set([
      'battle-drills',
      'movement-and-maneuver',
      'fire-and-movement',
      'defensive-operations',
      'offensive-operations',
      'reconnaissance-and-security',
      'urban-operations'
    ]);
    return acceptable.has(module);
  }

  async init(data, ctx) {
    const { category, module } = data || {};
    if (category !== 'tactics') return;
    const browser = detectBrowser();
    const run = async () => {
      if (this.isCancelled(ctx)) return;
      switch (module) {
        case 'battle-drills':
          if (this.isCancelled(ctx)) return; await this.initBattleDrills(ctx); break;
        case 'movement-and-maneuver':
          if (this.isCancelled(ctx)) return; await this.initMovementAndManeuver(ctx); break;
        case 'fire-and-movement':
          if (this.isCancelled(ctx)) return; await this.initFireAndMovement(ctx); break;
        case 'defensive-operations':
          if (this.isCancelled(ctx)) return; await this.initDefensiveOperations(ctx); break;
        case 'offensive-operations':
          if (this.isCancelled(ctx)) return; await this.initOffensiveOperations(ctx); break;
        case 'reconnaissance-and-security':
          if (this.isCancelled(ctx)) return; await this.initReconnaissanceAndSecurity(ctx); break;
        case 'urban-operations':
          if (this.isCancelled(ctx)) return; await this.initUrbanOperations(ctx); break;
        default:
          // No matching module; no-op
          break;
      }
    };
    scheduleInitialize(browser, run);
  }

  ensureContainers(ids) { assertContainers(ids); }
  getImporter(ctx) { return (ctx && ctx.loader && typeof ctx.loader.import === 'function') ? ctx.loader.import : (s) => import(s); }

  // Wait for required containers to exist before initializing buttons (avoids race conditions)
  async _waitForContainers(ids, timeoutMs = 1000, intervalMs = 25) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const missing = ids.filter(id => !document.getElementById(id));
      if (missing.length === 0) return true;
      await new Promise(r => setTimeout(r, intervalMs));
    }
    const stillMissing = ids.filter(id => !document.getElementById(id));
    if (stillMissing.length) {
      console.warn(`TacticsInitializer: containers not found after ${timeoutMs}ms: ${stillMissing.join(', ')}`);
      return false;
    }
    return true;
  }

  async initBattleDrills(ctx) { await this._initGeneric(ctx, 'battle-drills', 'UniversalBattleDrillsButtons', 'Tactics/Battle Drills'); }
  async initMovementAndManeuver(ctx) { await this._initGeneric(ctx, 'movement-and-maneuver', 'UniversalMovementAndManeuverButtons', 'Tactics/Movement & Maneuver'); }
  async initFireAndMovement(ctx) { await this._initGeneric(ctx, 'fire-and-movement', 'UniversalFireAndMovementButtons', 'Tactics/Fire & Movement'); }
  async initDefensiveOperations(ctx) { await this._initGeneric(ctx, 'defensive-operations', 'UniversalDefensiveOperationsButtons', 'Tactics/Defensive Operations'); }
  async initOffensiveOperations(ctx) { await this._initGeneric(ctx, 'offensive-operations', 'UniversalOffensiveOperationsButtons', 'Tactics/Offensive Operations'); }
  async initReconnaissanceAndSecurity(ctx) { await this._initGeneric(ctx, 'reconnaissance-and-security', 'UniversalReconnaissanceAndSecurityButtons', 'Tactics/Recon & Security'); }
  async initUrbanOperations(ctx) { await this._initGeneric(ctx, 'urban-operations', 'UniversalUrbanOperationsButtons', 'Tactics/Urban Operations'); }

  async _initGeneric(ctx, mod, buttonsExport, label) {
    const modIds = DOM_IDS.tactics?.[mod] || { nav: `universal-${mod}-nav`, content: `${mod}-content-area` };

    // Robustly wait for containers (content is inserted by WorkspaceComponent before routing)
    const containersReady = await this._waitForContainers([modIds.nav, modIds.content], 1200, 25);
    if (!containersReady) {
      // As a last resort, try assert (will throw with a clearer error for debugging)
      this.ensureContainers([modIds.nav, modIds.content]);
    }

    const importer = this.getImporter(ctx);
    const pascal = (s) => s.split('-').map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join('');
    const fileName = `Universal${pascal(mod)}Buttons`;
    const modulePath = `../../../content/tactics/${fileName}.js`;

    let imported;
    try {
      imported = await importer(modulePath);
    } catch (e) {
      console.error(`TacticsInitializer: failed to import ${modulePath}`, e);
      return;
    }

    const Buttons = imported[buttonsExport] || imported.default || imported[fileName];
    if (this.isCancelled(ctx)) return;
    if (Buttons) {
      try {
        const buttons = new Buttons();
        await buttons.initialize?.();
        window[`universal_${mod.replace(/-/g,'_')}_buttons`] = buttons;
      } catch (e) {
        console.error(`TacticsInitializer: failed to initialize ${fileName}`, e);
      }
    }
    if (this.isCancelled(ctx)) return;
    executeEmbeddedScripts(document.getElementById(modIds.content), label);
  }
}

export default TacticsInitializer;

