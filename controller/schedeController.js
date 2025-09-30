const schede = require('../data/schede');

function getSchede(req, res) {
    res.send(schede);
}

function getScheda(req, res) {
    let {id} = req.params;
    id = parseInt(id);
    const scheda = schede.find(scheda => scheda.id === id );
    res.send(scheda);
}

module.exports = {
    getSchede,
    getScheda
}

