class Player {
    p1 = 1;
    p2 = 2;
    last = 0;
    round = 0;
    turn = 0;

    constructor() {
        if (this.last == 0) {
            this.turn = this.p1;
        }
    }

    play() {
        this.last = this.turn;
        if (this.turn == this.p1) {
            this.turn = this.p2;
        } else {
            this.turn = this.p1;
        }
        this.round++;
    }

    getTurn() {
        return this.turn;
    }
}
