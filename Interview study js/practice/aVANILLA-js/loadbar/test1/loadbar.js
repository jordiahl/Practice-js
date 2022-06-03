const createElement = (type, attributes, innerHTML) => {
  const element = document.createElement(type);

  for (let at in attributes) {
    element.setAttribute(at, attributes[at]);
  }

  if (!!innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
};


const attachChange = (element, fn) => {
    element.addEventListener('change', (e) => {
        fn(e);
    } );
}

let input, loadBarContainer, loadBar, percentage;
let percentageValue = 0;
let interval;

const createLoadBar = () => {
    loadBarContainer = createElement('div', {'class': 'loadBarContainer'} )
    loadBar = createElement("div", { class: "loadBar" });
    percentage = createElement("div", { class: "percentage" }, "0%");
    loadBar.style.width = '0%';

    loadBarContainer.appendChild(loadBar);
    loadBarContainer.appendChild(percentage);
}

const updateLoadBar = (number) => {    
    if(+number < 0){
        number = '0';
        input.value = number;
    }

    if(+number > 100){
        number = '100';
        input.value = number;
    }

    percentageValue = +number;

    loadBar.style.width = `${number}%`
    percentage.innerHTML = `${number}%`;
}

const addClickEvent = (element, fn) =>{
    element.addEventListener('click', ()=> {fn()});
}


const createBasicDom = (head) => {
    input = createElement('input', {max: '100', min: '0', type: 'number', value:'0'})
    attachChange(input, (e)=> {
        const value = e.target.value;
        updateLoadBar(value)
    } )
    createLoadBar();
    const button = createElement('button', {}, 'Start loading');
    addClickEvent(button, () => {
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            if(percentageValue >= 100){
                clearInterval(this.interval);
            }
            updateLoadBar(percentageValue+1);
        }, 100)
    })

    const stopButton = createElement('button', {}, 'Stop loading' );

    addClickEvent(stopButton, () => {
        clearInterval(this.interval);
    })

    head.appendChild(loadBarContainer)
    head.appendChild(input);
    head.appendChild(button);
    head.appendChild(stopButton);  
}

window.onload = () => {
    const head = createElement('div', {'class': 'documentContainer'});
    document.body.appendChild( head);
    createBasicDom(head);

}
