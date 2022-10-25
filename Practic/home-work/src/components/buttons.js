import { useState } from 'react';

const Buttons = () => {
    const [btn, setBtn] = useState(1);
    
    return (    
        <div className="buttons">
            <button
                className={btn === 1? 'red': 'blue'}
                onClick={() => setBtn(1)}>1</button>
            <button
                className={btn === 2? 'red': 'blue'}
                onClick={() => setBtn(2)}>2</button>
            <button
                className={btn === 3? 'red': 'blue'}
                onClick={() => setBtn(3)}>3</button>
            <button
                className={btn === 4? 'red': 'blue'}
                onClick={() => setBtn(4)}>4</button>
        </div>
    )
}

export default Buttons;