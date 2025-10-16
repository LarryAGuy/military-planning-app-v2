export class CryptoUtils {
    constructor() {
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
    }

    async generateToken(length = 32) {
        const array = new Uint8Array(length);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    async generateSalt(length = 16) {
        const array = new Uint8Array(length);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    async hashPassword(password, salt) {
        const passwordBuffer = this.encoder.encode(password + salt);
        const hashBuffer = await crypto.subtle.digest('SHA-256', passwordBuffer);
        const hashArray = new Uint8Array(hashBuffer);
        return Array.from(hashArray, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    async generateKeyPair() {
        try {
            const keyPair = await crypto.subtle.generateKey(
                {
                    name: 'RSA-OAEP',
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: 'SHA-256'
                },
                true,
                ['encrypt', 'decrypt']
            );
            return keyPair;
        } catch (error) {
            console.error('Failed to generate key pair:', error);
            throw error;
        }
    }

    async encryptData(data, publicKey) {
        try {
            const dataBuffer = this.encoder.encode(JSON.stringify(data));
            const encryptedBuffer = await crypto.subtle.encrypt(
                { name: 'RSA-OAEP' },
                publicKey,
                dataBuffer
            );
            const encryptedArray = new Uint8Array(encryptedBuffer);
            return Array.from(encryptedArray, byte => byte.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            console.error('Failed to encrypt data:', error);
            throw error;
        }
    }

    async decryptData(encryptedData, privateKey) {
        try {
            const encryptedArray = new Uint8Array(
                encryptedData.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
            );
            const decryptedBuffer = await crypto.subtle.decrypt(
                { name: 'RSA-OAEP' },
                privateKey,
                encryptedArray
            );
            const decryptedString = this.decoder.decode(decryptedBuffer);
            return JSON.parse(decryptedString);
        } catch (error) {
            console.error('Failed to decrypt data:', error);
            throw error;
        }
    }

    async generateHMAC(message, key) {
        const keyBuffer = this.encoder.encode(key);
        const messageBuffer = this.encoder.encode(message);

        const cryptoKey = await crypto.subtle.importKey(
            'raw',
            keyBuffer,
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign']
        );

        const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageBuffer);
        const signatureArray = new Uint8Array(signature);
        return Array.from(signatureArray, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    async verifyHMAC(message, signature, key) {
        const expectedSignature = await this.generateHMAC(message, key);
        return expectedSignature === signature;
    }

    generateUUID() {
        return crypto.randomUUID();
    }

    async secureHash(data) {
        const dataBuffer = this.encoder.encode(JSON.stringify(data));
        const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
        const hashArray = new Uint8Array(hashBuffer);
        return Array.from(hashArray, byte => byte.toString(16).padStart(2, '0')).join('');
    }
}