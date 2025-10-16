/**
 * Classification Manager
 * Core classification logic and state management for OPORD drafts
 * Handles classification levels, caveats, portion markings, and network authorization
 * 
 * @module ClassificationManager
 */

export class ClassificationManager {
    /**
     * Create a new ClassificationManager
     * @param {Object} eventBus - Event bus for inter-component communication
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
        
        // Current classification state
        this.currentClassification = {
            level: 'UNCLASSIFIED',
            caveats: [],
            releaseAuthority: '',
            portionMarking: '(U)',
            bannerText: 'UNCLASSIFIED',
            networkAuthorization: 'UNCLASSIFIED'
        };
        
        // Base Classification Levels (4 levels per DoD standards)
        // Compound markings like "SECRET//NOFORN" are generated dynamically
        // by combining base level + caveats + release authority
        this.classificationLevels = {
            'UNCLASSIFIED': {
                rank: 0,
                abbreviation: 'U',
                backgroundColor: '#00ff00',
                textColor: '#000000',
                networkAuth: ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET', 'TOP_SECRET'],
                description: 'Information that does not meet the standards for classification'
            },
            'CONFIDENTIAL': {
                rank: 1,
                abbreviation: 'C',
                backgroundColor: '#0000ff',
                textColor: '#ffffff',
                networkAuth: ['CONFIDENTIAL', 'SECRET', 'TOP_SECRET'],
                description: 'Unauthorized disclosure could cause damage to national security'
            },
            'SECRET': {
                rank: 2,
                abbreviation: 'S',
                backgroundColor: '#ff0000',
                textColor: '#ffffff',
                networkAuth: ['SECRET', 'TOP_SECRET'],
                description: 'Unauthorized disclosure could cause serious damage to national security'
            },
            'TOP SECRET': {
                rank: 3,
                abbreviation: 'TS',
                backgroundColor: '#ff8c00',
                textColor: '#000000',
                networkAuth: ['TOP_SECRET'],
                description: 'Unauthorized disclosure could cause exceptionally grave damage to national security'
            }
        };
        
        // Dissemination Controls/Caveats (CAPCO compliant)
        // These are applied to base classification levels dynamically
        this.caveats = {
            'NOFORN': {
                name: 'Not Releasable to Foreign Nationals',
                abbreviation: 'NF',  // Corrected abbreviation per CAPCO
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Information that may not be released to foreign nationals'
            },
            'FOUO': {
                name: 'For Official Use Only',
                abbreviation: 'FOUO',
                applicableTo: ['UNCLASSIFIED'],
                description: 'Unclassified information that requires protection'
            },
            'RELTO': {
                name: 'Releasable To',
                abbreviation: 'REL',  // Corrected abbreviation per CAPCO
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                requiresCountries: true,
                description: 'Information releasable to specific countries'
            },
            'ORCON': {
                name: 'Originator Controlled',
                abbreviation: 'OC',  // Corrected abbreviation per CAPCO
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Dissemination and extraction controlled by originator'
            },
            'IMCON': {
                name: 'Imagery Controlled',
                abbreviation: 'IMCON',
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Imagery-derived information requiring special controls'
            },
            'PROPIN': {
                name: 'Proprietary Information',
                abbreviation: 'PROPIN',
                applicableTo: ['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Proprietary information involved'
            },
            'FGI': {
                name: 'Foreign Government Information',
                abbreviation: 'FGI',
                applicableTo: ['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                requiresCountries: true,
                description: 'Information provided by foreign government'
            },
            'SCI': {
                name: 'Sensitive Compartmented Information',
                abbreviation: 'SCI',
                applicableTo: ['TOP SECRET'],
                description: 'Information concerning intelligence sources and methods'
            },
            'SAP': {
                name: 'Special Access Program',
                abbreviation: 'SAP',
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Special Access Program information'
            },
            'DISPLAY ONLY': {
                name: 'Display Only',
                abbreviation: 'DISPLAY ONLY',
                applicableTo: ['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Information for display only, no copying or reproduction'
            },
            'NOCONTRACTOR': {
                name: 'Not Releasable to Contractors',
                abbreviation: 'NC',
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Information that may not be released to contractors'
            },
            'SBU': {
                name: 'Sensitive But Unclassified',
                abbreviation: 'SBU',
                applicableTo: ['UNCLASSIFIED'],
                description: 'Sensitive but unclassified information'
            },
            'LES': {
                name: 'Law Enforcement Sensitive',
                abbreviation: 'LES',
                applicableTo: ['UNCLASSIFIED'],
                description: 'Law enforcement sensitive information'
            },
            'EYES ONLY': {
                name: 'Eyes Only',
                abbreviation: 'EO',
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'For addressee eyes only'
            }
        };

        // Release authority options
        this.releaseAuthorities = [
            'NOFORN',
            'REL TO USA',
            'REL TO USA, AUS',
            'REL TO USA, AUS, CAN',
            'REL TO USA, AUS, CAN, GBR',
            'REL TO USA, AUS, CAN, GBR, NZL', // Five Eyes
            'REL TO NATO',
            'DISPLAY ONLY'
        ];
        
        // Detect network authorization (disabled by default for local development)
        this.networkAuthorization = this.detectNetworkAuthorization();
        this.currentClassification.networkAuthorization = this.networkAuthorization;
    }
    
    /**
     * Migrate old compound classification levels to new structure
     * @param {string} level - Classification level (may be compound)
     * @param {Array<string>} caveats - Existing caveats
     * @returns {Object} Migrated {level, caveats}
     */
    migrateClassification(level, caveats = []) {
        const migrations = {
            'UNCLASSIFIED//FOUO': { level: 'UNCLASSIFIED', addCaveats: ['FOUO'] },
            'CUI': { level: 'UNCLASSIFIED', addCaveats: [] },  // CUI → UNCLASSIFIED
            'SECRET//NOFORN': { level: 'SECRET', addCaveats: ['NOFORN'] },
            'TOP SECRET//SCI': { level: 'TOP SECRET', addCaveats: ['SCI'] }
        };

        if (migrations[level]) {
            console.warn(`⚠️ Migrating old classification level "${level}" to new structure`);
            const migration = migrations[level];
            const newCaveats = [...new Set([...caveats, ...migration.addCaveats])];
            console.log(`   New structure: Level="${migration.level}", Caveats=[${newCaveats.join(', ')}]`);
            return { level: migration.level, caveats: newCaveats };
        }

        return { level, caveats };
    }

