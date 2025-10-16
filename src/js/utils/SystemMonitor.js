export class SystemMonitor {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.startTime = Date.now();
        this.intervals = new Map();
    }

    startMonitoring() {
        // Start time monitoring (every second)
        this.intervals.set('time', setInterval(() => {
            this.updateTime();
        }, 1000));

        // Start uptime monitoring (every second)
        this.intervals.set('uptime', setInterval(() => {
            this.updateUptime();
        }, 1000));

        // Start memory monitoring (every 5 seconds)
        this.intervals.set('memory', setInterval(() => {
            this.updateMemoryUsage();
        }, 5000));

        // Initial updates
        this.updateTime();
        this.updateUptime();
        this.updateMemoryUsage();
    }

    updateTime() {
        const currentTime = new Date();
        const zuluTime = currentTime.toISOString().substr(11, 8) + 'Z';
        const localTime = currentTime.toLocaleTimeString('en-US', {
            hour12: false,
            timeZoneName: 'short'
        });

        this.eventBus.emit('system:time-updated', {
            zulu: zuluTime,
            local: localTime,
            timestamp: currentTime
        });
    }

    updateUptime() {
        const uptimeMs = Date.now() - this.startTime;
        const hours = Math.floor(uptimeMs / (1000 * 60 * 60));
        const minutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((uptimeMs % (1000 * 60)) / 1000);

        const uptimeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        this.eventBus.emit('system:uptime-updated', {
            uptime: uptimeString,
            uptimeMs: uptimeMs
        });
    }

    updateMemoryUsage() {
        if (performance.memory) {
            const usedMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
            const totalMB = Math.round(performance.memory.totalJSHeapSize / 1024 / 1024);

            this.eventBus.emit('system:memory-updated', {
                used: usedMB,
                total: totalMB,
                usedFormatted: `${usedMB} MB`
            });
        }
    }

    getStatusColor(status) {
        switch (status) {
            case 'healthy':
            case 'operational':
            case 'connected':
                return 'bg-green-400';
            case 'warning':
            case 'degraded':
                return 'bg-yellow-400';
            case 'error':
            case 'failed':
            case 'disconnected':
                return 'bg-red-400';
            case 'loading':
            case 'initializing':
                return 'bg-blue-400';
            default:
                return 'bg-gray-400';
        }
    }

    stopMonitoring() {
        this.intervals.forEach((interval, key) => {
            clearInterval(interval);
        });
        this.intervals.clear();
    }

    destroy() {
        this.stopMonitoring();
    }
}