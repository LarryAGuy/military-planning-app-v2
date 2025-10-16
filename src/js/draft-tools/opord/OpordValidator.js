/**
 * OPORD Validator
 * Validates OPORD drafts for completeness and FM 5-0 compliance
 * Provides validation feedback and error reporting
 * 
 * @module OpordValidator
 */

export class OpordValidator {
    constructor() {
        this.validationRules = this.initializeValidationRules();
        this.initialized = false;
    }

    /**
     * Initialize validation rules
     */
    initializeValidationRules() {
        return {
            required: {
                metadata: ['title', 'dtg', 'unit'],
                mission: ['who', 'what', 'when', 'where', 'why'],
                situation: [],
                execution: ['conceptOfOperations'],
                sustainment: [],
                commandControl: []
            },
            formats: {
                dtg: /^\d{6}Z\s[A-Z]{3}\s\d{4}$/,
                classification: ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET']
            }
        };
    }

    /**
     * Initialize validator
     */
    initialize() {
        if (this.initialized) return;
        
        console.log('✅ OpordValidator initialized');
        this.initialized = true;
    }

    /**
     * Validate complete OPORD draft
     */
    validate(draft) {
        const errors = [];
        const warnings = [];
        const info = [];

        // Validate metadata
        const metadataValidation = this.validateMetadata(draft);
        errors.push(...metadataValidation.errors);
        warnings.push(...metadataValidation.warnings);

        // Validate classification
        const classificationValidation = this.validateClassification(draft);
        errors.push(...classificationValidation.errors);
        warnings.push(...classificationValidation.warnings);

        // Validate mission statement
        const missionValidation = this.validateMission(draft);
        errors.push(...missionValidation.errors);
        warnings.push(...missionValidation.warnings);

        // Validate situation
        const situationValidation = this.validateSituation(draft);
        warnings.push(...situationValidation.warnings);
        info.push(...situationValidation.info);

        // Validate execution
        const executionValidation = this.validateExecution(draft);
        warnings.push(...executionValidation.warnings);
        info.push(...executionValidation.info);

        // Validate sustainment
        const sustainmentValidation = this.validateSustainment(draft);
        warnings.push(...sustainmentValidation.warnings);

        // Validate command and control
        const commandControlValidation = this.validateCommandControl(draft);
        warnings.push(...commandControlValidation.warnings);

        // Validate annexes
        const annexesValidation = this.validateAnnexes(draft);
        warnings.push(...annexesValidation.warnings);
        info.push(...annexesValidation.info);

        return {
            valid: errors.length === 0,
            errors: errors,
            warnings: warnings,
            info: info,
            summary: this.generateValidationSummary(errors, warnings, info)
        };
    }

    /**
     * Validate metadata
     */
    validateMetadata(draft) {
        const errors = [];
        const warnings = [];

        if (!draft.metadata) {
            errors.push('Metadata is missing');
            return { errors, warnings };
        }

        // Check required fields
        const requiredFields = this.validationRules.required.metadata;
        for (const field of requiredFields) {
            if (!draft.metadata[field] || draft.metadata[field].trim() === '') {
                errors.push(`Metadata field '${field}' is required`);
            }
        }

        // Validate DTG format
        if (draft.metadata.dtg && !this.validationRules.formats.dtg.test(draft.metadata.dtg)) {
            warnings.push('DTG format should be DDHHMMZ MMM YYYY (e.g., 151200Z JAN 2025)');
        }

        // Check for unit designation
        if (draft.metadata.unit && draft.metadata.unit.includes('[')) {
            warnings.push('Unit designation contains placeholder text');
        }

        return { errors, warnings };
    }

    /**
     * Validate classification
     */
    validateClassification(draft) {
        const errors = [];
        const warnings = [];

        if (!draft.classification) {
            errors.push('Classification level is required');
            return { errors, warnings };
        }

        // Check valid classification
        if (!this.validationRules.formats.classification.includes(draft.classification)) {
            errors.push(`Invalid classification level: ${draft.classification}`);
        }

        return { errors, warnings };
    }

