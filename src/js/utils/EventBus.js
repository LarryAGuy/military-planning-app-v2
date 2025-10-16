export class EventBus {
    constructor() {
        this.events = new Map();
        this.maxListeners = 100;
    }

    on(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listeners = this.events.get(event);
        if (listeners.length >= this.maxListeners) {
            console.warn(`EventBus: Maximum listeners (${this.maxListeners}) reached for event: ${event}`);
            return;
        }

        listeners.push(callback);
    }

    off(event, callback) {
        if (!this.events.has(event)) return;

        const listeners = this.events.get(event);
        const index = listeners.indexOf(callback);

        if (index > -1) {
            listeners.splice(index, 1);
        }

        if (listeners.length === 0) {
            this.events.delete(event);
        }
    }

    emit(event, data) {
        if (!this.events.has(event)) return;

        const listeners = this.events.get(event);
        listeners.forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error(`EventBus error in listener for ${event}:`, error);
            }
        });
    }

    once(event, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(event, onceCallback);
        };

        this.on(event, onceCallback);
    }

    clear() {
        this.events.clear();
    }

    getEventCount() {
        return this.events.size;
    }

    getListenerCount(event) {
        return this.events.has(event) ? this.events.get(event).length : 0;
    }
}