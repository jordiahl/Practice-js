export const get = async () => {
    try{
        //GET, POST, PUT all capitals
        const response = await fetch('http', {method: 'GET'});

        if(!response.ok){
            throw new Error(response);
        }

        const data = await response.json();
        return data;

    } catch(e) {
        console.error(e);
    }

    return null;
}

//--------------------------------------------------------------

fetch('/login', {
    method: 'POST',
    body: form
});
