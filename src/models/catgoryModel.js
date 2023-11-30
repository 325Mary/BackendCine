const {model, Schema }= require("mongoose")


const categorySchema = new Schema({
    nameCategory: {type: String, 
            require: [true, "Nombre de categoria es requerido"]
    }   
    
})


module.exports = model( 'catgory', categorySchema, 'Categorys')