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

function getSchedaEsercizi(req, res) {
    let {id} = req.params;
    id = parseInt(id);
    const scheda = schede.find(scheda => scheda.id === id );
    res.send(scheda.esercizi);
}

function getSchedaEsercizio(req, res) {
    let {id, idesercizio} = req.params;
    id = parseInt(id);
    idesercizio = parseInt(idesercizio);
    const scheda = schede.find(scheda => scheda.id === id );
    const esercizio = scheda.esercizi.find(esercizio => esercizio.id === idesercizio);
    res.send(esercizio);
}

module.exports = {
    getSchede,
    getScheda,
    getSchedaEsercizio,
    getSchedaEsercizi
}

