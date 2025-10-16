/**
 * OPORD Templates
 * Pre-filled OPORD templates for common operations and echelons
 * Based on FM 5-0 doctrinal standards
 * 
 * @module OpordTemplates
 */

export class OpordTemplates {
    constructor() {
        this.templates = this.initializeTemplates();
        this.initialized = false;
    }

    /**
     * Initialize templates
     */
    initializeTemplates() {
        return {
            // Generic doctrinal templates
            'blank': this.getBlankTemplate(),
            'offensive': this.getOffensiveTemplate(),
            'defensive': this.getDefensiveTemplate(),
            'reconnaissance': this.getReconnaissanceTemplate(),
            'security': this.getSecurityTemplate(),
            // Specific templates
            'company-attack': this.getCompanyAttackTemplate(),
            'battalion-defense': this.getBattalionDefenseTemplate(),
            'training-exercise': this.getTrainingExerciseTemplate(),
            'platoon-patrol': this.getPlatoonPatrolTemplate(),
            'brigade-movement': this.getBrigadeMovementTemplate()
        };
    }

    /**
     * Initialize template system
     */
    initialize() {
        if (this.initialized) return;
        
        console.log('📋 OpordTemplates initialized');
        this.initialized = true;
    }

    /**
     * Get template by ID
     */
    getTemplate(templateId) {
        return this.templates[templateId] || null;
    }

    /**
     * Get all available templates
     */
    getAllTemplates() {
        return Object.keys(this.templates).map(id => ({
            id: id,
            name: this.getTemplateName(id),
            description: this.getTemplateDescription(id),
            echelon: this.getTemplateEchelon(id),
            operationType: this.getTemplateOperationType(id)
        }));
    }

    /**
     * Get template name
     */
    getTemplateName(templateId) {
        const names = {
            'blank': 'Blank OPORD',
            'offensive': 'Offensive Operations',
            'defensive': 'Defensive Operations',
            'reconnaissance': 'Reconnaissance Operations',
            'security': 'Security Operations',
            'company-attack': 'Company Attack',
            'battalion-defense': 'Battalion Defense',
            'training-exercise': 'Training Exercise',
            'platoon-patrol': 'Platoon Patrol',
            'brigade-movement': 'Brigade Movement to Contact'
        };
        return names[templateId] || templateId;
    }

    /**
     * Get template description
     */
    getTemplateDescription(templateId) {
        const descriptions = {
            'blank': 'Empty OPORD template with no pre-filled content',
            'offensive': 'Generic offensive operations template based on FM 3-90',
            'defensive': 'Generic defensive operations template based on FM 3-90',
            'reconnaissance': 'Generic reconnaissance operations template based on FM 3-90',
            'security': 'Generic security operations template based on FM 3-90',
            'company-attack': 'Company-level offensive operation template with task organization and fire support',
            'battalion-defense': 'Battalion defensive operation template with engagement areas and obstacles',
            'training-exercise': 'Training exercise template with safety considerations and evaluation criteria',
            'platoon-patrol': 'Platoon-level patrol operation template with movement and actions on objective',
            'brigade-movement': 'Brigade movement to contact template with advance guard and main body'
        };
        return descriptions[templateId] || '';
    }

    /**
     * Get template echelon
     */
    getTemplateEchelon(templateId) {
        const echelons = {
            'blank': 'Any',
            'offensive': 'Any',
            'defensive': 'Any',
            'reconnaissance': 'Any',
            'security': 'Any',
            'company-attack': 'Company',
            'battalion-defense': 'Battalion',
            'training-exercise': 'Company',
            'platoon-patrol': 'Platoon',
            'brigade-movement': 'Brigade'
        };
        return echelons[templateId] || 'Unknown';
    }

    /**
     * Get template operation type
     */
    getTemplateOperationType(templateId) {
        const types = {
            'blank': 'Generic',
            'offensive': 'Offensive',
            'defensive': 'Defensive',
            'reconnaissance': 'Reconnaissance',
            'security': 'Security',
            'company-attack': 'Offensive',
            'battalion-defense': 'Defensive',
            'training-exercise': 'Training',
            'platoon-patrol': 'Offensive',
            'brigade-movement': 'Offensive'
        };
        return types[templateId] || 'Unknown';
    }

