const procductModel = require('../model/index');

class products{
    static async getAll(req, res){
        const {data, error} = procductModel.getAll()        
        error ? res.status(404).json({error: 'products not found'})
              : res.status(200).json(data);
    } 
}

module.exports = products;