    /**
     * Set classification level, caveats, and release authority
     * @param {string} level - Classification level
     * @param {Array<string>} caveats - Array of caveat names
     * @param {string} releaseAuthority - Release authority (optional)
     * @returns {boolean} Success status
     */
    setClassification(level, caveats = [], releaseAuthority = '') {
        // Migrate old compound levels to new structure
        const migrated = this.migrateClassification(level, caveats);
        level = migrated.level;
        caveats = migrated.caveats;

        // Validate classification level
        if (!this.validateClassification(level)) {
            this.eventBus.emit('classification:error', {
                message: `Invalid classification level: ${level}`
            });
            return false;
        }

        // Check network authorization
        if (!this.isAuthorizedForNetwork(level)) {
            this.eventBus.emit('classification:error', {
                message: `Classification level ${level} not authorized for current network (${this.networkAuthorization})`
            });
            return false;
        }

        // Validate caveats
        const validCaveats = this.validateCaveats(level, caveats);

        // Update current classification
        this.currentClassification = {
            level: level,
            caveats: validCaveats,
            releaseAuthority: releaseAuthority,
            portionMarking: this.generatePortionMarking(level, validCaveats, releaseAuthority),
            bannerText: this.generateBannerText(level, validCaveats, releaseAuthority),
            networkAuthorization: this.networkAuthorization
        };

        // Emit classification changed event
        this.eventBus.emit('classification:changed', this.currentClassification);

        return true;
    }
    
    /**
     * Get current classification
     * @returns {Object} Current classification state
     */
    getClassification() {
        return { ...this.currentClassification };
    }
    
    /**
     * Validate classification level
     * @param {string} level - Classification level to validate
     * @returns {boolean} Valid status
     */
    validateClassification(level) {
        return this.classificationLevels.hasOwnProperty(level);
    }
    
    /**
     * Check if classification level is authorized for current network
     * @param {string} level - Classification level to check
     * @returns {boolean} Authorization status
     */
    isAuthorizedForNetwork(level) {
        const levelInfo = this.classificationLevels[level];
        if (!levelInfo) return false;
        
        return levelInfo.networkAuth.includes(this.networkAuthorization);
    }
    
