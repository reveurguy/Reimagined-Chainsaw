/**
 * Finds safe moves within bounds of the game board based on snake's current location.
 *
 * Note the coordinates are based on the top right cartesian block, so
 * x: 0 ---------------> x: 10
 * y: 10
 *  |
 *  |
 *  |
 *  |
 * y: 0
 *
 * @param head
 * @param bounds
 * @returns {*["up", "down", "left", "right"]}
 */
function safeMoves(head, bounds) {
    let possibleMoves = [];

    if (head.y === 0) {
        possibleMoves.push('down') = false
    }
    if (head.y === boardHeight - 1) {
        possibleMoves.push('up') = false
    }
    if (head.x === boardWidth - 1) {
        possibleMoves.push('right') = false
    }
    if (head.x === 0) {
        possibleMoves.push('left') = false
    }

    return possibleMoves;
}

module.exports = {
    safeMoves
};