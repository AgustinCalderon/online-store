const data = require('../../data.json');

class procductModel {
    static async getAll() {
        if (!data) {
            return {data : null, error: true};
        }
        return {data, error: false};
    }
}

module.exports = procductModel;