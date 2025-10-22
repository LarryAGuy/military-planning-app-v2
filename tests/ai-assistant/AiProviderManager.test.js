/**
 * Unit tests for AiProviderManager
 * 
 * Tests:
 * - Provider initialization
 * - Provider selection logic
 * - Classification-aware filtering
 * - Fallback cascade
 * - Health checks
 * - Response generation
 * - Error handling
 * - EventBus integration
 */

import { AiProviderManager } from '../../src/js/ai-assistant/AiProviderManager.js';
import { EventBus } from '../../src/js/utils/EventBus.js';

describe('AiProviderManager', () => {
    let manager;
    let eventBus;
    let eventBusSpy;

    beforeEach(() => {
        // Create EventBus instance
        eventBus = new EventBus();

        // Create AiProviderManager with EventBus instance
        manager = new AiProviderManager(eventBus);

        // Spy on EventBus emit
        eventBusSpy = jest.spyOn(eventBus, 'emit');
    });

    afterEach(() => {
        eventBusSpy.mockRestore();
    });

    describe('Initialization', () => {
        test('should initialize with providers', () => {
            expect(manager.providers.size).toBeGreaterThan(0);
        });

        test('should have Fallback provider', () => {
            expect(manager.providers.has('fallback')).toBe(true);
        });

        test('should have Gemini provider', () => {
            expect(manager.providers.has('gemini')).toBe(true);
        });

        test('should initialize currentProvider as null', () => {
            expect(manager.currentProvider).toBeNull();
        });
    });

    describe('Provider Selection', () => {
        test('should select Gemini provider for UNCLASSIFIED (if healthy)', async () => {
            const context = { classification: 'UNCLASSIFIED' };
            const provider = await manager.selectProvider(context);
            expect(provider).toBeDefined();
            // Will be Gemini if healthy, otherwise Fallback
            expect(['Gemini', 'Fallback']).toContain(provider.name);
        });

        test('should emit provider-selected event', async () => {
            await manager.selectProvider();
            expect(eventBusSpy).toHaveBeenCalledWith('ai:provider-selected', expect.objectContaining({
                provider: expect.any(String),
                type: expect.any(String)
            }));
        });

        test('should select provider based on context', async () => {
            const context = { workspace: 'opord-draft', classification: 'UNCLASSIFIED' };
            const provider = await manager.selectProvider(context);
            expect(provider).toBeDefined();
        });

        test('should skip Gemini for SECRET classification', async () => {
            const context = { classification: 'SECRET' };
            const provider = await manager.selectProvider(context);
            expect(provider).toBeDefined();
            expect(provider.name).toBe('Fallback'); // Should skip cloud providers
        });
    });

    describe('Classification-Aware Filtering', () => {
        test('should allow cloud providers for UNCLASSIFIED', () => {
            const allowed = manager.isCloudAllowed('UNCLASSIFIED');
            expect(allowed).toBe(true);
        });

        test('should allow cloud providers for undefined classification', () => {
            const allowed = manager.isCloudAllowed(undefined);
            expect(allowed).toBe(true);
        });

        test('should NOT allow cloud providers for CONFIDENTIAL', () => {
            const allowed = manager.isCloudAllowed('CONFIDENTIAL');
            expect(allowed).toBe(false);
        });

        test('should NOT allow cloud providers for SECRET', () => {
            const allowed = manager.isCloudAllowed('SECRET');
            expect(allowed).toBe(false);
        });

        test('should NOT allow cloud providers for TOP SECRET', () => {
            const allowed = manager.isCloudAllowed('TOP SECRET');
            expect(allowed).toBe(false);
        });

        test('should handle case-insensitive classification', () => {
            expect(manager.isCloudAllowed('secret')).toBe(false);
            expect(manager.isCloudAllowed('Secret')).toBe(false);
            expect(manager.isCloudAllowed('SECRET')).toBe(false);
        });

        test('should handle TS abbreviation', () => {
            const allowed = manager.isCloudAllowed('TS');
            expect(allowed).toBe(false);
        });
    });

    describe('Provider Health Checks', () => {
        test('should check Fallback provider health', async () => {
            const fallbackProvider = manager.providers.get('fallback');
            const isHealthy = await manager.checkProviderHealth(fallbackProvider);
            expect(isHealthy).toBe(true);
        });

        test('should handle health check errors gracefully', async () => {
            const mockProvider = {
                name: 'Mock',
                checkHealth: jest.fn().mockRejectedValue(new Error('Health check failed'))
            };
            
            const isHealthy = await manager.checkProviderHealth(mockProvider);
            expect(isHealthy).toBe(false);
        });
    });

    describe('Response Generation', () => {
        test('should generate response using Fallback provider', async () => {
            const message = 'How do I create an OPORD?';
            const response = await manager.generateResponse(message);
            
            expect(response).toBeDefined();
            expect(response.content).toBeDefined();
            expect(response.provider).toBe('Fallback');
        });

        test('should emit response-received event', async () => {
            const message = 'How do I create an OPORD?';
            await manager.generateResponse(message);
            
            expect(eventBusSpy).toHaveBeenCalledWith('ai:response-received', expect.objectContaining({
                provider: 'Fallback',
                duration: expect.any(Number),
                messageLength: expect.any(Number)
            }));
        });

        test('should include context in response generation', async () => {
            const message = 'How do I save my draft?';
            const context = { workspace: 'opord-draft' };
            const response = await manager.generateResponse(message, context);
            
            expect(response.content).toContain('Save Draft');
        });

        test('should handle empty message', async () => {
            const response = await manager.generateResponse('');
            expect(response).toBeDefined();
            expect(response.content).toBeDefined();
        });
    });

    describe('Error Handling', () => {
        test('should handle provider errors gracefully', async () => {
            // Mock provider that throws error
            const mockProvider = {
                name: 'ErrorProvider',
                type: 'mock',
                checkHealth: jest.fn().mockResolvedValue(true),
                generateResponse: jest.fn().mockRejectedValue(new Error('Provider error'))
            };
            
            manager.providers.set('error', mockProvider);
            manager.currentProvider = mockProvider;
            
            const response = await manager.generateResponse('Test message');
            
            expect(response).toBeDefined();
            expect(response.content).toContain('error');
            expect(response.provider).toBe('error');
        });

        test('should emit error event on failure', async () => {
            const mockProvider = {
                name: 'ErrorProvider',
                type: 'mock',
                checkHealth: jest.fn().mockResolvedValue(true),
                generateResponse: jest.fn().mockRejectedValue(new Error('Provider error'))
            };
            
            manager.providers.set('error', mockProvider);
            manager.currentProvider = mockProvider;
            
            await manager.generateResponse('Test message');
            
            expect(eventBusSpy).toHaveBeenCalledWith('ai:error', expect.objectContaining({
                error: expect.any(String),
                message: 'Test message'
            }));
        });
    });

    describe('Provider Management', () => {
        test('should get available providers', () => {
            const providers = manager.getAvailableProviders();
            expect(providers).toBeInstanceOf(Array);
            expect(providers.length).toBeGreaterThan(0);
            expect(providers[0]).toHaveProperty('name');
            expect(providers[0]).toHaveProperty('info');
        });

        test('should get current provider', async () => {
            await manager.selectProvider();
            const currentProvider = manager.getCurrentProvider();
            expect(currentProvider).toBeDefined();
            expect(currentProvider.name).toBe('Fallback');
        });

        test('should force provider selection', () => {
            const success = manager.forceProvider('fallback');
            expect(success).toBe(true);
            expect(manager.currentProvider.name).toBe('Fallback');
        });

        test('should fail to force non-existent provider', () => {
            const success = manager.forceProvider('nonexistent');
            expect(success).toBe(false);
        });

        test('should emit event when forcing provider', () => {
            manager.forceProvider('fallback');
            expect(eventBusSpy).toHaveBeenCalledWith('ai:provider-selected', expect.objectContaining({
                provider: 'Fallback',
                forced: true
            }));
        });
    });

    describe('Statistics', () => {
        test('should get provider statistics', () => {
            const stats = manager.getStatistics();
            expect(stats).toHaveProperty('totalProviders');
            expect(stats).toHaveProperty('availableProviders');
            expect(stats).toHaveProperty('currentProvider');
            expect(stats.totalProviders).toBeGreaterThan(0);
            expect(stats.availableProviders).toBeInstanceOf(Array);
        });

        test('should update statistics after provider selection', async () => {
            await manager.selectProvider();
            const stats = manager.getStatistics();
            expect(stats.currentProvider).toBe('Fallback');
        });
    });

    describe('Context Handling', () => {
        test('should handle context with all fields', async () => {
            const context = {
                workspace: 'opord-draft',
                classification: 'SECRET',
                operation: 'TEST OP',
                phase: 'PLANNING',
                user: 'TEST USER'
            };
            
            const response = await manager.generateResponse('Test message', context);
            expect(response).toBeDefined();
        });

        test('should handle context with missing fields', async () => {
            const context = { workspace: 'opord-draft' };
            const response = await manager.generateResponse('Test message', context);
            expect(response).toBeDefined();
        });

        test('should handle empty context', async () => {
            const response = await manager.generateResponse('Test message', {});
            expect(response).toBeDefined();
        });

        test('should handle null context', async () => {
            const response = await manager.generateResponse('Test message', null);
            expect(response).toBeDefined();
        });
    });

    describe('Performance', () => {
        test('should respond quickly (< 200ms)', async () => {
            const startTime = Date.now();
            await manager.generateResponse('How do I create an OPORD?');
            const duration = Date.now() - startTime;
            expect(duration).toBeLessThan(200);
        });

        test('should handle multiple concurrent requests', async () => {
            const promises = [
                manager.generateResponse('Message 1'),
                manager.generateResponse('Message 2'),
                manager.generateResponse('Message 3'),
                manager.generateResponse('Message 4'),
                manager.generateResponse('Message 5')
            ];

            const responses = await Promise.all(promises);
            expect(responses).toHaveLength(5);
            responses.forEach(response => {
                expect(response).toHaveProperty('content');
                expect(response).toHaveProperty('provider');
            });
        });
    });

    describe('EventBus Integration', () => {
        test('should emit all expected events during normal flow', async () => {
            eventBusSpy.mockClear();
            
            await manager.generateResponse('Test message');
            
            // Should emit provider-selected and response-received
            expect(eventBusSpy).toHaveBeenCalledWith('ai:provider-selected', expect.any(Object));
            expect(eventBusSpy).toHaveBeenCalledWith('ai:response-received', expect.any(Object));
        });

        test('should not emit response-received on error', async () => {
            const mockProvider = {
                name: 'ErrorProvider',
                type: 'mock',
                checkHealth: jest.fn().mockResolvedValue(true),
                generateResponse: jest.fn().mockRejectedValue(new Error('Provider error'))
            };
            
            manager.providers.set('error', mockProvider);
            manager.currentProvider = mockProvider;
            
            eventBusSpy.mockClear();
            await manager.generateResponse('Test message');
            
            // Should emit error but not response-received
            expect(eventBusSpy).toHaveBeenCalledWith('ai:error', expect.any(Object));
            expect(eventBusSpy).not.toHaveBeenCalledWith('ai:response-received', expect.any(Object));
        });
    });
});

