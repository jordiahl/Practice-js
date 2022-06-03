const createElement = (type, attr, innerText) => {
  const element = document.createElement(type);

  for (let at in attr) {
    element.setAttribute(at, attr[at]);
  }

  if (!!innerText) {
    element.innerText = innerText;
  }

  element.onClick = function (fn) {
    this.removeEventListener('click', (e)=>{});
    this.addEventListener("click", (e) => {
      fn(e);
    });
  };

  element.onChange = function (fn) {
    this.removeEventListener("change", (e)=>{});
    this.addEventListener("change", (e) => {
      fn(e);
    });
  };

  element.onKeyUp = function(fn) {
      this.addEventListener('keyup', (e) => fn(e))
  }

  return element;
};

window.onload = () => {
  const root = createElement("div", {}, "text");
  const test = createElement('div', {}, 'test');
  test.onClick(() => {
    console.log("element clicked");
  });

  let value = 2;
  const input = createElement("input", { 'type': "number", 'max': '100', 'min': '2', 'value': value });
  input.onChange((e) => {console.log(e.target.value)});
  input.onKeyUp((e) => {
    console.log(e.key);
    value = input.value; 
    if(e.key === 'Enter'){
        input.value = value;
    }
  });
  const b = createElement('button', {} , 'button1');
  root.append(input, test, b);
  debugger;
  document.body.append(root);
};
