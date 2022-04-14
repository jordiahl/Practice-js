
function createElement(element, attributes) {
    const el = document.createElement(element);

    if (!!attributes) {
        Object.keys(attributes)
            .forEach(key => {
                el.setAttribute(key, attributes[key])
            });
    }
    return el;
}


//!!!!!!Important window.onload in order to fetch elements
window.onload = () => {

    const head = document.createElement('div');

    document.body.append(head);

    console.log(document.body)


    const child1 = createElement('div', { 'class': 'class1', id: 'i1' })
    const child2 = createElement('div', { 'class': 'class2', id: 'i2' })

    child1.innerHTML = "hello"


    head.appendChild(child1)
    head.appendChild(child2)

    console.log(head.children)

}
