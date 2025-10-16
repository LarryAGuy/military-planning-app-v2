/**
 * Tactical Echelon Diagnostic Tool
 * Use this in browser console to diagnose tactical echelon loading issues
 */

window.tacticalEchelonDiagnostic = {
    async runDiagnostic() {
        console.log('🔍 TACTICAL ECHELON DIAGNOSTIC STARTING...');
        console.log('');
        
        // Test 1: Check if files exist and can be imported
        console.log('📁 TEST 1: File Import Test');
        const fileTests = [
            { name: 'Battalion', path: './coa-approval-echelon-battalion.js', func: 'getBattalionCOAApprovalAnalysis' },
            { name: 'Company', path: './coa-approval-echelon-company.js', func: 'getCompanyCOAApprovalAnalysis' },
            { name: 'Squadron', path: './coa-approval-echelon-squadron.js', func: 'getSquadronCOAApprovalAnalysis' },
            { name: 'Platoon', path: './coa-approval-echelon-platoon.js', func: 'getPlatoonCOAApprovalAnalysis' }
        ];
        
        for (const test of fileTests) {
            try {
                const module = await import(test.path);
                const hasFunction = typeof module[test.func] === 'function';
                console.log(`✅ ${test.name}: Import successful, function ${hasFunction ? 'available' : 'missing'}`);
                
                if (hasFunction) {
                    const content = module[test.func]();
                    console.log(`   Content length: ${content.length} characters`);
                }
            } catch (error) {
                console.log(`❌ ${test.name}: Import failed - ${error.message}`);
            }
        }
        
        console.log('');
        
        // Test 2: Check integration module
        console.log('🔗 TEST 2: Integration Module Test');
        try {
            const integrationModule = await import('./coa-approval-echelon-analysis.js');
            console.log('✅ Integration module loaded successfully');
            console.log(`   Module ID: ${integrationModule.echelonAnalysisModule.id}`);
            console.log(`   Module Title: ${integrationModule.echelonAnalysisModule.title}`);
            
            // Test each tactical echelon through integration
            const tacticalEchelons = ['battalion', 'company', 'squadron', 'platoon'];
            for (const echelon of tacticalEchelons) {
                try {
                    const content = await integrationModule.echelonAnalysisModule.getEchelonContent(echelon);
                    console.log(`✅ ${echelon.toUpperCase()}: Integration successful (${content.length} chars)`);
                } catch (error) {
                    console.log(`❌ ${echelon.toUpperCase()}: Integration failed - ${error.message}`);
                }
            }
        } catch (error) {
            console.log(`❌ Integration module failed: ${error.message}`);
        }
        
        console.log('');
        
        // Test 3: Check DOM elements
        console.log('🌐 TEST 3: DOM Element Test');
        const domElements = [
            '.jpp-coa-approval-echelon-area',
            '#universal-jpp-coa-approval-nav',
            '#coa-approval-content-area'
        ];
        
        domElements.forEach(selector => {
            const element = document.querySelector(selector);
            console.log(`${element ? '✅' : '❌'} ${selector}: ${element ? 'Found' : 'Not found'}`);
        });
        
        console.log('');
        
        // Test 4: Check for JavaScript errors
        console.log('⚠️ TEST 4: Error Log Check');
        console.log('Check browser console for any JavaScript errors when clicking tactical echelons');
        console.log('Common issues:');
        console.log('- Module import errors');
        console.log('- Function not found errors');
        console.log('- DOM element not found errors');
        
        console.log('');
        console.log('🔍 DIAGNOSTIC COMPLETE');
        console.log('');
        console.log('💡 TROUBLESHOOTING STEPS:');
        console.log('1. Hard refresh browser (Ctrl+Shift+R)');
        console.log('2. Clear browser cache');
        console.log('3. Check browser console for errors');
        console.log('4. Verify file paths are correct');
        console.log('5. Check network tab for failed module loads');
    },
    
    async testSpecificEchelon(echelon) {
        console.log(`🎯 Testing specific echelon: ${echelon.toUpperCase()}`);
        
        try {
            // Import integration module
            const integrationModule = await import('./coa-approval-echelon-analysis.js');
            
            // Test the specific echelon
            const content = await integrationModule.echelonAnalysisModule.getEchelonContent(echelon);
            console.log(`✅ ${echelon.toUpperCase()} loaded successfully`);
            console.log(`   Content length: ${content.length} characters`);
            console.log(`   Content preview: ${content.substring(0, 200)}...`);
            
            // Try to inject into DOM if area exists
            const area = document.querySelector('.jpp-coa-approval-echelon-area');
            if (area) {
                area.innerHTML = content;
                console.log(`✅ Content injected into DOM successfully`);
            } else {
                console.log(`⚠️ DOM area not found - content not injected`);
            }
            
        } catch (error) {
            console.log(`❌ ${echelon.toUpperCase()} failed: ${error.message}`);
            console.log(`   Stack: ${error.stack}`);
        }
    },
    
    clearCache() {
        console.log('🧹 Attempting to clear module cache...');
        // Note: This won't actually clear ES6 module cache in browser
        // User needs to hard refresh
        console.log('⚠️ Please hard refresh browser (Ctrl+Shift+R) to clear module cache');
    }
};

console.log('🔧 Tactical Echelon Diagnostic Tool loaded');
console.log('Usage:');
console.log('  tacticalEchelonDiagnostic.runDiagnostic() - Run full diagnostic');
console.log('  tacticalEchelonDiagnostic.testSpecificEchelon("battalion") - Test specific echelon');
console.log('  tacticalEchelonDiagnostic.clearCache() - Clear cache instructions');
