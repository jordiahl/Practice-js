const createElement = (tag, attr, innerHtml) => {
  const element = document.createElement(tag);

  for (let key in attr) {
    element.setAttribute(key, attr[key]);
  }

  if (innerHtml) {
    element.innerHtml = innerHtml;
  }

  return element;
};

const onClick = (element, fn) => {
  element.addEventListener("click", (e) => fn(e));
};

let modalContainer;

const toggleModal = () => {
  modalContainer.classList.toggle("display-modal");
};

const findNextLeftNode = (root, target) => {
  let stack = [root];
  let next = [];

  console.log(root);

  while (next.length || stack.length) {
    if (!stack.length) {
      stack = next;
      next = [];
    }

    const node = stack.pop();

    if (node.id === target.id) {
      return stack.length > 0 ? stack[stack.length - 1] : null;
    }

    const children = [...node.children];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      next.push(child);
    }
  }
};

window.onload = () => {
  const button1 = document.querySelector(".button-1");
  const button2 = document.querySelector(".button-2");
  const button3 = document.querySelector(".button-3");
  modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector(".close-modal");

  onClick(button1, () => {
    toggleModal();
  });

  onClick(button2, () => {
    toggleModal();
  });

  onClick(button3, () => {
    toggleModal();
  });

  onClick(modalContainer, () => {
    toggleModal();
  });

  onClick(modal, (e) => {
    e.stopPropagation();
  });

  onClick(closeModalButton, (e) => {
    toggleModal();
  });

  const left = createElement("div", { id: "left" });
  const right = createElement("div", { id: "right" });
  const root = createElement("div");

  root.append(left, right);
  document.body.append(root);

  const yolo =  findNextLeftNode(root, right);
  debugger;
};