    /**
     * Company Attack Template
     */
    getCompanyAttackTemplate() {
        return {
            metadata: {
                title: 'Company Attack Operation',
                unit: 'Alpha Company, 1-87th Infantry Regiment',
                location: 'Training Area 12',
                dtg: '',
                opordNumber: '01-25',
                commander: 'CPT John Smith',
                commanderRank: 'CPT',
                timeZone: 'ZULU'
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Enemy platoon-sized element (30-40 personnel) with crew-served weapons',
                    enemyDisposition: 'Defending from prepared positions in Objective ALPHA',
                    enemyCapabilities: 'Capable of direct fire defense, limited indirect fire support',
                    higherMission: 'Battalion attacks to seize OBJ BRAVO NLT 151200Z JAN 25',
                    leftUnit: 'Bravo Company attacking OBJ CHARLIE',
                    rightUnit: 'Charlie Company in reserve',
                    terrainKey: 'Hill 203 provides observation over objective area',
                    terrainObstacles: 'Creek line 500m south of objective',
                    weatherCurrent: 'Clear, temperature 15°C, wind 5 kts from west'
                },
                mission: {
                    who: 'Alpha Company, 1-87th Infantry Regiment',
                    what: 'attacks to seize OBJ ALPHA',
                    when: '151200Z JAN 25',
                    where: 'vic grid AB 123456',
                    why: 'to enable battalion seizure of OBJ BRAVO',
                    fullStatement: 'Alpha Company, 1-87th Infantry Regiment attacks to seize OBJ ALPHA NLT 151200Z JAN 25 vic grid AB 123456 in order to enable battalion seizure of OBJ BRAVO.'
                },
                execution: {
                    intentPurpose: 'Destroy enemy forces on OBJ ALPHA',
                    intentMethod: 'Conduct hasty attack with two platoons forward, one in reserve',
                    intentEndState: 'Enemy destroyed, OBJ ALPHA secured, company prepared for follow-on operations',
                    schemeOfManeuver: '1st and 2nd Platoons attack abreast from LD BLUE, 3rd Platoon follows in reserve. Breach obstacle at PL RED, assault OBJ ALPHA from south.',
                    tasks: [
                        '1st Platoon: Main effort, seize eastern half of OBJ ALPHA',
                        '2nd Platoon: Supporting effort, seize western half of OBJ ALPHA',
                        '3rd Platoon: Reserve, prepared to exploit success or reinforce'
                    ],
                    timeline: [
                        'H-30: Cross LD BLUE',
                        'H-15: Reach PL RED, breach obstacle',
                        'H-Hour: Assault OBJ ALPHA',
                        'H+15: Consolidate and reorganize'
                    ]
                },
                sustainment: {
                    supply: 'Class III and V resupply at OBJ ALPHA after consolidation',
                    medical: 'CCP established at PL RED, MEDEVAC via ground to BAS',
                    maintenance: 'Recovery assets on call from battalion'
                },
                commandControl: {
                    commandLocation: 'Company CP follows 3rd Platoon',
                    successionOfCommand: ['Company Commander', 'Company XO', '1st Platoon Leader'],
                    frequencies: ['Company Net: 54.000 MHz', 'Battalion Net: 52.000 MHz'],
                    callSigns: ['Alpha 6 (CO)', 'Alpha 5 (XO)', 'Alpha 1 (1st PLT)']
                }
            }
        };
    }

    /**
     * Battalion Defense Template
     */
    getBattalionDefenseTemplate() {
        return {
            metadata: {
                title: 'Battalion Defense Operation',
                unit: '1-87th Infantry Regiment',
                location: 'Battle Position STEEL',
                dtg: '',
                opordNumber: '02-25',
                commander: 'LTC Jane Doe',
                commanderRank: 'LTC',
                timeZone: 'ZULU'
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Enemy battalion (400-600 personnel) with armor and artillery support',
                    enemyDisposition: 'Attacking from north along Highway 1',
                    enemyCapabilities: 'Capable of combined arms attack with indirect fire support',
                    higherMission: 'Brigade defends to defeat enemy attack and retain key terrain',
                    leftUnit: '2-87th Infantry defending BP IRON',
                    rightUnit: '3-87th Infantry defending BP BRONZE'
                },
                mission: {
                    who: '1-87th Infantry Regiment',
                    what: 'defends Battle Position STEEL',
                    when: '201800Z JAN 25',
                    where: 'vic grid CD 789012',
                    why: 'to defeat enemy attack and retain key terrain',
                    fullStatement: '1-87th Infantry Regiment defends Battle Position STEEL NLT 201800Z JAN 25 vic grid CD 789012 in order to defeat enemy attack and retain key terrain.'
                },
                execution: {
                    intentPurpose: 'Defeat enemy battalion attack',
                    intentMethod: 'Defense in depth with engagement areas and obstacles',
                    intentEndState: 'Enemy defeated, BP STEEL retained, battalion prepared for counterattack',
                    schemeOfManeuver: 'Alpha and Bravo Companies defend forward, Charlie Company in depth, Delta Company (reserve) prepared to counterattack.'
                },
                sustainment: {
                    supply: 'Class V push at H-6 and H+12',
                    medical: 'BAS located at grid CD 780010',
                    maintenance: 'UMCP at grid CD 775005'
                },
                commandControl: {
                    commandLocation: 'Battalion TOC at grid CD 770000',
                    successionOfCommand: ['Battalion Commander', 'Battalion XO', 'S3'],
                    frequencies: ['Battalion Command Net: 50.000 MHz', 'Brigade Net: 48.000 MHz']
                }
            }
        };
    }

    /**
     * Training Exercise Template
     */
    getTrainingExerciseTemplate() {
        return {
            metadata: {
                title: 'Company Training Exercise',
                unit: 'Alpha Company, 1-87th Infantry Regiment',
                location: 'Training Area 5',
                dtg: '',
                opordNumber: 'TRN-01-25',
                commander: 'CPT John Smith',
                commanderRank: 'CPT',
                timeZone: 'LOCAL'
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'OPFOR platoon (training scenario)',
                    higherMission: 'Battalion conducts training to improve combat readiness',
                    weatherCurrent: 'Training weather conditions apply'
                },
                mission: {
                    who: 'Alpha Company',
                    what: 'conducts training exercise',
                    when: '251000L JAN 25',
                    where: 'Training Area 5',
                    why: 'to improve squad and platoon tactics',
                    fullStatement: 'Alpha Company conducts training exercise NLT 251000L JAN 25 at Training Area 5 in order to improve squad and platoon tactics.'
                },
                execution: {
                    intentPurpose: 'Train squad and platoon leaders in tactical decision-making',
                    intentMethod: 'Force-on-force training with MILES gear',
                    intentEndState: 'All platoons complete training objectives, AAR conducted',
                    schemeOfManeuver: 'Platoons rotate through training lanes with OPFOR opposition'
                },
                sustainment: {
                    supply: 'Blank ammunition and MILES batteries issued at start point',
                    medical: 'Aid station at Training Area 5 HQ, ambulance on standby'
                },
                commandControl: {
                    commandLocation: 'Training Area 5 TOC',
                    frequencies: ['Training Net: 60.000 MHz', 'Safety Net: 61.000 MHz']
                }
            }
        };
    }

    /**
     * Platoon Patrol Template
     */
    getPlatoonPatrolTemplate() {
        return {
            metadata: {
                title: 'Platoon Patrol Operation',
                unit: '1st Platoon, Alpha Company',
                location: 'Patrol Base HAWK',
                dtg: '',
                opordNumber: 'PTL-01-25'
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Unknown enemy activity in patrol area',
                    higherMission: 'Company conducts reconnaissance of zone'
                },
                mission: {
                    who: '1st Platoon',
                    what: 'conducts patrol',
                    when: '301400Z JAN 25',
                    where: 'from PB HAWK to OBJ EAGLE',
                    why: 'to gather intelligence on enemy activity'
                },
                execution: {
                    intentPurpose: 'Gather intelligence without decisive engagement',
                    intentMethod: 'Stealth movement with observation posts',
                    intentEndState: 'Intelligence gathered, platoon returns to PB HAWK'
                }
            }
        };
    }

    /**
     * Brigade Movement Template
     */
    getBrigadeMovementTemplate() {
        return {
            metadata: {
                title: 'Brigade Movement to Contact',
                unit: '1st Brigade Combat Team',
                location: 'Assembly Area THUNDER',
                dtg: '',
                opordNumber: '03-25'
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Enemy brigade-sized element withdrawing north',
                    higherMission: 'Division pursues enemy forces'
                },
                mission: {
                    who: '1st Brigade Combat Team',
                    what: 'conducts movement to contact',
                    when: '051200Z FEB 25',
                    where: 'along Axis LIGHTNING',
                    why: 'to maintain contact with withdrawing enemy forces'
                },
                execution: {
                    intentPurpose: 'Maintain pressure on enemy withdrawal',
                    intentMethod: 'Movement to contact with advance guard',
                    intentEndState: 'Enemy located, brigade prepared to attack'
                }
            }
        };
    }

    /**
     * Blank Template
     */
    getBlankTemplate() {
        return {
            metadata: {
                title: '',
                unit: '',
                location: '',
                dtg: '',
                opordNumber: ''
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {},
                mission: {},
                execution: {},
                sustainment: {},
                commandControl: {},
                annexes: {}
            }
        };
    }

    /**
     * Offensive Operations Template
     */
    getOffensiveTemplate() {
        return {
            metadata: {
                title: 'Offensive Operation',
                unit: '',
                location: '',
                dtg: '',
                opordNumber: ''
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Enemy forces in defensive positions',
                    enemyDisposition: 'Defending key terrain',
                    enemyCapabilities: 'Capable of direct and indirect fire defense',
                    higherMission: 'Higher headquarters conducts offensive operations',
                    terrainKey: 'Key terrain provides observation and fields of fire'
                },
                mission: {
                    who: '[Unit]',
                    what: 'attacks to seize [Objective]',
                    when: '[DTG]',
                    where: '[Location]',
                    why: 'to [Purpose]',
                    fullStatement: '[Unit] attacks to seize [Objective] NLT [DTG] at [Location] in order to [Purpose].'
                },
                execution: {
                    intentPurpose: 'Destroy enemy forces and seize key terrain',
                    intentMethod: 'Conduct deliberate attack with combined arms',
                    intentEndState: 'Enemy destroyed, objective secured, unit prepared for follow-on operations',
                    schemeOfManeuver: 'Main effort attacks along [Axis], supporting effort secures [Flank].'
                },
                sustainment: {
                    supply: 'Class III and V resupply at [Location/Time]',
                    medical: 'CCP established at [Location], MEDEVAC via [Method]',
                    maintenance: 'Recovery assets on call'
                },
                commandControl: {
                    commandLocation: '[Unit] CP at [Location]',
                    successionOfCommand: ['Commander', 'XO', 'S3'],
                    frequencies: ['Command Net: [Frequency]', 'Admin Net: [Frequency]']
                }
            }
        };
    }

    /**
     * Defensive Operations Template
     */
    getDefensiveTemplate() {
        return {
            metadata: {
                title: 'Defensive Operation',
                unit: '',
                location: '',
                dtg: '',
                opordNumber: ''
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Enemy forces conducting offensive operations',
                    enemyDisposition: 'Attacking from [Direction]',
                    enemyCapabilities: 'Capable of combined arms attack with fire support',
                    higherMission: 'Higher headquarters defends to retain key terrain',
                    terrainKey: 'Key terrain provides defensive advantage'
                },
                mission: {
                    who: '[Unit]',
                    what: 'defends [Battle Position/Area]',
                    when: '[DTG]',
                    where: '[Location]',
                    why: 'to defeat enemy attack and retain key terrain',
                    fullStatement: '[Unit] defends [Battle Position] NLT [DTG] at [Location] in order to defeat enemy attack and retain key terrain.'
                },
                execution: {
                    intentPurpose: 'Defeat enemy attack and retain key terrain',
                    intentMethod: 'Defense in depth with engagement areas and obstacles',
                    intentEndState: 'Enemy defeated, battle position retained, unit prepared for counterattack',
                    schemeOfManeuver: 'Forward units defend engagement areas, reserve prepared to counterattack.'
                },
                sustainment: {
                    supply: 'Class V push at [Time intervals]',
                    medical: 'BAS located at [Location]',
                    maintenance: 'UMCP at [Location]'
                },
                commandControl: {
                    commandLocation: '[Unit] TOC at [Location]',
                    successionOfCommand: ['Commander', 'XO', 'S3'],
                    frequencies: ['Command Net: [Frequency]', 'Admin Net: [Frequency]']
                }
            }
        };
    }

    /**
     * Reconnaissance Operations Template
     */
    getReconnaissanceTemplate() {
        return {
            metadata: {
                title: 'Reconnaissance Operation',
                unit: '',
                location: '',
                dtg: '',
                opordNumber: ''
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Unknown enemy activity in reconnaissance area',
                    enemyDisposition: 'Enemy locations and strength unknown',
                    enemyCapabilities: 'Capable of detecting and engaging reconnaissance elements',
                    higherMission: 'Higher headquarters conducts reconnaissance to gather intelligence',
                    terrainKey: 'Terrain provides concealment for reconnaissance'
                },
                mission: {
                    who: '[Unit]',
                    what: 'conducts reconnaissance of [Area/Zone/Route]',
                    when: '[DTG]',
                    where: '[Location]',
                    why: 'to gather intelligence on enemy forces and terrain',
                    fullStatement: '[Unit] conducts reconnaissance of [Area] NLT [DTG] at [Location] in order to gather intelligence on enemy forces and terrain.'
                },
                execution: {
                    intentPurpose: 'Gather intelligence without decisive engagement',
                    intentMethod: 'Stealth movement with observation and reporting',
                    intentEndState: 'Intelligence gathered, unit returns without detection',
                    schemeOfManeuver: 'Reconnaissance elements move along [Routes], establish OPs at [Locations].'
                },
                sustainment: {
                    supply: 'Self-sufficient for [Duration]',
                    medical: 'MEDEVAC via [Method]',
                    maintenance: 'Recovery on call'
                },
                commandControl: {
                    commandLocation: '[Unit] CP at [Location]',
                    successionOfCommand: ['Commander', 'XO', 'Senior NCO'],
                    frequencies: ['Command Net: [Frequency]', 'Report Net: [Frequency]']
                }
            }
        };
    }

    /**
     * Security Operations Template
     */
    getSecurityTemplate() {
        return {
            metadata: {
                title: 'Security Operation',
                unit: '',
                location: '',
                dtg: '',
                opordNumber: ''
            },
            classification: 'UNCLASSIFIED',
            content: {
                situation: {
                    enemyComposition: 'Enemy forces capable of attacking protected force',
                    enemyDisposition: 'Enemy locations and intentions unknown',
                    enemyCapabilities: 'Capable of reconnaissance and attack',
                    higherMission: 'Higher headquarters conducts security operations to protect main body',
                    terrainKey: 'Terrain provides early warning positions'
                },
                mission: {
                    who: '[Unit]',
                    what: 'conducts [Screen/Guard/Cover] operation',
                    when: '[DTG]',
                    where: '[Location]',
                    why: 'to provide early warning and protection for main body',
                    fullStatement: '[Unit] conducts [Screen/Guard/Cover] operation NLT [DTG] at [Location] in order to provide early warning and protection for main body.'
                },
                execution: {
                    intentPurpose: 'Provide early warning and protection for main body',
                    intentMethod: 'Establish security positions with observation and engagement capability',
                    intentEndState: 'Main body protected, enemy detected and reported',
                    schemeOfManeuver: 'Security elements establish positions along [Line], report enemy contact.'
                },
                sustainment: {
                    supply: 'Resupply at [Time/Location]',
                    medical: 'MEDEVAC via [Method]',
                    maintenance: 'Recovery on call'
                },
                commandControl: {
                    commandLocation: '[Unit] CP at [Location]',
                    successionOfCommand: ['Commander', 'XO', 'Senior NCO'],
                    frequencies: ['Command Net: [Frequency]', 'Report Net: [Frequency]']
                }
            }
        };
    }
}

export default OpordTemplates;

