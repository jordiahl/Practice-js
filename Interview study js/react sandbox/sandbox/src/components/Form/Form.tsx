import * as React from 'react';
import { useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';

type IFormProps = {
    children?: any
}

const Form = (props: IFormProps) => {

    const [input, setinput] = useState('');
    const {init, myInit, setValues } = useContext(FormContext);

    console.log({init}, {myInit});

    const handleSubmit = (event: any) => {
        setValues({init: 'from component', myInit: 'changed from component'});
        event.preventDefault();
    }

    const handleChange = (event:any) =>{
        setinput(prev => {
            const news = event.target.value;
            return news;
        })
    }


    return (
        <div>
            <form onSubmit ={ handleSubmit}>
                <label htmlFor='my-input'>
                    my input
                </label>
                <input id='my-input' value={input}  onChange={handleChange}/>

                <button type='submit'>Submit</button>
                <button type='button'>Cancel</button>
            </form>
        </div>
    );
}

export default Form;
