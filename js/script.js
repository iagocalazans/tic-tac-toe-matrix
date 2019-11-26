var matrix = new Matrix();
var player = new Player();

var boxes = document.querySelectorAll('input');
var p = document.querySelector('p');
p.textContent = "It's player "+player.getTurn()+"'s turn";
var button = document.querySelector('button');

for (i=0;i<boxes.length;i++) {
    boxes[i].addEventListener('click', function(event) {
        var result = matrix.check(this.name, player.turn);
        this.classList.add("p"+player.turn);
        if (Array.isArray(result)) {
            var keys = Object.keys(result);
            for (i=0;i<boxes.length;i++) {
                boxes[i].disabled = true;
            }
            p.textContent = "The player "+result["player"]+" has won!";
            button.disabled = false;

            var victory = document.querySelectorAll('.'+keys[0]+result[keys[0]]);

            for (i=0;i<victory.length;i++) {
                victory[i].classList.add("victory");
            }
            return true;
        }

        this.disabled = true;
        player.play();
        if (player.round == 9) {
            p.textContent = "No more moves!";
            button.disabled = false;
        } else {
            p.textContent = "It's player "+player.getTurn()+"'s turn";
        }
    });
}

button.addEventListener('click', function(event) {
    this.preventDefault;
    reset();
})

function reset() {
    for (i=0;i<boxes.length;i++) {
        boxes[i].checked = false;
        boxes[i].disabled = false;
        boxes[i].classList.remove('p1');
        boxes[i].classList.remove('p2');
        boxes[i].classList.remove('victory');
        button.disabled = true;
    }

    matrix = new Matrix();
    player = new Player();

    p.textContent = "It's player "+player.getTurn()+"'s turn";
}