    /**
     * Order caveats according to DoD precedence rules
     * Ensures proper caveat ordering in classification banners and portion markings
     *
     * DoD Precedence Order:
     * 1. SAP (Special Access Program) - highest precedence
     * 2. SCI (Sensitive Compartmented Information) - second highest
     * 3. Standard DoD order for remaining caveats
     *
     * @param {Array<string>} caveats - Array of caveat names
     * @returns {Array<string>} Ordered array of caveats per DoD standards
     */
    orderCaveatsPerDoD(caveats) {
        const orderedCaveats = [];

        // 1. SAP (Special Access Program) - highest precedence
        if (caveats.includes('SAP')) {
            orderedCaveats.push('SAP');
        }

        // 2. SCI (Sensitive Compartmented Information) - second highest
        if (caveats.includes('SCI')) {
            orderedCaveats.push('SCI');
        }

        // 3. Standard DoD order for remaining caveats
        const standardOrder = [
            'NOFORN',
            'NOCONTRACTOR',
            'ORCON',
            'IMCON',
            'RELTO',
            'PROPIN',
            'FGI',
            'FOUO',
            'SBU',
            'LES',
            'EYES ONLY',
            'DISPLAY ONLY'
        ];

        standardOrder.forEach(caveat => {
            if (caveats.includes(caveat) && !orderedCaveats.includes(caveat)) {
                orderedCaveats.push(caveat);
            }
        });

        // Add any remaining caveats not in standard order (for extensibility)
        caveats.forEach(caveat => {
            if (!orderedCaveats.includes(caveat)) {
                orderedCaveats.push(caveat);
            }
        });

        return orderedCaveats;
    }

    /**
     * Generate banner text from classification, caveats, and release authority
     * Dynamically combines base level + caveats + release authority per CAPCO standards
     * Caveats are ordered per DoD precedence rules
     * @param {string} level - Classification level
     * @param {Array<string>} caveats - Array of caveat names (e.g., ['NOFORN', 'ORCON'])
     * @param {string} releaseAuthority - Release authority (optional)
     * @returns {string} Banner text (e.g., "SECRET//NOFORN//ORCON")
     */
    generateBannerText(level, caveats = [], releaseAuthority = '') {
        let bannerText = level;

        // Order caveats per DoD precedence before adding to banner
        const orderedCaveats = this.orderCaveatsPerDoD(caveats);

        // Add caveats using their full names for banner text
        if (orderedCaveats.length > 0) {
            bannerText += '//' + orderedCaveats.join('//');
        }

        // Add release authority
        if (releaseAuthority && releaseAuthority.trim() !== '') {
            bannerText += '//' + releaseAuthority;
        }

        return bannerText;
    }
    
    /**
     * Generate classification banner HTML
     * @param {string} position - Banner position ('top' or 'bottom')
     * @returns {string} Banner HTML
     */
    generateBannerHTML(position = 'top') {
        const classification = this.currentClassification;
        const levelInfo = this.classificationLevels[classification.level];
        
        return `
            <div class="classification-banner classification-banner-${position}" 
                 style="text-align: center; font-weight: bold; font-size: 14pt; padding: 8px; 
                        background: ${levelInfo.backgroundColor}; color: ${levelInfo.textColor}; 
                        margin-${position === 'top' ? 'bottom' : 'top'}: 20px;">
                ${classification.bannerText}
            </div>
        `;
    }
    
    /**
     * Generate portion marking using abbreviations per CAPCO standards
     * Caveats are ordered per DoD precedence rules
     * @param {string} level - Classification level
     * @param {Array<string>} caveats - Array of caveat names (e.g., ['NOFORN', 'ORCON'])
     * @param {string} releaseAuthority - Release authority (optional)
     * @returns {string} Portion marking (e.g., "(S//NF//OC)")
     */
    generatePortionMarking(level, caveats = [], releaseAuthority = '') {
        const levelInfo = this.classificationLevels[level];
        let marking = levelInfo.abbreviation;

        // Order caveats per DoD precedence before adding to portion marking
        const orderedCaveats = this.orderCaveatsPerDoD(caveats);

        // Add caveat abbreviations
        if (orderedCaveats.length > 0) {
            const caveatAbbreviations = orderedCaveats.map(caveat => {
                const caveatInfo = this.caveats[caveat];
                return caveatInfo ? caveatInfo.abbreviation : caveat;
            });
            marking += '//' + caveatAbbreviations.join('//');
        }

        // Add release authority
        if (releaseAuthority && releaseAuthority.trim() !== '') {
            marking += '//' + releaseAuthority;
        }

        return `(${marking})`;
    }
    
