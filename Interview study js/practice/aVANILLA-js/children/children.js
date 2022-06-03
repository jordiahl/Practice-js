
const createElement = (tag, attr, innerHtml) => {
    const element = document.createElement(tag);

    for(let key in attr){
        element.setAttribute(key, attr[key]);
    }

    if(innerHtml){
        element.innerHtml = innerHtml;
    }

    return element;
}

const createNodes = () => {

    const a = createElement('div', {} , 'a')
    const b = createElement('div', {} , 'b');
    const c = createElement('div', {} , 'c');

    b.append(c);
    a.append(b);

    return a;
}



window.onload = () =>{

    const parent = createNodes();

    document.body.append(parent);
    debugger;
}