import axios from "axios";

class Sdk {
    baseUrl = process.env.REACT_APP_API_URL || 'https://ycommerce.thlsn.site';

    constructor() {}

    async http(method, url, data = {}) {
        try {
            const config = {
                method,
                url,
                baseURL: this.baseUrl,
            };

            if (method === 'POST') {
                config.data = data;
            } else if (method === 'GET') {
                config.params = data;
            }

            const res = await axios(config);
            return res.data;
        } catch (error) {
            console.error("Erro na requisição:", error);
            throw error;
        }
    }

    async authUser(email, password) {
        return await this.http('POST', '/auth/login', { email, password });
    }

    async registerShop(shopName, email, password) {
        return await this.http('POST', '/auth/register-shop', { shopName, email, password });
    }

    async registerUser(email, password) {
        return await this.http('POST', '/auth/register', { email, password });
    }

    async getCategories() {
        return await this.http('GET', '/categories');
    }

    async getBanners() {
        return await this.http('GET', '/banners');
    }

    async searchProducts(query, page = 1) {
        return await this.http('GET', `/products`, { query, page });
    }

    async getHighlights() {
        return await this.http('GET', '/highlights');
    }
}

export default Sdk;
