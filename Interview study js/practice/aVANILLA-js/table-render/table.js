const createElement = (type, attr, innerText) => {
  const element = document.createElement(type);

  for (let key in attr) {
    element.setAttribute(key, attr[key]);
  }

  if (innerText) {
    element.innerText = innerText;
  }

  return element;
};

const generateTableArray = (columns, rows) => {
  const table = [];
  for (let i = 0; i < rows; i++) {
    const ar = [];
    for (let j = 0; j < columns; j++) {
      const value =
        j % 2 === 0 ? rows * (j + 1) - (rows - i) + 1 : (j + 1) * rows - i;
      ar.push(value);
    }
    table.push(ar);
  }
  return table;
};

const onChange = (element, fn) => {
  element.addEventListener("change", (event) => {
    fn(event);
  });
};

const onClick = (element, fn) => {
  element.addEventListener("click", (event) => {
    fn(event);
  });
};

let columnNumber, rowNumber, table, tableContainer;

const renderTable = () => {
  table = createElement("table");
  const tbody = createElement("tbody");
  table.append(tbody);

  if (!columnNumber || !rowNumber) {
    return;
  }

  const tableArray = generateTableArray(columnNumber, rowNumber);

  for (let i = 0; i < tableArray.length; i++) {
    const row = createElement("tr");
    for (let j = 0; j < tableArray[0].length; j++) {
      const value = tableArray[i][j];
      const td = createElement("td", {}, value);
      row.append(td);
    }
    tbody.append(row);
  }
  const children = [...tableContainer.children];
  children.forEach((c) => c.remove());
  tableContainer.append(table);
};

const createInputs = () => {
  const columnLabel = createElement("label", { for: "column" }, "column");
  const columnInput = createElement("input", {
    id: "column",
    max: "10",
    min: "0",
    type: "number",
  });

  const rowLabel = createElement("label", { for: "row" }, "row");
  const rowInput = createElement("input", {
    id: "row",
    max: "10",
    min: "0",
    type: "number",
  });

  onChange(columnInput, (event) => {
    columnNumber = event.target.value;
    // debugger;
    renderTable();
  });
  onChange(rowInput, (event) => {
    rowNumber = event.target.value;
    // debugger;
    renderTable();
  });

  const inputContainer = createElement("div", { class: "input-container" });
  inputContainer.append(columnLabel, columnInput, rowLabel, rowInput);
  return inputContainer;
};

let percent = 0;

window.onload = () => {
  const root = createElement("div", { class: "container" });
  document.body.append(root);
  const inputContainer = createInputs();
  tableContainer = createElement("div");

  const loadBarContainer = createElement("div", {
    class: "load-bar-container",
  });
  const bar = createElement("div", { class: "loadBar" });
  loadBarContainer.append(bar);

  const button = createElement(
    "button",
    { type: "button" },
    "start bar loading pure css"
  );

  onClick(button, () => {
    percent += 1;
    bar.style.width = `${percent}0%`;
  });

  root.append(inputContainer, tableContainer, loadBarContainer, button);
};
