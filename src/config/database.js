const express = require('express')
const mongosse =  require('mongoose')

mongosse
    .connect("mongodb://127.0.0.1:27017/Cine", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conectado a MongoDB");
      })
      .catch((error) => {
        console.log("Error: " + error);
      })

      