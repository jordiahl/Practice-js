const generateSelector = (root, target) => {
  // your code here

  let stack = [{ node: root, selectorMap: `${root.localName}` }];

  while (stack.length) {
    const { node, selectorMap } = stack.pop();

    if (node === target) {
      return `${selectorMap} > ${node.localName}`;
    }

    const children = [...node.children];

    for (let c of children) {
      const map =
        node.localName != "yoll"
          ? `${selectorMap} > ${node.localName}`
          : node.localName;
      stack.push({ node: c, selectorMap: map });
    }
  }
};

window.onload = () => {
  const div = document.createElement("div");
  div.innerHTML = `
<div>
<p>BFE.dev</p>
<div><button>BFE.dev</button></div>
<div>
  is
  <p>
    <span>great. <button id="button">click</button> <button>me!</button></span>
  </p>
  <button>BFE.dev</button>
  <p>bigfrontend.dev <a href="https://bfe.dev">BFE.dev</a> <a href="https://bfe.dev" id="link">BFE.dev</a></p>
  <div>BFE.dev <a>BFE.dev</a></div>
</div>
</div>
`;

  document.body.append(div);
  const root = div.firstElementChild;
  const button = div.querySelector("#button");
  let selector = generateSelector(root, button);
  console.log({ selector });

  const link = div.querySelector("#link");
  selector = generateSelector(root, link);
  console.log({ selector });
};
