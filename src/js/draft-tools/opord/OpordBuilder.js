/**
 * OPORD Builder
 * Constructs and formats OPORD documents according to FM 5-0 standards
 * Handles document structure, formatting, and content organization
 * 
 * @module OpordBuilder
 */

export class OpordBuilder {
    constructor() {
        this.document = null;
        this.initialized = false;
    }

    /**
     * Initialize builder
     */
    initialize() {
        if (this.initialized) return;
        
        console.log('🔨 OpordBuilder initialized');
        this.initialized = true;
    }

    /**
     * Build complete OPORD document from draft
     */
    buildDocument(draft) {
        this.document = {
            header: this.buildHeader(draft),
            taskOrganization: this.buildTaskOrganization(draft),
            situation: this.buildSituation(draft),
            mission: this.buildMission(draft),
            execution: this.buildExecution(draft),
            sustainment: this.buildSustainment(draft),
            commandControl: this.buildCommandControl(draft),
            annexes: this.buildAnnexes(draft),
            footer: this.buildFooter(draft)
        };

        return this.document;
    }

    /**
     * Build OPORD header
     */
    buildHeader(draft) {
        const classification = draft.classification || 'UNCLASSIFIED';
        const unit = draft.metadata?.unit || '[UNIT DESIGNATION]';
        const location = draft.metadata?.location || '[LOCATION]';
        const dtg = draft.metadata?.dtg || '[DTG]';
        const title = draft.metadata?.title || '[OPERATION NAME]';

        return {
            classification: classification,
            unit: unit,
            location: location,
            dtg: dtg,
            messageId: `OPORD ${draft.metadata?.opordNumber || '[NUMBER]'}`,
            references: draft.metadata?.references || [],
            timeZone: draft.metadata?.timeZone || 'ZULU',
            taskOrganization: 'See Annex A (Task Organization)',
            title: title
        };
    }

    /**
     * Build Task Organization section
     */
    buildTaskOrganization(draft) {
        const content = draft.content?.taskOrganization || {};
        
        return {
            mainCommand: content.mainCommand || '',
            subordinateUnits: content.subordinateUnits || [],
            attachments: content.attachments || [],
            detachments: content.detachments || []
        };
    }

    /**
     * Build Situation section (Paragraph 1)
     */
    buildSituation(draft) {
        const content = draft.content?.situation || {};
        
        return {
            enemyForces: {
                composition: content.enemyComposition || '',
                disposition: content.enemyDisposition || '',
                strength: content.enemyStrength || '',
                recentActivities: content.enemyActivities || '',
                capabilities: content.enemyCapabilities || '',
                weaknesses: content.enemyWeaknesses || '',
                mostLikelyCOA: content.enemyMostLikelyCOA || '',
                mostDangerousCOA: content.enemyMostDangerousCOA || ''
            },
            friendlyForces: {
                higherMission: content.higherMission || '',
                leftUnit: content.leftUnit || '',
                rightUnit: content.rightUnit || '',
                frontUnit: content.frontUnit || '',
                rearUnit: content.rearUnit || ''
            },
            attachmentsDetachments: {
                attachments: content.attachments || [],
                detachments: content.detachments || []
            },
            civilConsiderations: {
                areas: content.civilAreas || '',
                structures: content.civilStructures || '',
                capabilities: content.civilCapabilities || '',
                organizations: content.civilOrganizations || '',
                people: content.civilPeople || '',
                events: content.civilEvents || ''
            },
            terrain: {
                observation: content.terrainObservation || '',
                avenues: content.terrainAvenues || '',
                keyTerrain: content.terrainKey || '',
                obstacles: content.terrainObstacles || '',
                cover: content.terrainCover || ''
            },
            weather: {
                current: content.weatherCurrent || '',
                forecast: content.weatherForecast || '',
                lightData: content.weatherLight || '',
                effects: content.weatherEffects || ''
            }
        };
    }

    /**
     * Build Mission section (Paragraph 2)
     */
    buildMission(draft) {
        const content = draft.content?.mission || {};
        
        return {
            who: content.who || '[UNIT]',
            what: content.what || '[TASK]',
            when: content.when || '[TIME]',
            where: content.where || '[LOCATION]',
            why: content.why || '[PURPOSE]',
            fullStatement: content.fullStatement || this.generateMissionStatement(content)
        };
    }

    /**
     * Generate mission statement from components
     */
    generateMissionStatement(missionContent) {
        const { who, what, when, where, why } = missionContent;
        
        if (!who || !what || !when || !where || !why) {
            return '[MISSION STATEMENT NOT COMPLETE]';
        }

        return `${who} ${what} NLT ${when} at ${where} in order to ${why}.`;
    }

    /**
     * Build Execution section (Paragraph 3)
     */
    buildExecution(draft) {
        const content = draft.content?.execution || {};
        
        return {
            conceptOfOperations: {
                intent: {
                    purpose: content.intentPurpose || '',
                    method: content.intentMethod || '',
                    endState: content.intentEndState || ''
                },
                scheme: content.schemeOfManeuver || '',
                phases: content.phases || []
            },
            tasksToSubordinateUnits: content.tasks || [],
            coordinatingInstructions: {
                timeline: content.timeline || [],
                controlMeasures: content.controlMeasures || [],
                riskReduction: content.riskReduction || [],
                environmental: content.environmental || [],
                fratricide: content.fratricide || []
            }
        };
    }

