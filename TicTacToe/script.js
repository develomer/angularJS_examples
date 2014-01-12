function TicTacToeCntl($scope, $location) {
    $scope.cellStyle = {
        'height': '100px',
        'width': '100px',
        'border': '15px solid blue',
        'text-align': 'center',
        'vertical-align': 'middle',
        'cursor': 'pointer'
    };

    $scope.reset = function () {
        $scope.board = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ];
        $scope.nextMove = 'X';
        $scope.winner = '';
        setUrl();
    };

    $scope.dropPiece = function (row, col) {
        if (!$scope.winner && !$scope.board[row][col]) {
            $scope.board[row][col] = $scope.nextMove;
            $scope.nextMove = $scope.nextMove == 'X' ? 'O' : 'X';
            setUrl();
        }
    };

    $scope.reset();
    $scope.$watch(function () { return $location.search().board; }, readUrl);

    function setUrl() {
        var rows = [];
        angular.forEach($scope.board, function (row) {
            rows.push(row.join(','));
        });
        $location.search({ board: rows.join(';') + '/' + $scope.nextMove });
    }

    function grade() {
        var b = $scope.board;
        $scope.winner =
          row(0) || row(1) || row(2) ||
          col(0) || col(1) || col(2) ||
          diagonal(-1) || diagonal(1);
        function row(row) { return same(b[row][0], b[row][1], b[row][2]); }
        function col(col) { return same(b[0][col], b[1][col], b[2][col]); }
        function diagonal(i) { return same(b[0][1 - i], b[1][1], b[2][1 + i]); }
        function same(a, b, c) { return (a == b && b == c) ? a : ''; };
    }

    function readUrl(value) {
        if (value) {
            value = value.split('/');
            $scope.nextMove = value[1];
            angular.forEach(value[0].split(';'), function (row, col) {
                $scope.board[col] = row.split(',');
            });
            grade();
        }
    }
}