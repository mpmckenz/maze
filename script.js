const map = [
  "█████████████████████",
  "█░░░█░░░░░█░░░░░█░█░█",
  "█░█░█░███░█████░█░█░█",
  "█░█░█░░░█░░░░░█░█░░░█",
  "█░███████░█░███░█░█░█",
  "█░░░░░░░░░█░░░░░█░█░█",
  "█░███░█████░█████░█░█",
  "█░█░░░█░░░█░█░░░░░█░█",
  "█░█████░█░█░█░███░█░F",
  "S░░░░░█░█░█░█░█░█░███",
  "█████░█░█░█░█░█░█░█░█",
  "█░░░░░█░█░█░░░█░█░█░█",
  "█░███████░█████░█░█░█",
  "█░░░░░░░█░░░░░░░█░░░█",
  "█████████████████████"
];

const post = document.getElementById("maze")

for (let x = 0; x < map.length; x++) {
    let row = map[x];
    let mazeBoard = document.createElement("div");
    mazeBoard.classList.add("mazeRow");

    for (let z = 0; z < row.length; z++) {
        let wall = document.createElement("div")
        wall.dataset.rowIndex = x;
        wall.dataset.cellIndex = z;
        mazeBoard.appendChild(wall);

        switch (row[z]) {
            case "W":
                wall.classList.add("borderWall")
                wall.dataset.cellType = "border";
                break;

            case "S":
                wall.setAttribute("id", "start");
                wall.dataset.cellType = "start";
                break;

            case " ":
                wall.classList.add("blankSpace");
                wall.dataset.cellType = "floor";
                break;

            case "F":
                wall.setAttribute("id", "finish");
                wall.dataset.cellType = "end"
                break;
        }
    }
    post.appendChild(maze);
}

let boxTop;
let boxLeft;
let z;
let x;

post.appendChild(mazeBoard);

document.addEventListener('keydown', (event) => {
    switch (event.key) {
    case 'ArrowUp':
break;
}
})