    /**
     * Validate mission statement
     */
    validateMission(draft) {
        const errors = [];
        const warnings = [];

        if (!draft.content || !draft.content.mission) {
            errors.push('Mission section is missing');
            return { errors, warnings };
        }

        const mission = draft.content.mission;

        // Check required mission elements (5 W's)
        const requiredElements = this.validationRules.required.mission;
        for (const element of requiredElements) {
            if (!mission[element] || mission[element].trim() === '') {
                errors.push(`Mission element '${element}' is required`);
            }
        }

        // Check for placeholder text
        for (const [key, value] of Object.entries(mission)) {
            if (typeof value === 'string' && value.includes('[')) {
                warnings.push(`Mission ${key} contains placeholder text`);
            }
        }

        // Validate mission statement structure
        if (mission.fullStatement) {
            if (!mission.fullStatement.includes('in order to')) {
                warnings.push('Mission statement should include "in order to" for purpose');
            }
            if (!mission.fullStatement.includes('NLT')) {
                warnings.push('Mission statement should include "NLT" (No Later Than) for timing');
            }
        }

        return { errors, warnings };
    }

    /**
     * Validate situation section
     */
    validateSituation(draft) {
        const warnings = [];
        const info = [];

        if (!draft.content || !draft.content.situation) {
            warnings.push('Situation section is empty');
            return { warnings, info };
        }

        const situation = draft.content.situation;

        // Check for enemy forces information
        if (!situation.enemyComposition && !situation.enemyDisposition) {
            warnings.push('Enemy forces information is incomplete');
        }

        // Check for friendly forces information
        if (!situation.higherMission) {
            warnings.push('Higher unit mission is not specified');
        }

        // Check for terrain analysis (OAKOC)
        const terrainElements = ['terrainObservation', 'terrainAvenues', 'terrainKey', 'terrainObstacles', 'terrainCover'];
        const missingTerrain = terrainElements.filter(el => !situation[el]);
        if (missingTerrain.length > 0) {
            info.push(`Consider adding terrain analysis: ${missingTerrain.join(', ')}`);
        }

        return { warnings, info };
    }

    /**
     * Validate execution section
     */
    validateExecution(draft) {
        const warnings = [];
        const info = [];

        if (!draft.content || !draft.content.execution) {
            warnings.push('Execution section is empty');
            return { warnings, info };
        }

        const execution = draft.content.execution;

        // Check for commander's intent
        if (!execution.intentPurpose || !execution.intentMethod || !execution.intentEndState) {
            warnings.push('Commander\'s intent is incomplete (purpose, method, end state)');
        }

        // Check for scheme of maneuver
        if (!execution.schemeOfManeuver) {
            warnings.push('Scheme of maneuver is not specified');
        }

        // Check for tasks to subordinate units
        if (!execution.tasks || execution.tasks.length === 0) {
            info.push('Consider adding tasks to subordinate units');
        }

        // Check for coordinating instructions
        if (!execution.timeline || execution.timeline.length === 0) {
            info.push('Consider adding timeline/synchronization matrix');
        }

        return { warnings, info };
    }

    /**
     * Validate sustainment section
     */
    validateSustainment(draft) {
        const warnings = [];

        if (!draft.content || !draft.content.sustainment) {
            warnings.push('Sustainment section is empty');
            return { warnings };
        }

        const sustainment = draft.content.sustainment;

        // Check for logistics information
        if (!sustainment.supply && !sustainment.transportation) {
            warnings.push('Logistics information is incomplete');
        }

        // Check for medical support
        if (!sustainment.medical && !sustainment.evacuation) {
            warnings.push('Medical support information is incomplete');
        }

        return { warnings };
    }

