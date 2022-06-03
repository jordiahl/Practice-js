"use-strict"

console.log('hello wolrd');

const createElement = (el, attr, innerHTML) => {
    const element = document.createElement(el);

    if(!!attr){
        Object.keys(attr).forEach(key => {
            element.setAttribute(key, attr[key])
        })
    }

    element.innerHTML = innerHTML;
    return element;
}

const createTree = () => {
    const root = createElement('div', {id:'a'}, 'a');
    const b = createElement('div', {id: 'b'}, 'b');
    const c = createElement('div', {id: 'c'}, 'c');
    const d = createElement('div', {id: 'd'}, 'd');
    const e = createElement('div', {id: 'e'}, 'e');

    root.appendChild(b);
    root.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);

    return root;
}


const dfs = (root) => {
    let elements = [root];

    while (elements.length > 0){
        const currEl = elements.pop();
        console.log(currEl.id);

        if(!!currEl?.children){
            let children = [...currEl.childNodes].filter(el => el.nodeName != '#text');
            children = children.reverse();
            elements = [...elements, ...children];
        }
    }

}

const turnGreenB = () => {
    const b = document.getElementById('b');
    b.style.color = 'green';
    b.style.backgroundColor = 'red';
}


window.onload = () => {
    const r = createTree()
    dfs(r);
    document.body.appendChild(r);
    r.addEventListener('click', turnGreenB);
}