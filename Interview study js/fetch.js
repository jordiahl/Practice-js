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

//--------------------------------------------------------------
//!! Cancel fetch 

var controller = new AbortController();

fetch(url, { signal: controller.signal });

abortController.abort();



// Cancel fetch on react

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      dispatch(requestStarted());

      try {
        fetch(url, { signal: abortController.signal });

        // code omitted for brevity

        dispatch(requestSuccessful({ data }));
      } catch (e) {
        dispatch(requestFailed({ error: e.message }));
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);