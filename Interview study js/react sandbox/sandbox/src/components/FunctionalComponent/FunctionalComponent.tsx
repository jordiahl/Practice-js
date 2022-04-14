import { useEffect, useState } from "react";

const FunctionalComponent = (props) => {
    const {} = props;


    const [clickCount, setclickCount] = useState(0);
    const [showButton, setshowButton] = useState(true);
    const [promises, setpromises] = useState([]);

    useEffect(() => {
        setpromises ( prev => {
            //fetch etc...
        })

        return () => {
            console.log('So long bitches');
        }
    }, [])

    useEffect(() => {
        console.log('updated');
    });

    useEffect(() => {
        setshowButton(prev => {
            const yolo = clickCount <= 5;
            return yolo;
        });
    }, [clickCount])


    const handleButtonClick = () => {
        const newCount = clickCount + 1;

        const showButton = newCount <= 5;

        setclickCount(prev => {
            const newCount = prev + 1;
            return newCount;
        })
    }

    return (
        <div>
            {clickCount &&
                <button onClick={handleButtonClick}>
                    IncreaseCount
                </button>
            }
        </div>
    );
}


export default FunctionalComponent;