const createElement = (tag, attr, innerText) => {
  const element = document.createElement(tag);

  for (let key in attr) {
    element.setAttribute(key, attr[key]);
  }

  if (!!innerText) {
    element.innerText = innerText;
  }

  return element;
};

const gameMatrix = [];
let gameOverBanner;
let currentMarker = "X";
const controller = new AbortController();

const toggleMarker = () => {
  currentMarker = currentMarker === "X" ? "O" : "X";
};

const isRowColumnGameOver = () => {
  for (let row = 0; row < gameMatrix.length; row++) {
    const columns = [gameMatrix[row][0].value];
    const rows = [gameMatrix[0][row].value];
    for (let column = 1; column < 3; column++) {
      const currentCol = gameMatrix[row][column].value;
      const currentRow = gameMatrix[column][row].value;
      if (currentCol != "null" && currentCol === columns[columns.length - 1]) {
        columns.push(currentCol);
      }

      if (currentRow != "null" && currentRow === rows[rows.length - 1]) {
        rows.push(currentRow);
      }
    }
    if (columns.length === 3 || rows.length === 3) {
      return true;
    }
  }
  return false;
};

const isDiagonalGameOver = () => {
  // [0, 1, 2]
  return (
    (gameMatrix[0][0].value === gameMatrix[1][1].value &&
      gameMatrix[2][2].value === gameMatrix[1][1].value &&
      gameMatrix[1][1].value != "null") ||
    (gameMatrix[2][0].value === gameMatrix[1][1].value &&
      gameMatrix[0][2].value === gameMatrix[1][1].value &&
      gameMatrix[1][1].value != "null")
  );
};

const isGameOver = (button) => {
  const [row, column] = button.name;

  if (isDiagonalGameOver() || isRowColumnGameOver()) {
    gameOverBanner.innerText =
      gameOverBanner.innerText + ` ${currentMarker} wins`;
    gameOverBanner.style.display = "block";
      controller.abort();

  }
};

const onclick = (button) => {
  button.addEventListener("click", (e) => {
    e.target.value = currentMarker;
    e.target.innerText = currentMarker;
    e.target.disabled = true;
    isGameOver(e.target);
    toggleMarker();
  }, {signal: controller.signal});
};

const createGame = () => {
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const button = createElement(
        "button",
        {
          class: "cell",
          name: `${i}, ${j}`,
          value: "null",
        },
        " "
      );
      onclick(button);
      row.push(button);
    }
    gameMatrix.push(row);
  }
  return gameMatrix;
};

window.onload = () => {
  const root = createElement("div", { class: "game-container" });
  const game = createGame(document.body);
  gameOverBanner = document.querySelector(".game-over-banner");
  document.body.append(root);

  for (let r of game) {
    const row = createElement("div", { class: "row" });
    row.append(...r);
    root.append(row);
  }
};
