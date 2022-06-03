const createElement = (type, attributes, innerHTML) => {
    const child = document.createElement(type);
    if(!!attributes){
        for(let attr in attributes){
            child.setAttribute(attr, attributes[attr])
        }
    }

    if(!!innerHTML){
        child.innerHTML = innerHTML;
    }
    return child;
}

const attachChange = (element, func) => {
    element.addEventListener('change', (event)=> {
        func(event);
    })
}

let input;
let loadBarContainer;
let loadBar;
let loadPercentage;

const createLoadBar = (container) => {
    loadPercentage = createElement("div", { 'class': "loadBarContent" }, "0%");
    loadBar = createElement("div", { class: "loadBar"});
    loadBar.style.width = `0%`;
    container.appendChild(loadBar);
    container.appendChild(loadPercentage);
}

const updateLoadBar = (percentage) => {
    loadPercentage.innerHTML = `${percentage}%`;
    loadBar.style.width = `${percentage}%`;
}

const createBasicDom = (head) => {
    input = createElement('input', {type: 'number', max: '100', min: '0', step: '1', value: '0'});
    loadBarContainer = createElement('div', {'class': 'loadBarContainer'});
    
    head.append(loadBarContainer);
    createLoadBar(loadBarContainer);

    attachChange(input, (event)=> {
        const value =  event.target.value;
        updateLoadBar(value);
        console.log({value})
    })

    head.append(input);
}


window.onload = ()  => {
    const head =  createElement('div');
    document.body.append(head);
    createBasicDom(head);
}