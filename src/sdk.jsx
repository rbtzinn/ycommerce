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
            config.params = jQuery.param(data)
        }

        config.data = data
        const res = await axios(config)

        return res.data
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
            shopName: shopName
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

    async getCategories() {
        const categories = await this.http('GET', '/categories')
        return categories
    }

    async getBanners() {
        const banners = await this.http('GET', '/banners')
        return banners
    }

    async searchProducts(query, page = 1) {
        const products = this.http('GET', '/products?query=' + query)
        return products
    }
    async getHighlights() {
        const highlights = await this.http('GET', '/highlights')
        return highlights
    }


}
export default Sdk