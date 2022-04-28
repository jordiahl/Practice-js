//create element 
document.createElement(element);

//attach attributes
element.setAttribute(key, value);

//remove attributes
element.removeAttribute(key);

//innerText
element.innerText = 'text';

//dynamic html, dangerous cross scripting
// <img src onError= onError()/>
element.innerHTML = 'text';

//fetch & set the style of an element
element.style.width = '100%';

//setting a child, can only pass one element
element.appendChild();

//setting multiple children
const e1 = document.createElement("div");
const e2 = document.createElement("div");
element.append(e1, e2);

//select id 
document.querySelector('#id');
document.querySelector('#foo');
document.getElementById('id');

//select ALL elements by class
document.querySelectorAll('.class');
document.getElementsByClassName('class');

// get child nodes
const child = [...element.children];
const cN = [...currEl.childNodes];
const onlyElement = [...currEl.childNodes].filter((el) => el.nodeName != "#text");

//remove element
element.remove();
const children = [...tableContainer.children];
children.forEach((c) => c.remove());

//add class
element.classList.add("class-1");

//toggles class
element.classList.toggle('class')