const ProcductModel = require('../model/index');

class Products{
    
    static async getAll(req, res){
        const {data, error} = await ProcductModel.getAll()        
        error ? res.status(400).json({error: 'products not found'})
              : res.status(200).json(data);
    }
    
    static async getById(req, res){
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({error: 'id is required'})
        }
        const {data, error} = await ProcductModel.getById(Number(id))
        error ? res.status(400).json({error: 'product not found'})
              : res.status(200).json(data);
    }
}
module.exports = Products;