/**
 * FallbackProvider - Rule-based AI response system
 * 
 * Provides intelligent responses without external API calls using:
 * - Pattern matching for common questions
 * - Doctrinal reference lookup (FM 5-0, FM 6-0, FM 6-02)
 * - Template suggestions for OPORD, MDMP, JPP
 * - Context-aware responses based on workspace
 * 
 * @class FallbackProvider
 */
export class FallbackProvider {
    constructor() {
        this.name = 'Fallback';
        this.type = 'rule-based';
        this.available = true; // Always available
    }

    /**
     * Generate response using rule-based system
     * @param {string} message - User message
     * @param {Object} context - Workspace context
     * @returns {Promise<Object>} Response object
     */
    async generateResponse(message, context = {}) {
        console.log('🔄 FallbackProvider generating response...');

        const normalizedMessage = message.toLowerCase().trim();

        // Pattern matching for common questions
        const pattern = this.matchPattern(normalizedMessage);
        
        if (pattern) {
            return {
                content: pattern.response,
                provider: this.name,
                timestamp: new Date().toISOString()
            };
        }

        // Context-aware responses
        if (context.workspace) {
            const contextResponse = this.getContextAwareResponse(normalizedMessage, context);
            if (contextResponse) {
                return {
                    content: contextResponse,
                    provider: this.name,
                    timestamp: new Date().toISOString()
                };
            }
        }

        // Default response
        return {
            content: this.getDefaultResponse(context),
            provider: this.name,
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Match message against known patterns
     * @param {string} message - Normalized message
     * @returns {Object|null} Pattern match or null
     */
    matchPattern(message) {
        const patterns = [
            // OPORD Questions
            {
                keywords: ['create', 'opord', 'operation order'],
                response: `To create an OPORD (Operation Order), follow the 5-paragraph format per FM 5-0:

1. **Situation** - Enemy forces, friendly forces, attachments/detachments
2. **Mission** - Who, what, when, where, why (5 Ws)
3. **Execution** - Commander's intent, concept of operations, tasks to subordinate units
4. **Sustainment** - Logistics, personnel services, health service support
5. **Command & Control** - Command, signal, succession of command

Use the OPORD Draft Tool in the workspace to create your order. Click "Draft OPORD" in the navigation menu.`
            },
            {
                keywords: ['opord', 'format', 'structure'],
                response: `OPORD format follows FM 5-0 5-paragraph structure:

**Paragraph 1: SITUATION**
- Enemy forces (SALUTE report)
- Friendly forces (higher HQ mission, adjacent units)
- Attachments and detachments

**Paragraph 2: MISSION**
- Clear, concise statement (who, what, when, where, why)

**Paragraph 3: EXECUTION**
- Commander's intent
- Concept of operations
- Tasks to subordinate units
- Coordinating instructions

**Paragraph 4: SUSTAINMENT**
- Logistics (Classes I-X)
- Personnel services
- Health service support

**Paragraph 5: COMMAND & CONTROL**
- Command (location of commander)
- Signal (frequencies, call signs)
- Succession of command`
            },

            // MDMP Questions
            {
                keywords: ['mdmp', 'military decision making process'],
                response: `The Military Decision Making Process (MDMP) is a 7-step planning process per FM 5-0:

**Step 1: Receipt of Mission** - Initial warning order, time analysis
**Step 2: Mission Analysis** - IPB, terrain analysis, COA criteria
**Step 3: COA Development** - Generate multiple courses of action
**Step 4: COA Analysis** - War-game each COA
**Step 5: COA Comparison** - Compare COAs using decision matrix
**Step 6: COA Approval** - Commander selects COA
**Step 7: Orders Production** - Create OPORD/FRAGORD

Navigate to MDMP in the menu to access detailed guidance for each step.`
            },
            {
                keywords: ['coa', 'course of action'],
                response: `Course of Action (COA) development is MDMP Step 3. A valid COA must be:

✅ **Suitable** - Accomplishes the mission
✅ **Feasible** - Can be accomplished with available resources
✅ **Acceptable** - Risk is justified by expected outcome
✅ **Distinguishable** - Significantly different from other COAs
✅ **Complete** - Addresses all mission requirements

Develop 2-3 COAs minimum, then war-game each in Step 4 (COA Analysis).`
            },

            // JPP Questions
            {
                keywords: ['jpp', 'joint planning process'],
                response: `The Joint Planning Process (JPP) is a 7-step process per JP 5-0:

**Step 1: Planning Initiation** - Strategic guidance, mission analysis
**Step 2: Mission Analysis** - Problem framing, operational approach
**Step 3: COA Development** - Generate multiple COAs
**Step 4: COA Analysis & War-gaming** - Test each COA
**Step 5: COA Comparison** - Decision matrix analysis
**Step 6: COA Approval** - Commander's decision
**Step 7: Plan or Order Development** - Create OPLAN/OPORD

Navigate to JPP in the menu for detailed guidance.`
            },

            // Tactical Questions
            {
                keywords: ['tactical', 'considerations', 'planning'],
                response: `Key tactical considerations for military planning:

**METT-TC Analysis:**
- **Mission** - What is the task and purpose?
- **Enemy** - What are enemy capabilities and COAs?
- **Terrain & Weather** - How does terrain affect operations? (OAKOC)
- **Troops Available** - What forces are available?
- **Time Available** - How much time for planning and execution?
- **Civilian Considerations** - ASCOPE analysis

**OAKOC Terrain Analysis:**
- **Observation & Fields of Fire**
- **Avenues of Approach**
- **Key Terrain**
- **Obstacles**
- **Cover & Concealment**

Use the Mapping & Weather Tool for terrain and weather analysis.`
            },

            // Doctrinal References
            {
                keywords: ['doctrine', 'reference', 'fm', 'atp', 'jp'],
                response: `Key doctrinal references for military planning:

**Operations:**
- FM 5-0 (Nov 2024) - Planning and Orders Production
- FM 6-0 - Commander and Staff Organization and Operations
- FM 3-0 - Operations
- FM 3-90 - Offense and Defense

**Intelligence:**
- FM 2-0 - Intelligence
- ATP 2-01.3 - Intelligence Preparation of the Battlefield

**Fires:**
- FM 3-09 - Field Artillery Operations and Fire Support
- ATP 3-09.30 - Observed Fires

**Sustainment:**
- FM 4-0 - Sustainment Operations

**Joint:**
- JP 5-0 - Joint Planning
- JP 3-0 - Joint Operations

Access educational content in the navigation menu for detailed doctrinal guidance.`
            },

            // Classification Questions
            {
                keywords: ['classification', 'classified', 'secret', 'top secret'],
                response: `Classification guidance per DoD Manual 5200.01:

**Classification Levels:**
- **UNCLASSIFIED** - No damage to national security
- **CONFIDENTIAL** - Damage to national security
- **SECRET** - Serious damage to national security
- **TOP SECRET** - Exceptionally grave damage to national security

**Portion Marking:**
- Mark each paragraph with classification level: (U), (C), (S), (TS)
- Overall classification is highest level in document

**Dissemination Controls:**
- FOUO - For Official Use Only
- NOFORN - Not Releasable to Foreign Nationals
- REL TO - Releasable to specific countries

Use the Classification Picker in the OPORD Draft Tool to manage classification markings.`
            },

            // Help/Suggestions
            {
                keywords: ['help', 'assist', 'guide'],
                response: `I can help you with:

📋 **OPORD Creation** - 5-paragraph format, annexes, classification
🎯 **MDMP Guidance** - 7-step planning process, COA development
🌐 **JPP Planning** - Joint planning process, operational design
📚 **Doctrinal References** - FM 5-0, FM 6-0, FM 3-0, JP 5-0
🗺️ **Tactical Planning** - METT-TC, OAKOC, terrain analysis
🔒 **Classification** - Marking guidance, portion marking

**Quick Actions:**
- Click "OPORD Help" for OPORD creation guidance
- Click "Tactical Guide" for tactical considerations
- Click "Doctrine Ref" for doctrinal references
- Click "Suggestions" for context-aware recommendations

What would you like help with?`
            },

            // Suggestions
            {
                keywords: ['suggest', 'recommendation', 'advice'],
                response: `Based on your current workspace, here are my suggestions:

**Getting Started:**
1. **Define Your Mission** - Start with a clear mission statement (5 Ws)
2. **Analyze the Situation** - Conduct METT-TC analysis
3. **Develop COAs** - Create 2-3 distinct courses of action
4. **Select Planning Process** - Use MDMP for tactical, JPP for operational/strategic

**Tools Available:**
- **OPORD Draft Tool** - Create operation orders with classification
- **Mapping & Weather Tool** - Analyze terrain and weather conditions
- **Educational Content** - Access FM 5-0, MDMP, JPP guidance

**Next Steps:**
- Navigate to "Draft OPORD" to begin creating your order
- Use "Mapping & Weather" for terrain analysis
- Review MDMP/JPP steps for planning guidance

What specific aspect would you like to focus on?`
            }
        ];

        // Find matching pattern
        for (const pattern of patterns) {
            if (pattern.keywords.some(keyword => message.includes(keyword))) {
                return pattern;
            }
        }

        return null;
    }

    /**
     * Get context-aware response based on workspace
     * @param {string} message - Normalized message
     * @param {Object} context - Workspace context
     * @returns {string|null} Context-aware response or null
     */
    getContextAwareResponse(message, context) {
        const { workspace, classification } = context;

        // OPORD Draft workspace
        if (workspace === 'opord-draft') {
            if (message.includes('save') || message.includes('export')) {
                return `To save your OPORD draft:
1. Click the "Save Draft" button in the OPORD Draft Tool
2. Your draft is automatically saved to browser storage
3. To export, click "Export OPORD" to download as a text file

Your draft includes all 5 paragraphs and classification markings.`;
            }
            if (message.includes('classification') || message.includes('marking')) {
                return `Classification marking in OPORD:
- Use the Classification Picker to set overall classification
- Each paragraph is automatically portion-marked
- Current classification: ${classification || 'UNCLASSIFIED'}

Click the classification banner to modify classification settings.`;
            }
        }

        // MDMP workspace
        if (workspace === 'mdmp') {
            if (message.includes('step') || message.includes('next')) {
                return `MDMP is a sequential 7-step process:
1. Receipt of Mission → 2. Mission Analysis → 3. COA Development → 4. COA Analysis → 5. COA Comparison → 6. COA Approval → 7. Orders Production

Navigate through each step in order. Use the navigation menu to access detailed guidance for each step.`;
            }
        }

        // JPP workspace
        if (workspace === 'jpp') {
            if (message.includes('joint') || message.includes('operational')) {
                return `JPP is used for joint and operational-level planning:
- **Tactical Level** - Use MDMP (battalion and below)
- **Operational Level** - Use JPP (brigade and above)
- **Strategic Level** - Use JPP with national-level coordination

JPP integrates joint, interagency, intergovernmental, and multinational (JIIM) considerations.`;
            }
        }

        return null;
    }

    /**
     * Get default response when no pattern matches
     * @param {Object} context - Workspace context
     * @returns {string} Default response
     */
    getDefaultResponse(context) {
        const { workspace } = context;

        const responses = {
            'opord-draft': `I'm here to help with your OPORD creation. You can ask me about:
- OPORD format and structure
- Classification marking
- Saving and exporting drafts
- Specific paragraph guidance

What would you like to know?`,
            'mdmp': `I can help with MDMP planning. Ask me about:
- Any of the 7 MDMP steps
- COA development and analysis
- War-gaming techniques
- Decision matrix comparison

What MDMP topic interests you?`,
            'jpp': `I can assist with JPP planning. Ask me about:
- Joint planning process steps
- Operational design
- JIIM integration
- Strategic considerations

What JPP topic would you like to explore?`,
            'default': `I'm your AI planning assistant. I can help with:

📋 **OPORD** - Operation order creation and formatting
🎯 **MDMP** - Military Decision Making Process
🌐 **JPP** - Joint Planning Process
📚 **Doctrine** - FM 5-0, FM 6-0, JP 5-0 references
🗺️ **Tactics** - METT-TC, OAKOC, terrain analysis

Try asking:
- "How do I create an OPORD?"
- "What is MDMP?"
- "What tactical considerations should I include?"
- "What are the relevant doctrinal references?"

How can I assist you today?`
        };

        return responses[workspace] || responses['default'];
    }

    /**
     * Check provider health
     * @returns {Promise<boolean>} Health status
     */
    async checkHealth() {
        // Fallback provider is always healthy (no external dependencies)
        return true;
    }

    /**
     * Get provider info
     * @returns {Object} Provider information
     */
    getInfo() {
        return {
            name: this.name,
            type: this.type,
            available: this.available,
            description: 'Rule-based AI responses without external API calls',
            features: [
                'Pattern matching for common questions',
                'Doctrinal reference lookup',
                'Context-aware responses',
                'Always available (no network required)'
            ]
        };
    }
}

