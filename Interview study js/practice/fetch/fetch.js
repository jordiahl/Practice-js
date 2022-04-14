
const doFetch = () => {
    const url = 'url';

    try{
        const response = await fetch(url, {method:'GET'});
        if(!response.ok){
            throw new Error (response);
        }
        const data = await response.json;
        return data;
    } catch(error){
        console.log(error)
    }
    return null;
}


const fetcherino = ()  => {
    const url = 'url';

    try{
        const response = await fetch(url,{method:'GET'});

        if(!response.ok){
            throw new Error(response);
        }

        const data = await response.json;
        return data;
    }catch(e){
        error.log(e)
    }
    return null;
}