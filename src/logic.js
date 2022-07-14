const gameBoard = require('./game-board')

function info() {
    console.log("INFO")
    const response = {
        apiversion: "1",
        author: "reveurguy",
        color: "#FF3366",
        head: "trans-rights-scarf",
        tail: "hook"
    }
    return response
}

function start(gameState) {
    console.log(`${gameState.game.id} START`)
}

function end(gameState) {
    console.log(`${gameState.game.id} END\n`)
}

function move(gameState) {
    let move = ""
    let shout = ""
    let possibleMoves = gameBoard.safeMoves(gameState.you.head, gameState.you.body, gameState.board)

    if (possibleMoves.length > 0) {
        move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        shout = "Still slithering.";
    }
    else {
        move = "";
        shout = "Ruhroh";
    }

    const response = {
        move: move,
        shout: shout
    }

    console.log(gameState.board)
    return response
}

module.exports = {
    info: info,
    start: start,
    move: move,
    end: end
}
