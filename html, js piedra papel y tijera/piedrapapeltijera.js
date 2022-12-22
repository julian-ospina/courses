function random(min, max) {return Math.floor(Math.random() * (max - min +1) + min) } 

function choose(jugada) {
    let result = ""
     if(jugada == 1) { result  ="piedra 🪨"} 
    else if(jugada == 2) { result = "papel 📃"}
    else if(jugada == 3) { result = "tijera ✂️ "} 
    else { result="elige perder, loser!"} 
    return result
}

// whole formula without function Math.floor(Math.random() * (max - min +1) + min) and you have to define let max = 3 and min = 1 
 

//1 es piedra, 2 es papel, 3 es tijera 

let jugador = 0
let pc = 0
let wins = 0
let loses = 0

while (wins < 3 && loses < 3) {
pc = random(1,3)
jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")

alert("PC elige: " + choose(pc))
alert("tu eliges: " + choose(jugador))  

if(pc == jugador) { alert("empate")} 

else if(jugador == 1 && pc == 3) { alert("ganaste!")
    wins = wins +1 
}        
else if( jugador == 2 && pc == 1) { alert("ganaste!") 
    wins = wins +1
}
else if( jugador == 3 && pc == 2) { alert("ganaste!") 
    wins = wins +1
}
else {alert("perdiste")
loses = loses + 1 
}
}

alert("ganaste " + wins + " veces. Perdidas " + loses + " veces.")
