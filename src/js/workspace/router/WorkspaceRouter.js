// src/js/workspace/router/WorkspaceRouter.js
// No behavior change until WorkspaceComponent opts into router usage.
export class WorkspaceRouter {
  /** @param {Array<{canHandle:(cat:string,mod?:string)=>boolean, init:(data:any,ctx:any)=>Promise<void>}>} initializers */
  constructor(initializers = []) { this.initializers = initializers; }
  /** @param {{category:string,module?:string,html?:string}} data @param {any} ctx */
  async route(data, ctx) {
    console.log('🔀 WorkspaceRouter.route() called:', {
      category: data.category,
      module: data.module,
      initializersCount: this.initializers.length
    });

    // Check each initializer
    for (const init of this.initializers) {
      const canHandle = init?.canHandle?.(data.category, data.module);
      console.log(`  - ${init.constructor.name}.canHandle('${data.category}', '${data.module}') = ${canHandle}`);
    }

    const init = this.initializers.find(i => i?.canHandle?.(data.category, data.module));
    if (!init) {
      console.warn('⚠️ No initializer found for:', data.category, '/', data.module);
      return; // no-op: legacy path continues to work
    }

    console.log(`✅ Found initializer: ${init.constructor.name}`);
    await init.init(data, ctx);
  }
}

