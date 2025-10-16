/**
 * Navigation Configuration
 * Defines the dropdown structure for military planning navigation
 */

export const navigationConfig = {
    draftTools: {
        id: 'draft-tools',
        label: 'Draft Planning Tools',
        icon: 'fas fa-edit',
        description: 'Draft creation tools for military planning',
        order: 2,
        type: 'dropdown',
        items: [
            {
                id: 'draft-opord',
                label: 'Draft OPORD',
                description: 'Create draft operation orders',
                contentModule: 'draft-opord',
                icon: 'fas fa-file-plus'
            },
            {
                id: 'draft-mdmp',
                label: 'Draft MDMP',
                description: 'Create draft MDMP documents',
                contentModule: 'draft-mdmp',
                icon: 'fas fa-project-diagram'
            },
            {
                id: 'draft-jpp',
                label: 'Draft JPP',
                description: 'Create draft joint planning documents',
                contentModule: 'draft-jpp',
                icon: 'fas fa-globe-americas'
            }
        ]
    },

    opord: {
        id: 'opord',
        label: 'OPORD',
        icon: 'fas fa-file-alt',
        description: 'Operation Order Planning',
        order: 3,
        type: 'dropdown',
        items: [
            {
                id: 'opord-situation',
                label: '1. Situation',
                description: 'Enemy, friendly, and environmental analysis',
                contentModule: 'situation',
                icon: 'fas fa-eye'
            },
            {
                id: 'opord-mission',
                label: '2. Mission',
                description: 'Unit mission statement and intent',
                contentModule: 'mission',
                icon: 'fas fa-bullseye'
            },
            {
                id: 'opord-execution',
                label: '3. Execution',
                description: 'Concept of operations and tasks',
                contentModule: 'execution',
                icon: 'fas fa-play'
            },
            {
                id: 'opord-sustainment',
                label: '4. Sustainment',
                description: 'Logistics and personnel support',
                contentModule: 'sustainment',
                icon: 'fas fa-truck'
            },
            {
                id: 'opord-command-control',
                label: '5. Command & Control',
                description: 'C2 structure and communications',
                contentModule: 'command-control',
                icon: 'fas fa-satellite-dish'
            },
            {
                id: 'opord-annexes',
                label: 'Annexes A-L, T',
                description: 'Supporting annexes and appendices',
                contentModule: 'annexes',
                icon: 'fas fa-folder-open'
            },
            {
                id: 'opord-examples',
                label: 'OPORD Examples',
                description: 'Complete OPORD examples by echelon level',
                contentModule: 'examples',
                icon: 'fas fa-file-contract'
            }
        ]
    },

    mdmp: {
        id: 'mdmp',
        label: 'MDMP',
        icon: 'fas fa-project-diagram',
        description: 'Military Decision Making Process',
        order: 4,
        type: 'dropdown',
        defaultContentModule: 'receipt-of-mission', // Load Step 1 by default when MDMP is clicked
        items: [
            {
                id: 'mdmp-receipt-mission',
                label: 'Step 1: Receipt of Mission',
                description: 'Initial planning and warning orders',
                contentModule: 'receipt-of-mission',
                icon: 'fas fa-inbox'
            },
            {
                id: 'mdmp-mission-analysis',
                label: 'Step 2: Mission Analysis',
                description: 'Detailed mission analysis and IPB',
                contentModule: 'mission-analysis',
                icon: 'fas fa-search'
            },
            {
                id: 'mdmp-coa-development',
                label: 'Step 3: COA Development',
                description: 'Course of action development',
                contentModule: 'course-of-action-development',
                icon: 'fas fa-route'
            },
            {
                id: 'mdmp-coa-analysis',
                label: 'Step 4: COA Analysis',
                description: 'Course of action analysis and wargaming',
                contentModule: 'course-of-action-analysis',
                icon: 'fas fa-balance-scale'
            },
            {
                id: 'mdmp-coa-comparison',
                label: 'Step 5: COA Comparison',
                description: 'Compare and evaluate COAs',
                contentModule: 'coa-comparison',
                icon: 'fas fa-balance-scale'
            },
            {
                id: 'mdmp-coa-approval',
                label: 'Step 6: COA Approval',
                description: 'Commander decision and guidance',
                contentModule: 'coa-approval',
                icon: 'fas fa-check-circle'
            },
            {
                id: 'mdmp-orders-production',
                label: 'Step 7: Orders Production',
                description: 'OPORD development and dissemination',
                contentModule: 'orders-production-main',
                icon: 'fas fa-file-export'
            },
            {
                id: 'mdmp-example',
                label: 'Example MDMP',
                description: 'Complete MDMP process examples',
                contentModule: 'example',
                icon: 'fas fa-clipboard-list'
            }
        ]
    },

    jpp: {
        id: 'jpp',
        label: 'JPP',
        icon: 'fas fa-globe-americas',
        description: 'Joint Planning Process',
        order: 5,
        type: 'dropdown',
        items: [
            {
                id: 'jpp-planning-initiation',
                label: 'Step 1: Planning Initiation',
                description: 'Joint planning initiation and guidance',
                contentModule: 'planning-initiation',
                icon: 'fas fa-flag'
            },
            {
                id: 'jpp-mission-analysis',
                label: 'Step 2: Mission Analysis',
                description: 'Joint mission analysis process',
                contentModule: 'mission-analysis',
                icon: 'fas fa-search'
            },
            {
                id: 'jpp-coa-development',
                label: 'Step 3: COA Development',
                description: 'Joint course of action development',
                contentModule: 'coa-development',
                icon: 'fas fa-sitemap'
            },
            {
                id: 'jpp-coa-analysis',
                label: 'Step 4: COA Analysis & Wargaming',
                description: 'Joint course of action analysis, wargaming, and systematic evaluation',
                contentModule: 'coa-analysis',
                icon: 'fas fa-search-plus'
            },
            {
                id: 'jpp-coa-comparison',
                label: 'Step 5: COA Comparison',
                description: 'Joint COA comparison and evaluation',
                contentModule: 'coa-comparison',
                icon: 'fas fa-chart-bar'
            },
            {
                id: 'jpp-coa-approval',
                label: 'Step 6: COA Approval',
                description: 'Joint force commander decision',
                contentModule: 'coa-approval',
                icon: 'fas fa-stamp'
            },
            {
                id: 'jpp-plan-development',
                label: 'Step 7: Plan Development',
                description: 'Joint operation plan development',
                contentModule: 'plan-development',
                icon: 'fas fa-drafting-compass'
            },
            {
                id: 'jpp-example',
                label: 'Example JPP',
                description: 'Complete JPP process examples',
                contentModule: 'example',
                icon: 'fas fa-book-open'
            }
        ]
    },

    tactics: {
        id: 'tactics',
        label: 'Tactics',
        icon: 'fas fa-chess-knight',
        description: 'Tactics fundamentals and battle drills',
        order: 6,
        type: 'dropdown',
        items: [
            {
                id: 'tactics-battle-drills',
                label: 'Battle Drills',
                description: 'Individual and collective tasks',
                contentModule: 'battle-drills',
                icon: 'fas fa-crosshairs'
            },
            {
                id: 'tactics-movement-and-maneuver',
                label: 'Movement & Maneuver',
                description: 'Tactical movement and maneuver techniques',
                contentModule: 'movement-and-maneuver',
                icon: 'fas fa-shoe-prints'
            },
            {
                id: 'tactics-fire-and-movement',
                label: 'Fire & Movement',
                description: 'Coordination of fires with movement',
                contentModule: 'fire-and-movement',
                icon: 'fas fa-bullseye'
            },
            {
                id: 'tactics-defensive-operations',
                label: 'Defensive Operations',
                description: 'Defense planning and execution',
                contentModule: 'defensive-operations',
                icon: 'fas fa-shield-alt'
            },
            {
                id: 'tactics-offensive-operations',
                label: 'Offensive Operations',
                description: 'Offense planning and execution',
                contentModule: 'offensive-operations',
                icon: 'fas fa-flag-checkered'
            },
            {
                id: 'tactics-reconnaissance-and-security',
                label: 'Recon & Security',
                description: 'Reconnaissance and security operations',
                contentModule: 'reconnaissance-and-security',
                icon: 'fas fa-binoculars'
            },
            {
                id: 'tactics-urban-operations',
                label: 'Urban Operations',
                description: 'Urban operations framework',
                contentModule: 'urban-operations',
                icon: 'fas fa-city'
            }
        ]
    }
};

/**
 * Get navigation item by ID
 * @param {string} itemId - Navigation item ID
 * @returns {Object|null} Navigation item or null if not found
 */
export function getNavigationItem(itemId) {
    for (const category of Object.values(navigationConfig)) {
        if (category.id === itemId) {
            return category;
        }
        
        if (category.items) {
            const item = category.items.find(item => item.id === itemId);
            if (item) {
                return { ...item, category: category.id };
            }
        }
    }
    return null;
}

/**
 * Get all navigation items in a flat array
 * @returns {Array} All navigation items
 */
export function getAllNavigationItems() {
    const items = [];
    
    for (const category of Object.values(navigationConfig)) {
        items.push(category);
        
        if (category.items) {
            items.push(...category.items.map(item => ({ ...item, category: category.id })));
        }
    }
    
    return items;
}

/**
 * Get dropdown items for a category
 * @param {string} categoryId - Category ID (opord, mdmp, jpp)
 * @returns {Array} Dropdown items
 */
export function getDropdownItems(categoryId) {
    const category = navigationConfig[categoryId];
    return category?.items || [];
}

export default navigationConfig;
