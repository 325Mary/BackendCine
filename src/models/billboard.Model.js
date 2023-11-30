const{model, Schema}= require('mongoose')

const billboardSchema = new Schema({
    Movie: { 
        type: Schema.Types.ObjectId,
        require:[true, "pelicula es requerida"]
    },
    schedule: {
        type: Number,
        require:[true, "Horario es requerido"]
    },
    Date: {
        type: Date,
        require:[true, "fecha es requerida"]
    },
    available: {
        type: Boolean,
        require:["es necesario saber su disponibilidad"]
    }

})


module.exports= model('billboard', billboardSchema, 'Billborads')