const state = {
  numCell: (600 / 40) * (600 / 40),
};

const setupGame = (element) => {
  state.element = element;

  drawGrid();
};

const drawGrid = () => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  for (let i = 0; i < state.numCells; i++) {
    const cell = document.createElement("div");

    grid.append(cell);
  }

  state.element.append(grid);
};
const play = () => {};

const appElement = document.querySelector(".app");

setupGame(appElement);

Play();