    /**
     * Build Sustainment section (Paragraph 4)
     */
    buildSustainment(draft) {
        const content = draft.content?.sustainment || {};
        
        return {
            logistics: {
                supply: content.supply || '',
                transportation: content.transportation || '',
                services: content.services || '',
                maintenance: content.maintenance || '',
                distribution: content.distribution || ''
            },
            personnel: {
                strength: content.personnelStrength || '',
                replacements: content.replacements || '',
                awards: content.awards || ''
            },
            healthService: {
                medical: content.medical || '',
                evacuation: content.evacuation || '',
                treatment: content.treatment || ''
            }
        };
    }

    /**
     * Build Command and Signal section (Paragraph 5)
     */
    buildCommandControl(draft) {
        const content = draft.content?.commandControl || {};
        
        return {
            command: {
                location: content.commandLocation || '',
                succession: content.successionOfCommand || [],
                liaison: content.liaisonRequirements || ''
            },
            signal: {
                frequencies: content.frequencies || [],
                callSigns: content.callSigns || [],
                pyrotechnics: content.pyrotechnics || [],
                challenges: content.challenges || '',
                passwords: content.passwords || '',
                reports: content.reports || []
            }
        };
    }

    /**
     * Build Annexes section
     * Supports all 25 annexes per FM 5-0 November 2024 (A-Z excluding O)
     */
    buildAnnexes(draft) {
        const annexes = draft.content?.annexes || {};

        // Build annexes object from the new data structure
        // The annexesSection stores data as { 'A': { title, content, status }, 'B': { ... }, ... }
        const result = {};

        // Map all 25 annexes (A-Z excluding O)
        const annexLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        annexLetters.forEach(letter => {
            if (annexes[letter]) {
                result[letter] = {
                    title: annexes[letter].title || '',
                    content: annexes[letter].content || '',
                    status: annexes[letter].status || 'NOT_STARTED'
                };
            } else {
                result[letter] = null;
            }
        });

        return result;
    }

    /**
     * Build OPORD footer
     */
    buildFooter(draft) {
        const classification = draft.classification || 'UNCLASSIFIED';
        const commander = draft.metadata?.commander || '[COMMANDER NAME]';
        const rank = draft.metadata?.commanderRank || '[RANK]';
        const authenticator = draft.metadata?.authenticator || '[AUTHENTICATOR]';

        return {
            classification: classification,
            commander: commander,
            rank: rank,
            authenticator: authenticator,
            distributionList: draft.metadata?.distribution || []
        };
    }

    /**
     * Format document as text
     */
    formatAsText(document) {
        let text = '';

        // Header
        text += this.formatHeader(document.header);
        text += '\n\n';

        // Task Organization
        text += 'TASK ORGANIZATION\n';
        text += '=================\n';
        text += this.formatTaskOrganization(document.taskOrganization);
        text += '\n\n';

        // 1. Situation
        text += '1. SITUATION\n';
        text += '============\n';
        text += this.formatSituation(document.situation);
        text += '\n\n';

        // 2. Mission
        text += '2. MISSION\n';
        text += '==========\n';
        text += this.formatMission(document.mission);
        text += '\n\n';

        // 3. Execution
        text += '3. EXECUTION\n';
        text += '============\n';
        text += this.formatExecution(document.execution);
        text += '\n\n';

        // 4. Sustainment
        text += '4. SUSTAINMENT\n';
        text += '==============\n';
        text += this.formatSustainment(document.sustainment);
        text += '\n\n';

        // 5. Command and Signal
        text += '5. COMMAND AND SIGNAL\n';
        text += '=====================\n';
        text += this.formatCommandControl(document.commandControl);
        text += '\n\n';

        // Footer
        text += this.formatFooter(document.footer);

        return text;
    }

    // Format helper methods (simplified for now)
    formatHeader(header) {
        return `${header.classification}\n${header.unit}\n${header.location}\n${header.dtg}\n${header.messageId}\n${header.title}`;
    }

    formatTaskOrganization(taskOrg) {
        return JSON.stringify(taskOrg, null, 2);
    }

    formatSituation(situation) {
        return JSON.stringify(situation, null, 2);
    }

    formatMission(mission) {
        return mission.fullStatement;
    }

    formatExecution(execution) {
        return JSON.stringify(execution, null, 2);
    }

    formatSustainment(sustainment) {
        return JSON.stringify(sustainment, null, 2);
    }

    formatCommandControl(commandControl) {
        return JSON.stringify(commandControl, null, 2);
    }

    formatFooter(footer) {
        return `${footer.rank} ${footer.commander}\nAuthenticator: ${footer.authenticator}\n${footer.classification}`;
    }

    /**
     * Get current document
     */
    getDocument() {
        return this.document;
    }

    /**
     * Clear current document
     */
    clearDocument() {
        this.document = null;
    }
}

export default OpordBuilder;