    /**
     * Get authorized portion markings for current network
     * @returns {Array<Object>} Array of authorized portion markings
     */
    getAuthorizedPortionMarkings() {
        const authorized = [];

        for (const [level, info] of Object.entries(this.classificationLevels)) {
            if (this.isAuthorizedForNetwork(level)) {
                authorized.push({
                    level: level,
                    abbreviation: info.abbreviation,
                    marking: `(${info.abbreviation})`,
                    backgroundColor: info.backgroundColor,
                    textColor: info.textColor
                });
            }
        }

        return authorized;
    }

    /**
     * Get available release authorities
     * @returns {Array<string>} Array of release authority options
     */
    getReleaseAuthorities() {
        return [...this.releaseAuthorities];
    }
    
    /**
     * Validate caveats for classification level
     * @param {string} level - Classification level
     * @param {Array<string>} caveats - Array of caveat abbreviations
     * @returns {Array<string>} Valid caveats
     */
    validateCaveats(level, caveats) {
        return caveats.filter(caveat => {
            const caveatInfo = this.caveats[caveat];
            return caveatInfo && caveatInfo.applicableTo.includes(level);
        });
    }
    
    /**
     * Get applicable caveats for classification level
     * @param {string} level - Classification level
     * @returns {Array<Object>} Applicable caveats
     */
    getApplicableCaveats(level) {
        const applicable = [];
        
        for (const [abbr, info] of Object.entries(this.caveats)) {
            if (info.applicableTo.includes(level)) {
                applicable.push({
                    abbreviation: abbr,
                    name: info.name,
                    applicableTo: info.applicableTo
                });
            }
        }
        
        return applicable;
    }
    
    /**
     * Detect network authorization based on domain
     * NOTE: Automatic detection disabled by default for local development
     * Set ENABLE_NETWORK_DETECTION=true to enable in production
     * @returns {string} Network authorization level
     */
    detectNetworkAuthorization() {
        // Check for manual override or disabled auto-detection
        const enableAutoDetection = false; // Set to true in production deployment

        if (!enableAutoDetection) {
            // DEVELOPER MODE: Allow all classification levels for testing
            return 'TOP_SECRET'; // Allows access to all classification levels
        }

        // Automatic network detection (commented for future use)
        /*
        if (typeof window === 'undefined') {
            return 'UNCLASSIFIED'; // Node.js environment
        }

        const hostname = window.location.hostname;

        // TOP SECRET networks
        if (hostname.endsWith('.ic.gov') || hostname.endsWith('.jwics.mil')) {
            return 'TOP_SECRET';
        }

        // SECRET networks
        if (hostname.endsWith('.smil.mil') || hostname.endsWith('.sipr.mil')) {
            return 'SECRET';
        }

        // CONFIDENTIAL/CUI networks
        if (hostname.endsWith('.mil') || hostname.endsWith('.gov')) {
            return 'CONFIDENTIAL';
        }

        // CUI networks
        if (hostname.endsWith('.dod.gov')) {
            return 'CUI';
        }
        */

        return 'TOP_SECRET'; // Default for local development (allows all levels)
    }
    
    /**
     * Get authorized classification levels for current network
     * @returns {Array<Object>} Authorized classification levels
     */
    getAuthorizedClassificationLevels() {
        const authorized = [];
        
        for (const [level, info] of Object.entries(this.classificationLevels)) {
            if (this.isAuthorizedForNetwork(level)) {
                authorized.push({
                    level: level,
                    rank: info.rank,
                    abbreviation: info.abbreviation,
                    backgroundColor: info.backgroundColor,
                    textColor: info.textColor
                });
            }
        }
        
        return authorized.sort((a, b) => a.rank - b.rank);
    }
    
    /**
     * Get classification color
     * @param {string} level - Classification level
     * @returns {string} Background color
     */
    getClassificationColor(level) {
        const levelInfo = this.classificationLevels[level];
        return levelInfo ? levelInfo.backgroundColor : '#cccccc';
    }
    
    /**
     * Get text color for classification
     * @param {string} level - Classification level
     * @returns {string} Text color
     */
    getTextColor(level) {
        const levelInfo = this.classificationLevels[level];
        return levelInfo ? levelInfo.textColor : '#000000';
    }
}

export default ClassificationManager;

