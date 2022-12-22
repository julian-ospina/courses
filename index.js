const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const players = []

class Player {
    constructor(id) {
        this.id = id
    }

    asignPokimon(pokimon) {
        this.pokimon = pokimon
    }

    updatePosition(x, y) {
        this.x = x
        this.y = y
    }
   
asignAttack(attack) {
    this.attack = attack
}
}

class Pokimon {
    constructor (name) {
        this.name = name
    }
}
app.get("/join", (req, res) => {

    const id = `${Math.random()}`

    const player = new Player(id)

    players.push(player)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)

})

app.post("/pokimon/:playerId", (req, res) => {
    const playerId = req.params.playerId || ""
    const name = req.body.pokimon || ""
    const pokimon = new Pokimon(name)
    
    
    const playerIndex= players.findIndex((player) => playerId === player.id)

    if(playerIndex >= 0) {
        players[playerIndex].asignPokimon(pokimon)

    }

    console.log(players)
    console.log(playerId)
    res.end()
})

app.post("/pokimon/:playerId/position", (req,res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = res.body.y || 0

    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].updatePosition(x, y)

    }

    const enemies = players.filter((player) => playerId !== player.id)

    res.send({
        enemies
    })
})
app.post("/pokimon/:playerId/attack", (req, res) => {
    const playerId = req.params.playerId || ""
    const attack = req.body.pokimon || []
    
    const playerIndex = players.findIndex((player) => playerId === player.id)

    if(playerIndex >= 0) {
        players[playerIndex].asignPokimon(attack)

    }

    res.end()
})

app.get("/pokimon/:playerId/attack", (req, res) => {
    const playerId = req.params.playerId || ""
    const player = players.find((player) => player.id === playerId)
    res.send({
        attack: player.attack || []
    })
})

app.listen(8080, () => {
    console.log("funcionando")
})
