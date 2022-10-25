import React, { useEffect, useState } from 'react';

const Battery = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => index === 3 ? 0 : index + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const color = () => {
        if (index === 1) {
            return 'red'
        } else if (index === 2) {
            return 'yellow'
        } else if (index === 3) {
            return 'green'
        }
    }
    return (
        <div className='wrapper'>
            <div className='battery'>
                <div style={{ background: color() }}
                    className={`${index > 0 ? 'item' : null}`}></div>
                <div style={{ background: color() }}
                    className={`${index > 1 ? 'item' : null}`}></div>
                <div style={{ background: color() }}
                    className={`${index > 2 ? 'item' : null}`}></div>
            </div>
            <div className="procent">
                {index === 0? '0%': null}
                {index === 1? '20%': null}
                {index === 2? '50%': null}
                {index === 3? '100%': null}
            </div>
        </div>
    );
};

export default Battery;