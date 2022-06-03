const createElement = (type, attr, innerText) => {
    const element = document.createElement(type);

    for(let a in attr){
        element.setAttribute(a, attr[a]);
    }

    if(innerText){
        element.innerText = innerText;
    }
    return element;
}

const statuses = {
  correct: "CORRECT",
  partiallyCorrect: "PARTIALLY_CORRECT",
  incorrect: "INCORRECT",
};

const statusMap = {
  [statuses.correct]: "green",
  [statuses.incorrect]: "yellow",
  [statuses.incorrect]: "red",
};

let categoryMap, submissionsMap;

const createCategoryMap = (categories) =>{
    categoryMap = categories.reduce((acc, current)=> {
        const {id, name, category} = current;
        if(!acc[category]){
            acc[category] = [];
        }

        acc[category].push(current)
        return acc;
    }, {}); 
}

const createSubmissionMap = (submissions) =>{
    submissionsMap = submissions.reduce((acc, curr) =>{
        const {questionId, status} = curr;
        acc[questionId] = status;
        return acc;
    }, {})
}

const getCircleColor = (id) =>{
    const status = submissionsMap[id];
    const color = statusMap[status];
    return color? color: 'grey'
}


const createCategoryList = (category) => {
    const ul = createElement('ul', {'class': 'listWrapper'});
    let correctCount = 0;

    category.forEach(cat => {
        const {id, name, category} = cat;
        const backgroundColor = getCircleColor(id);
        correctCount = submissionsMap[id] === statuses.correct? correctCount+1: correctCount; 

        const li = createElement('li', {id});
        const circle = createElement('div', {'class':`circle ${backgroundColor}`});
        const text = createElement('span', {}, name);
        const flag = createElement('div', {'class': 'right-flag'})
        const content = createElement('div');
        content.append(circle, text);
        // content.appendChild(text);
        li.appendChild(content);
        li.appendChild(flag);
        ul.appendChild(li);
    })
    return [ul, correctCount];
}

const createCategory = (category) => {
    if(!category.length){
        return null;
    }   

    const categoryContainer = createElement('div');
    const categoryTitle = createElement('h2', {}, category[0].category);
    const [ul, correctCount] = createCategoryList(category);
    const counts = createElement('h2', {}, `- ${correctCount}/${category.length}`)
    
    const titleContainer = createElement('div', {'class': 'title-container'})
    titleContainer.append(categoryTitle, counts);
    categoryContainer.append(titleContainer, ul);

    return categoryContainer;
}

const renderCategories = (parent) =>{
    for(let category in categoryMap){
        const domCategory = createCategory(categoryMap[category]);
        parent.appendChild(domCategory);
    }
}


window.onload = async () => {
    const root = createElement('div', {'class': 'container'}, 'root');
    document.body.appendChild(root);

    const categories = await fetchQuestions();
    const submissions = await fetchSubmissions();
    createSubmissionMap(submissions);
    createCategoryMap(categories);
    renderCategories(root);
    debugger;
}