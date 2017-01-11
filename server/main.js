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

//// ROUTE HANDLERS ////

app.use('/api/about', (req, res) => res.json({ message: "Hello, this is Itequia! We are practising with Angular2.", reversedMessage: "!noos uoy eeS!" }))
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
