it('should play a game', function () {
    piece(1, 1);
    expect(binding('nextMove')).toEqual('O');
    piece(3, 1);
    expect(binding('nextMove')).toEqual('X');
    piece(1, 2);
    piece(3, 2);
    piece(1, 3);
    expect(element('.winner').text()).toEqual('X oyuncusu kazandý!');
});

function piece(row, col) {
    element('.board tr:nth-child(' + row + ') td:nth-child(' + col + ')').click();
}