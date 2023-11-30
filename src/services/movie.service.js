const movieSchema = require("../models/movies.Model")

const obtainMovies = async()=>{
    return await movieSchema.find()
}


const saveMovie= async(movie) => {
    let newMovie = new movieSchema(movie)
    return await newMovie.save()
}

const deleteMovie= async(id) =>{
    try{
        const movie= await movieSchema.findOne({ _id: id})
        if (movie){
            await movieSchema.findOneAndDelete({ _id: id})
            return "Pelicula eliminada con exito"
        }
        else {
            return "No se encontro esta pelicula"
        }
    }
    catch(error){
            return "courrio un error eliminando esta pelicula"
    }
}


module.exports= {
    obtainMovies,
    saveMovie,
    deleteMovie
}