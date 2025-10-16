import { EventBus } from '../utils/EventBus.js';

export class PluginManager {
    constructor(eventBus = null) {
        this.plugins = new Map();
        this.pluginRegistry = new Map();
        this.eventBus = eventBus || new EventBus();
        this.pluginContainer = null;
    }

    async initialize() {
        console.log('🔌 Initializing PluginManager...');

        this.pluginContainer = document.getElementById('plugin-container');
        this.setupPluginAPI();
        await this.loadCorePlugins();

        console.log('✅ PluginManager initialized');
    }

    setupPluginAPI() {
        // Global plugin API
        window.MilitaryPlanningPluginAPI = {
            register: this.registerPlugin.bind(this),
            emit: this.eventBus.emit.bind(this.eventBus),
            on: this.eventBus.on.bind(this.eventBus),
            off: this.eventBus.off.bind(this.eventBus)
        };
    }



    async loadCorePlugins() {
        const corePlugins = [
            '../plugins/OPORDPlugin.js',
            '../plugins/MDMPPlugin.js',
            '../plugins/DashboardPlugin.js'
        ];



        for (const pluginPath of corePlugins) {
            try {
                await this.loadPlugin(pluginPath);
            } catch (error) {
                console.warn(`Failed to load core plugin ${pluginPath}:`, error);
            }
        }
    }

    async loadPlugin(pluginPath) {
        try {
            const module = await import(pluginPath);
            const PluginClass = module.default || module[Object.keys(module)[0]];

            if (!PluginClass) {
                throw new Error('Plugin does not export a default class');
            }

            const plugin = new PluginClass();
            await this.registerPlugin(plugin);

        } catch (error) {
            console.error(`Failed to load plugin ${pluginPath}:`, error);
            throw error;
        }
    }

    async registerPlugin(plugin) {
        if (!plugin.name || !plugin.version) {
            throw new Error('Plugin must have name and version properties');
        }

        if (this.plugins.has(plugin.name)) {
            console.warn(`Plugin ${plugin.name} already registered, skipping`);
            return;
        }

        // Initialize plugin
        if (typeof plugin.initialize === 'function') {
            await plugin.initialize();
        }

        this.plugins.set(plugin.name, plugin);
        this.eventBus.emit('plugin:registered', { name: plugin.name, version: plugin.version });

        console.log(`✅ Plugin registered: ${plugin.name} v${plugin.version}`);
    }

    getPlugin(name) {
        return this.plugins.get(name);
    }

    getAllPlugins() {
        return Array.from(this.plugins.values());
    }

    async unloadPlugin(name) {
        const plugin = this.plugins.get(name);
        if (!plugin) return;

        if (typeof plugin.destroy === 'function') {
            await plugin.destroy();
        }

        this.plugins.delete(name);
        this.eventBus.emit('plugin:unloaded', { name });
    }
}