const schede = [
    {
        id: 1,
        nome: "Scheda Full Body",
        esercizi: [
            { id: 1, nome: "Squat", tempo: 10, descrizione: "Esercizio multiarticolare per allenare quadricipiti, glutei e core.", image: "squat.gif" },
            { id: 2, nome: "Panca Piana", tempo: 8, descrizione: "Distensioni su panca orizzontale per il petto, tricipiti e spalle anteriori.", image: "pancaPiana.gif" },
            { id: 3, nome: "Rematore", tempo: 7, descrizione: "Movimento di trazione orizzontale per dorsali e trapezi.", image: "rematore.webp" },
            { id: 4, nome: "Plank", tempo: 5, descrizione: "Isometrico per rafforzare il core e la stabilità del tronco.", image: "plank.gif" }
        ]
    },
    {
        id: 2,
        nome: "Scheda Spinta",
        esercizi: [
            { id: 1, nome: "Distensioni su panca inclinata", tempo: 9, descrizione: "Esercizio per sviluppare la parte alta del petto e le spalle.", image: "pancaInclinata.gif" },
            { id: 2, nome: "Shoulder Press", tempo: 8, descrizione: "Distensioni sopra la testa per allenare deltoidi e tricipiti.", image: "shoulder.gif" },
            { id: 3, nome: "Push-up", tempo: 6, descrizione: "Piegamenti a corpo libero per petto, tricipiti e core.", image: "pushUp.gif" },
            { id: 4, nome: "French Press", tempo: 5, descrizione: "Estensioni dei tricipiti con bilanciere o manubri sopra la testa.", image: "frenchPress.gif" }
        ]
    },
    {
        id: 3,
        nome: "Scheda Trazione",
        esercizi: [
            { id: 1, nome: "Trazioni alla sbarra", tempo: 10, descrizione: "Esercizio fondamentale per dorsali e bicipiti, a corpo libero.", image: "trazioniSbarra.gif" },
            { id: 2, nome: "Pulley basso", tempo: 8, descrizione: "Rematore alla macchina per stimolare i muscoli della schiena.", image: "pulley.gif" },
            { id: 3, nome: "Curl manubri", tempo: 6, descrizione: "Esercizio per l’isolamento dei bicipiti.", image: "curlManubri.gif" },
            { id: 4, nome: "Face Pull", tempo: 5, descrizione: "Trazione con corda per lavorare su deltoidi posteriori e trapezi.", image: "facePull.gif" } 
        ]
    }
];

module.exports = schede;
