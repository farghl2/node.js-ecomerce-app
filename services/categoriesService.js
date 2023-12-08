const CategoryModel = require('../models/categoriesModel');

exports.addCategory= (req, res)=>{
    const name = req.body.name;
    const newCategory = new CategoryModel({name})
    newCategory.save().then((doc)=>{
        res.status(201).json(doc)
    })

}