    /**
     * Validate command and control section
     */
    validateCommandControl(draft) {
        const warnings = [];

        if (!draft.content || !draft.content.commandControl) {
            warnings.push('Command and Control section is empty');
            return { warnings };
        }

        const commandControl = draft.content.commandControl;

        // Check for command post location
        if (!commandControl.commandLocation) {
            warnings.push('Command post location is not specified');
        }

        // Check for succession of command
        if (!commandControl.successionOfCommand || commandControl.successionOfCommand.length === 0) {
            warnings.push('Succession of command is not specified');
        }

        // Check for signal information
        if (!commandControl.frequencies || commandControl.frequencies.length === 0) {
            warnings.push('Radio frequencies are not specified');
        }

        if (!commandControl.callSigns || commandControl.callSigns.length === 0) {
            warnings.push('Call signs are not specified');
        }

        return { warnings };
    }

    /**
     * Generate validation summary
     */
    generateValidationSummary(errors, warnings, info) {
        let summary = '';

        if (errors.length === 0 && warnings.length === 0) {
            summary = '✅ OPORD validation passed with no errors or warnings';
        } else if (errors.length === 0) {
            summary = `⚠️ OPORD validation passed with ${warnings.length} warning(s)`;
        } else {
            summary = `❌ OPORD validation failed with ${errors.length} error(s) and ${warnings.length} warning(s)`;
        }

        return summary;
    }

    /**
     * Validate annexes
     */
    validateAnnexes(draft) {
        const warnings = [];
        const info = [];

        if (!draft.content || !draft.content.annexes) {
            info.push('No annexes specified');
            return { warnings, info };
        }

        const annexes = draft.content.annexes;

        // Check for required annexes (A, B, C, D, F per FM 5-0)
        const requiredAnnexes = {
            'A': 'Task Organization',
            'B': 'Intelligence',
            'C': 'Operations',
            'D': 'Fires',
            'F': 'Sustainment'
        };

        for (const [letter, title] of Object.entries(requiredAnnexes)) {
            if (!annexes[letter] || !annexes[letter].content) {
                warnings.push(`Required Annex ${letter} (${title}) is missing or has no content`);
            } else if (annexes[letter].status === 'NOT_STARTED') {
                warnings.push(`Required Annex ${letter} (${title}) is marked as 'Not Started'`);
            }
        }

        // Count active annexes
        const activeAnnexes = Object.keys(annexes).filter(letter =>
            annexes[letter] && annexes[letter].content && annexes[letter].status !== 'NOT_APPLICABLE'
        );

        if (activeAnnexes.length === 0) {
            warnings.push('No annexes have been activated or have content');
        } else {
            info.push(`${activeAnnexes.length} annex(es) included in OPORD`);
        }

        return { warnings, info };
    }

    /**
     * Validate specific section
     */
    validateSection(draft, sectionName) {
        switch (sectionName) {
            case 'metadata':
                return this.validateMetadata(draft);
            case 'classification':
                return this.validateClassification(draft);
            case 'mission':
                return this.validateMission(draft);
            case 'situation':
                return this.validateSituation(draft);
            case 'execution':
                return this.validateExecution(draft);
            case 'sustainment':
                return this.validateSustainment(draft);
            case 'commandControl':
                return this.validateCommandControl(draft);
            case 'annexes':
                return this.validateAnnexes(draft);
            default:
                return { errors: [], warnings: [], info: [] };
        }
    }

    /**
     * Check if draft is complete
     */
    isComplete(draft) {
        const validation = this.validate(draft);
        return validation.valid && validation.warnings.length === 0;
    }

    /**
     * Get completion percentage
     */
    getCompletionPercentage(draft) {
        const totalChecks = 20; // Approximate number of validation checks
        const validation = this.validate(draft);
        const issues = validation.errors.length + validation.warnings.length;
        const completed = Math.max(0, totalChecks - issues);
        
        return Math.round((completed / totalChecks) * 100);
    }
}

export default OpordValidator;

