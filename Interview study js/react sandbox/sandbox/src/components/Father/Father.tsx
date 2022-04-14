import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import styles from './Father.module.scss';
import Child from '../Child/Child';
import { FormContext } from '../../context/FormContext';

type IFatherProps = {
    Gvalue?: string
}

export default function Father(props: IFatherProps) {
    const [color, setColor] = useState(styles.red);

    // useEffect(() => {
    //     // debugger;
    //     setColor(styles.blue)
    // }, []);
    const { init, myInit, setValues } = useContext(FormContext);



    console.log('render Parent');



    return (
        <div className={color}>
            Father
            <Child />
        </div>
    );
}
