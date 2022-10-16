// import express
const express = require('express')
// create an instance of an express app
const app = express()

// assign a specific port to listen to
const PORT = 3000


//import express-ejs-layouts
const ejsLayouts = require('express-ejs-layouts')
//MIDDLEWARE of express-ejs-layouts
app.use(ejsLayouts)


//MIDDLEWARE of ejs
app.set('view engine', 'ejs')


//ROUTES

//home
app.get('/', (req, res)=>{
    res.render('home.ejs')
})


//favorite animals
app.get('/animals', (req, res)=>{
    const faveAnimals =['sand crab', 'benedicat the sea cucumber', 'corny joke dog']
    res.render('animals.ejs', {animals: faveAnimals})
})

//have the app listen to the port
app.listen(PORT, ()=>{
    console.log(`You're running love-it-or-leave-it app.`)
})