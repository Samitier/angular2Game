let express      = require('express'),
    path         = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    compress     = require('compression'),
    http         = require('http')

let app          = express(),
    port         = parseInt(process.env.PORT, 10) || 3000

//// APP SETUP ////

app.use(compress())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31536000 }))
app.set('port', port)

//// GAMES API ////
let games = [
    { id:"1", title: "Tetris", year: 1984, image: "tetris.jpg", developer: "Bullet-Proof Software, Nintendo", description: "A description text I'm too lazy to write."  },
    { id:"2", title: "Pokémon Red/Blue", year: 1996, image: "pokemon.jpg", developer: "Game Freak", description: "A description text I'm too lazy to write." },
    { id:"3", title: "Super Mario Land", year: 1989, image: "super-mario-land.jpg", developer: "Nintendo", description: "A description text I'm too lazy to write." },
    { id:"4", title: "The Legend of Zelda: Link's Awakening", year: 1993, image: "links-awakening.jpg", developer: "Nintendo", description: "A description text I'm too lazy to write." },
    { id:"5", title: "Wario Land: Super Mario Land 3", year: 1994, image: "wario-land.jpg", developer: "Nintendo", description: "A description text I'm too lazy to write." },
    { id:"6", title: "Kirby's Dream Land", year: 1992, image: "kirby.jpg", developer: "HAL Laboratory", description: "A description text I'm too lazy to write." }
]
app.use('/api/games/:id', (req, res) => {
    let game = games.find( a => a.id == req.params.id)
    if(game) res.json(game)
    else res.status(404).json({ message: "Not found" })
})
app.use('/api/games', (req, res) => res.json( games ) )


//// STATIC FILE SERVING ON NOT FOUND ////

app.use((req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

//// ERROR HANDLER ////

app.use( (err, req, res)  => {
    res.status(err.status || 500).send({
        message: err.message,
        error:   (process.env.ENV === 'development') ? err : {}
    })
})

//// SERVER CREATION ////

let server = http.createServer(app)
server.listen(port)
server.on('listening', () => console.log(`Listening on ${ server.address().port || server.address() }`))
