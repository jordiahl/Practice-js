
const createElement = (el, attr, innerHtml) =>{
    const element  = document.createElement(el);

    if(!!attr) {
        Object.keys(attr).forEach(key => {
            element.setAttribute(key, attr[key]);
        })
    }

    element.innerHtml = innerHtml;
    return element;
}

const createElement = (el, attr, innerHTML) =>{
    const element = document.createElement(el);
    if(!!attr) {
        Object.keys(attr).forEach(key => {
            element.setAttribute(key, attr[key]);
        });
    }

    element.innerHTML = innerHTML;
    return element;
}

const createElement = (el, attr, innerHTML) => {
    const element  = document.createElement(el);
    if(!!attr) {
        Object.keys(attr).forEach(key => {
            element.setAttribute(key, attr[key]);
        })
    }

    element.innerHTML = innerHTML;
    return element;
}



// const element = document.createElement();
// const  =  [...element.childNodes]



