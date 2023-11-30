const {model, Schema} = require("mongosse")

const movieSchema= new Schema({
    nameMovie: {
        type: String,
        require: [true, "nombre de Pelicula es requerido"]
    },
    catgory: { 
        type: Schema.Types.ObjectId,
        require:[ true, "La categoria es requerida"]
    },
    duration:{
        type:Number
    }
})

module.exports= model('movie', movieSchema, 'Movies')