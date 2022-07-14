function safeMoves(head, board) {
    let possibleMoves = [];
    for (const hazard of board.hazards){
        if (hazard.x === head.x){
            possibleMoves.push(hazard.y > head.y ? "right" : "left");
        }

        if (hazard.y === head.y){
            possibleMoves.push(hazard.x > head.x ? "down" : "up");
        }
    }


    return [...new Set(possibleMoves)];
}

module.exports = {
    safeMoves
};