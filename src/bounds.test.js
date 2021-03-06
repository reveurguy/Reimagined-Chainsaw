const bounds = require('./bounds.js');

const gameBounds = {width: 11, height: 11, snakes: []};

test("When at left edge snake doesn't turn try to move left", () => {
    const snakeHead = {x: 0, y:2};

    const expectedMoves = ["right", "up", "down"];

    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.not.arrayContaining(["left"]));
    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at right edge snake doesn't turn try to move right", () => {
    const snakeHead = {x: 10, y:2};

    const expectedMoves = ["left", "up", "down"];

    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.not.arrayContaining(["right"]));
    expect(bounds.safeMoves({x: 10, y:2}, gameBounds)).toEqual(expect.not.arrayContaining(["right"]));
    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at top edge snake doesn't try to move up", () => {
    const snakeHead = {x: 2, y:10};

    const expectedMoves = ["right", "left", "down"];

    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.not.arrayContaining(["up"]));
    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at bottom edge snake doesn't try to move down", () => {
    const snakeHead = {x: 2, y:0};

    const expectedMoves = ["right", "left", "up"];

    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.not.arrayContaining(["down"]));
    expect(bounds.safeMoves({x: 2, y:0}, gameBounds)).toEqual(expect.not.arrayContaining(["down"]));
    expect(bounds.safeMoves(snakeHead, gameBounds)).toEqual(expect.arrayContaining(expectedMoves));
});
