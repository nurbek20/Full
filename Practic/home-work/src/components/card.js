import { useState } from 'react';

const Card = () => {
    const [index, setIndex] = useState(0)
    const [images] = useState([
        { img: 'https://www.myphone.kg/files/media/14/14579.png', color: 'black', text: 'black' },
        { img: 'https://www.myphone.kg/files/media/14/14584.png', color: 'white' ,  text: 'white'},
        { img: 'https://www.myphone.kg/files/media/14/14588.png', color: '#fd79a8',  text: 'pink' },
        { img: 'https://www.myphone.kg/files/media/14/14592.png', color: '#38ada9',  text: 'green' },
    ])
    return (
        <div className="card">
            <img src={images[index].img} alt="" />
            <div className="variant">
                {
                images.map((elem, i) => {
                    return (
                        <span
                            style={{backgroundColor: elem.color, color: '#f6b93b'}}
                            className={index === i ? 'border' : 'span'}
                            onClick={() => setIndex(i)}>{elem.text}</span>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Card;