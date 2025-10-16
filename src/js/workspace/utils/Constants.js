// src/js/workspace/utils/Constants.js
export const DOM_IDS = {
  mdmp: {},
  opord: {
    situation: { nav: 'universal-situation-nav', content: 'situation-content-area' },
    mission: { nav: 'universal-mission-nav', content: 'mission-content-area' },
    execution: { nav: 'universal-execution-nav', content: 'execution-content-area' },
    sustainment: { nav: 'universal-sustainment-nav', content: 'sustainment-content-area' },
    'command-control': { nav: 'universal-command-control-nav', content: 'command-control-content-area' },
    annexes: { nav: 'universal-annexes-nav', content: 'annexes-content-area' },
    examples: { nav: 'universal-examples-nav', content: 'examples-content-area' }
  },
  jpp: {
    'planning-initiation': { nav: 'universal-jpp-planning-initiation-nav', content: 'planning-initiation-content-area' },
    'mission-analysis': { nav: 'universal-jpp-mission-analysis-nav', content: 'mission-analysis-content-area' },
    'coa-development': { nav: 'universal-jpp-coa-development-nav', content: 'coa-development-content-area' },
    'coa-analysis': { nav: 'universal-jpp-coa-analysis-nav', content: 'coa-analysis-content-area' },
    'coa-comparison': { nav: 'universal-jpp-coa-comparison-nav', content: 'coa-comparison-content-area' },
    'coa-approval': { nav: 'universal-jpp-coa-approval-nav', content: 'coa-approval-content-area' },
    'plan-development': { nav: 'universal-jpp-plan-development-nav', content: 'plan-development-content-area' },
    // Legacy shims retained for safety; not linked from navigation
    'orders-development': { nav: 'universal-jpp-orders-development-nav', content: 'orders-development-content-area' },
    'orders-production': { nav: 'universal-jpp-orders-production-nav', content: 'orders-production-content-area' },
    'examples': { nav: 'universal-jpp-examples-nav', content: 'examples-content-area' }
  },
  draft: {
    'draft-opord': { nav: 'universal-draft-opord-nav', content: 'draft-opord-content-area' },
    'draft-mdmp': { nav: 'universal-draft-mdmp-nav', content: 'draft-mdmp-content-area' },
    'draft-jpp': { nav: 'universal-draft-jpp-nav', content: 'draft-jpp-content-area' }
  },
  examples: {
    'opord': { nav: 'universal-examples-opord-nav', content: 'examples-opord-content-area' },
    'mdmp': { nav: 'universal-examples-mdmp-nav', content: 'examples-mdmp-content-area' },
    'jpp': { nav: 'universal-examples-jpp-nav', content: 'examples-jpp-content-area' }
  },
  tactics: {
    'battle-drills': { nav: 'universal-battle-drills-nav', content: 'battle-drills-content-area' },
    'movement-and-maneuver': { nav: 'universal-movement-and-maneuver-nav', content: 'movement-and-maneuver-content-area' },
    'fire-and-movement': { nav: 'universal-fire-and-movement-nav', content: 'fire-and-movement-content-area' },
    'defensive-operations': { nav: 'universal-defensive-operations-nav', content: 'defensive-operations-content-area' },
    'offensive-operations': { nav: 'universal-offensive-operations-nav', content: 'offensive-operations-content-area' },
    'reconnaissance-and-security': { nav: 'universal-reconnaissance-and-security-nav', content: 'reconnaissance-and-security-content-area' },
    'urban-operations': { nav: 'universal-urban-operations-nav', content: 'urban-operations-content-area' }
  }
};
export const MODULE_ALIASES = { 'orders-production': 'orders-production-main' };

