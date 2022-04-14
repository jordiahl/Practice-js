import * as React from 'react';
import { useEffect, useState } from 'react';
import FormContextProvider from '../../context/FormContext';
import Father from '../Father/Father';
import Form from '../Form/Form';
import HOC from '../HigherOrderComponent/HOC';

type IGrandfatherProps = {
}

export default function Grandfather(props: IGrandfatherProps) {

  const [Gvalue, setGvalue] = useState('1')


  useEffect(() => {
    // setInterval(() => {
    //   setGvalue( prev => {
    //     let number = +prev;
    //     return `${++number}`;
    //   } );
    // }, 1000);
  }, []);

  return (
    <div>
      <FormContextProvider>
        <Form />
        <Father/>
      </FormContextProvider>
      {/* <HOC>
        Grandfather
        <Father
          Gvalue={Gvalue}
        />
      </HOC> */}
    </div>
  );
}