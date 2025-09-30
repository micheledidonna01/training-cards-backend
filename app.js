
//port
const port = process.env.PORT || 3100;

const express = require('express');
const app = express();
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler.js');
const notFound = require('./middlewares/notFound.js');

//connection to routers
const schedeRouter = require('./router/schedeRouter.js');



//cors middleware
app.use(cors({
    origin: process.env.FE_APP
}));

//static middleware
app.use(express.static('public'));

//body parser
app.use(express.json());//req.body

//HomePage
app.get("/", (req, res) => {
    res.send("Homepage della Webapp!");
});

//routes
app.use('/api/schede', schedeRouter);


// middleware errori
app.use(errorHandler);

// middleware rotte non trovate
app.use(notFound);

// Avvio server
app.listen(port, () => {
    console.log(`Sono un server attivo sulla porta:${port}`);
});