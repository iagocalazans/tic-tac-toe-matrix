class Matrix {
    matrix = [];

    constructor() {
        this.matrix = [Array(3),
        Array(3),
        Array(3)];
    }

    check(id, player) {
        var code = id.toString().split("");
        this.matrix[code[0]][code[1]] = player;

        var lines = this.horizontal();
        var columns = this.vertical();
        var diagonals = this.diagonal();

        if (Array.isArray(lines)) {
            return lines;
        }

        if (Array.isArray(columns)) {
            return columns;
        }

        if (Array.isArray(diagonals)) {
            return diagonals;
        }

    }

    horizontal() {
        var type = "line";
        var lines = this.validate(this.matrix, type);

        return lines;
    }

    vertical() {
        var columns = [Array(),Array(),Array()];

        for (i=0;i<this.matrix.length;i++) {
            for (var j=0;j<this.matrix[i].length;j++) {
                var num = this.matrix[i][j];
                columns[j][i] = num;
            }
        }

        var type = "column";
        return this.validate(columns, type);
    }

    diagonal() {
        var k=0;
        var inline = [];
        for (i=0;i<this.matrix.length;i++) {
            for (var j=0; j<this.matrix.length; j++) {
                inline[k++] = this.matrix[i][j];
            }
        }

        var ltr = [inline[0],inline[4],inline[8]];
        var rtl = [inline[2],inline[4],inline[6]];

        var lines;
        lines = this.validateForDiagonals(ltr,0);
        if (lines) {
            return lines;
        }

        lines = this.validateForDiagonals(rtl,1);
        return lines;
    }

    validate(matrix, type) {
        for (i=0;i<matrix.length;i++) {
            var counts = [];
            for (var j=0;j<matrix[i].length;j++) {
                var num = matrix[i][j];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
            if (counts[1] == 3) {
                var lines = Array();
                lines[type] = i;
                lines["player"] = 1;
            }

            if (counts[2] == 3) {
                var lines = Array();
                lines[type] = i;
                lines["player"] = 2;
            }
        }

        return lines;
    }

    validateForDiagonals(matrix, id) {
        var counts = [];
        for (i=0;i<matrix.length;i++) {
            var num = matrix[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;

            if (counts[1] == 3) {
                var lines = Array();
                lines["diagonal"] = id;
                lines["player"] = 1;

                return lines;
            }

            if (counts[2] == 3) {
                var lines = Array();
                lines["diagonal"] = id;
                lines["player"] = 2;

                return lines;
            }
        }
    }
}
