const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];


const post = document.getElementById("maze")

for (let x = 0; x < map.length; x++) {
    let row = map[x];
    let maze = document.createElement("div");
    maze.classList.add("mazeRow");

    for (let z = 0; z < row.length; z++) {
        let wall = document.createElement("div")
        wall.dataset.rowIndex = x;
        wall.dataset.cellIndex = z;
        maze.appendChild(wall);

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

const hero = document.getElementById("hero");

let start = document.getElementById("start")
let currentPosition = start;
currentPosition.appendChild(hero);

// document.addEventListener('keydown', (event) => {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                let nextPositionUp = parseInt(currentPosition.dataset.rowIndex) - 1;
                
                let nextMoveUp = document.querySelector("[data-row-index = '" + nextPositionUp + "'][data-cell-index = '" + currentPosition.dataset.cellIndex + "']");
                if (nextMoveUp.dataset.cellType === "floor") {
                    nextMoveUp.appendChild(hero);
                    currentPosition = nextMoveUp;
                    console.log(nextMoveUp)
                    hero.style.transform = "rotate(-90deg)"
                }
                break;
            case 'ArrowDown':
                let nextPositionDown = parseInt(currentPosition.dataset.rowIndex) + 1;
                let nextMoveDown = document.querySelector("[data-row-index = '" + nextPositionDown + "'][data-cell-index = '" + currentPosition.dataset.cellIndex + "']");
                if (nextMoveDown.dataset.cellType === "floor") {
                    nextMoveDown.appendChild(hero);
                    currentPosition = nextMoveDown;
                    hero.style.transform = "rotate(90deg)"
                }
                break;
            case 'ArrowLeft':
                let nextPositionLeft = parseInt(currentPosition.dataset.cellIndex) - 1;
                let nextMoveLeft = document.querySelector("[data-row-index = '" + currentPosition.dataset.rowIndex + "'][data-cell-index = '" + nextPositionLeft + "']");
                if (nextMoveLeft.dataset.cellType === "floor") {
                    nextMoveLeft.appendChild(hero);
                    currentPosition = nextMoveLeft;
                    hero.style.transform = "scaleX(-1)"
                }
                break;
            case 'ArrowRight':
                let nextPositionRight = parseInt(currentPosition.dataset.cellIndex) + 1;
                let nextMoveRight = document.querySelector("[data-row-index = '" + currentPosition.dataset.rowIndex + "'][data-cell-index = '" + nextPositionRight + "']");
                if (nextMoveRight.dataset.cellType === "floor") {
                    nextMoveRight.appendChild(hero);
                    currentPosition = nextMoveRight;


                    hero.style.transform = "rotate(0deg)"
                } else if (nextMoveRight.dataset.cellType === "end") {
                    nextMoveRight.appendChild(hero);
                    currentPosition = nextMoveRight;
                    hero.style.transform = "rotate(0deg)"
                    setTimeout(function () {
                        alert("You Win!");

                    }, );
                }
                break;
        }
        document.getElementById("hero").style.top = boxTop + "px";
        document.getElementById("hero").style.left = boxLeft + "px";
    })
// })