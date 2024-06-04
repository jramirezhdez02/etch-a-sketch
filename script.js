const container = document.createElement("div");
container.id = "container";
const holder = document.querySelector("#holder");
// container.innerText = "Hello World!";
holder.appendChild(container);

function board(squares) {
    for (let i = 0; i < squares; i++) {
        const newRow = document.createElement("div");
        newRow.className = "newRow";
        for (let j = 0; j < squares; j++) {
            const squares = document.createElement("div");
            squares.className = "rows";
            newRow.appendChild(squares);
        }
        container.appendChild(newRow);
    }

    const rows = document.querySelectorAll(".rows");
    rows.forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.style.setProperty("background-color", "black");
        });
    });
}

board(16);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    const rows = document.querySelectorAll(".newRow");
    rows.forEach((row) => {
        container.removeChild(row);
    });
    squares = prompt("Number of squares you want to create (4-100)", "16");
    if (squares === null) {
        squares = 16;
    } else if (squares > 100) {
        squares = 100;
    } else if (squares < 4) {
        squares = 4;
    } else {
        squares = Math.floor(squares);
    }

    board(squares);
});