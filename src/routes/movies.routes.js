const {Router} = require('mongoose')
const router= Router()

const{ obtainMovies,
    saveMovie,
    deleteMovie}= require("../controllers/movie.controller")

router.get('getAllMovies',obtainMovies)
router.post('/saveMovie',saveMovie)
router.delete('/deleteMovide:Id',deleteMovie )

module.exports= router