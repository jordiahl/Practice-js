// Capturing happens before bubbling 
//      Capture first HTML-> BODY -> a  then Bubbling a -> BODY -> HTML

// Almost all events bubble.
// The key word in this phrase is “almost”. <FOCUS> DOESNT

const createElement = (type, attr, innerHTML) => {
    const element = document.createElement(type)
    if (!!attr) {
        Object.keys(attr).forEach(key => {
            element.setAttribute(key, attr[key]);
        })
    }

    element.innerHTML = innerHTML;
    return element;
}

const createTree = () => {
    const root = createElement('div', { id: 'a' }, 'a');
    const b = createElement('div', { id: 'b', value: 'b' }, 'b');
    const c = createElement('div', { id: 'c', value: 'c' }, 'c');
    const d = createElement('div', { id: 'd', value: 'd' }, 'd');
    const e = createElement('div', { id: 'e', value: 'e' }, 'e');

    root.appendChild(b);
    root.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);

    return root;
}

const spaceB = () => {
    const b = document.getElementById('b');
    b.style.marginLeft = '20px';
    b.style.backgroundColor = 'red';
    const children = [...b.childNodes].filter(el => el.nodeName != '#text');
    children.forEach(child => {
        child.style.marginLeft = '20px'
        child.style.backgroundColor = 'blue';
    });
}

const listenB = () => {
    const b = document.getElementById('b');
    const d = document.getElementById('d');

    b.addEventListener('click', (e) =>{
        console.log('capture was stopped')
        //Gets child target
        console.log(e.target);
        //Gets target for the element to which the event handler was attacahed to 
        console.log(e.currentTarget);
        //!!!Prevents the propagation,and since it is capturing the following event will not trigger
        //!!! If it was bubbling then the event at the top would not trigger
        e.stopPropagation()
    }, true);


    d.addEventListener('click', (e) => {
        console.log({ target: e.target });
        //!!!!!!!!!!!!!!!!!!PREVENTS BUBBLINGGGGGGGGGGGGGGG
        e.stopPropagation();
    }, false)

}

window.onload = () => {
    const r = createTree();
    document.body.appendChild(r);
    spaceB();
    listenB();
}