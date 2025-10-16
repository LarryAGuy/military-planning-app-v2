export class APIClient {
    constructor(baseURL = '', defaultHeaders = {}) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...defaultHeaders
        };
        this.timeout = 30000; // 30 seconds default timeout
    }

    async request(method, url, data = null, options = {}) {
        const fullURL = this.buildURL(url);
        const config = this.buildRequestConfig(method, data, options);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);

            const response = await fetch(fullURL, {
                ...config,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }

            return await response.text();

        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error('Request timeout');
            }
            throw error;
        }
    }

    buildURL(url) {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `${this.baseURL}${url.startsWith('/') ? url : '/' + url}`;
    }

    buildRequestConfig(method, data, options) {
        const config = {
            method: method.toUpperCase(),
            headers: {
                ...this.defaultHeaders,
                ...options.headers
            }
        };

        if (data && ['POST', 'PUT', 'PATCH'].includes(config.method)) {
            if (typeof data === 'object') {
                config.body = JSON.stringify(data);
            } else {
                config.body = data;
            }
        }

        return config;
    }

    async get(url, options = {}) {
        return this.request('GET', url, null, options);
    }

    async post(url, data, options = {}) {
        return this.request('POST', url, data, options);
    }

    async put(url, data, options = {}) {
        return this.request('PUT', url, data, options);
    }

    async patch(url, data, options = {}) {
        return this.request('PATCH', url, data, options);
    }

    async delete(url, options = {}) {
        return this.request('DELETE', url, null, options);
    }

    setDefaultHeader(key, value) {
        this.defaultHeaders[key] = value;
    }

    setTimeout(timeout) {
        this.timeout = timeout;
    }
}