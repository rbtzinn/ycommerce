import axios from "axios"
import jQuery from "jquery"

class Sdk {
    baseUrl = "http://localhost:3000/"
    constructor() {

    }
    async http(method, url, data) {
        const config = {
            method: method,
            url: url,
            baseURL: this.baseUrl,
        }
        if (method == 'POST') {
            config.data = data
        } else if (method == 'GET') {
            config.params = $.param(data)
        }

        config.data = data
        const res = await axios(config)
        return JSON.parse(res.data)
    }
    async authUser(email, password) {
        res = await this.http('POST', '/auth/login', {
            email: email,
            password: password
        })
        return res
    }
    async registerShop(shopName, email, password) {
        res = await this.http('POST', '/auth/register-shop', {
            email: email,
            password: password,
            storeName: storeName
        })
        return res
    }

    async registerUser(email, password) {
        res = await this.http('POST', '/auth/register', {
            email: email,
            password: password
        })
        return res
    }

    getCategories() {
        const categories = this.http('GET', '/categories')
        return categories
    }
    searchProducts(query, page = 1) {
        const products = this.http('GET', '/products?query=' + query)
    }
    getHighlights() {
        const highlights = this.http('GET', '/highlights')
    }


}

