const ProcductModel = require('../model/index');

class Products{
    static async getAll(req, res){
        const {data, error} = await ProcductModel.getAll()        
        error ? res.status(400).json({error: 'products not found'})
              : res.status(200).json(data);
    } 
}

module.exports = Products;