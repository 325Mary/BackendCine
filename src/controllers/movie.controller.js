const movieControllers= {}

const{obtainMovies,
    saveMovie,
    deleteMovie
 }= require("../services/movie.service")


 movieControllers.obtainMovies= async(req,res)=> {
    const listMovies=  await obtainMovies()
    res.json( listMovies)
 }

 movieControllers.saveMovie= async(req, res)=> {
    await saveMovie(req.body)
    res.send("pelicula guarada con exito")
 }

 movieControllers.deleteMovie= async(req,res)=> {
    const idParam= req.params.idMovie
    const response= await deleteMovie(idParam)
    res.send(response)
    
 }


 module.exports= movieControllers