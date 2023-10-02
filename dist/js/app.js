const cells = document.querySelectorAll(".app-cell")
const app = document.querySelector(".app")
let playerMove = true;
let count = 0;

app.addEventListener("click", (e) => {
    let target = e.target

    if (target.className != "app-cell") return

    makeMove(target)
    checkMap()
})

function makeMove(cell) {
    cell.innerHTML = 'X';
    cell.classList.add('active')

    playerMove = false;
    count++

    botMove()
}

function botMove() {
    let random = getRandomInt(8)

    for (let i = 0; i < cells.length; i++) {

        if (count == 5) {
            break;
        }

        if (cells[i].getAttribute("data-count") == random) {

            if (cells[i].className != "app-cell active") {
                playerMove = true
                cells[i].classList.add('active')
                cells[i].innerHTML = "O"
                break;
            }

            botMove()
        }
    }
}

function getRandomInt(max) {
    return Math.round(Math.random() * max)
}

function checkMap() {
    if (cells[0].innerHTML == "X" && cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X' ||
        cells[3].innerHTML == "X" && cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X' ||
        cells[6].innerHTML == "X" && cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X' ||
        cells[0].innerHTML == "X" && cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X' ||
        cells[1].innerHTML == "X" && cells[4].innerHTML == 'X' && cells[7].innerHTML == 'X' ||
        cells[2].innerHTML == "X" && cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X' ||
        cells[0].innerHTML == "X" && cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X' ||
        cells[6].innerHTML == "X" && cells[4].innerHTML == 'X' && cells[2].innerHTML == 'X') {
        alert("You won!")
        location.reload()
        return
    }
    if (cells[0].innerHTML == "O" && cells[1].innerHTML == 'O' && cells[2].innerHTML == 'O' ||
        cells[3].innerHTML == "O" && cells[4].innerHTML == 'O' && cells[5].innerHTML == 'O' ||
        cells[6].innerHTML == "O" && cells[7].innerHTML == 'O' && cells[8].innerHTML == 'O' ||
        cells[0].innerHTML == "O" && cells[3].innerHTML == 'O' && cells[6].innerHTML == 'O' ||
        cells[1].innerHTML == "O" && cells[4].innerHTML == 'O' && cells[7].innerHTML == 'O' ||
        cells[2].innerHTML == "O" && cells[5].innerHTML == 'O' && cells[8].innerHTML == 'O' ||
        cells[0].innerHTML == "O" && cells[4].innerHTML == 'O' && cells[8].innerHTML == 'O' ||
        cells[6].innerHTML == "O" && cells[4].innerHTML == 'O' && cells[2].innerHTML == 'O') {
        alert("Pc won!")
        location.reload()
        return
    }
    if (count == 5) {
        alert("Draw!")
        location.reload()
        return
    }
}