class UserDB {

    constructor(axios) {
        this.axios = axios
    }

    async save(user) {
        let resp = await this.axios.post(" ")
        return resp.data
    }

    async load(id) {
        let resp = await this.axios.get(" ")
        return resp.data
    }

}
module.exports = UserDB

