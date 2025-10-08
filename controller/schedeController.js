let schede = require('../data/schede');

function getSchede(req, res) {
    res.send(schede);
}

function getScheda(req, res) {
    const { id } = req.params;
    const scheda = schede.find(s => s.id === parseInt(id));
    if (!scheda) {
        return res.status(404).send({ error: "Scheda non trovata" });
    }
    res.json(scheda);
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

function createScheda(req, res) {

    const scheda = req.body;
    const schedaWithId = scheda.esercizi.map((s,i) => {
        return {
            ...s,
            id: i + 1
        }
    });

    const newId = schede[schede.length - 1].id + 1;

    const schedaComplete = {
        id: newId,
        nome: scheda.nome,
        esercizi: schedaWithId
    }

    schede.push(schedaComplete);

    res.send(schedaComplete);
} 

function deleteScheda(req, res) {
    let {id} = req.params;
    id = parseInt(id);
    schede = schede.filter(scheda => scheda.id !== id);
    res.send(schede);
}

function updateScheda(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const dati = req.body;
    const index = schede.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send({ error: "Scheda non trovata" });
    }

    const updatedScheda = {
        id,
        nome: dati.nome,
        esercizi: dati.esercizi.map((s,i) => ({
            id: i + 1,
            nome: s.nome,
            tempo: s.tempo,
            descrizione: s.descrizione,
            image : s.image
        }))
    };

    schede[index] = updatedScheda;
    res.json(updatedScheda);
}


module.exports = {
    getSchede,
    getScheda,
    getSchedaEsercizio,
    getSchedaEsercizi,
    createScheda,
    deleteScheda,
    updateScheda
}

