import { useState, useEffect } from 'react';

const Slider = () => {
    const [index, setIndex] = useState(0)
    const [images] = useState([
        "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4",
        "https://mmahistory.org/wp-content/uploads/2016/10/wme-img-ufc.jpg",
        "https://cdn.windowsreport.com/wp-content/uploads/2020/10/IMG-file.jpg",
        "https://fl-img-media.s3.amazonaws.com/uploads/2020/11/Logo-only.png"
    ])
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => index === 3 ? 0 : index + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <img width={200} src={images[index]} alt="" />
            {images.map((elem, i) => {
                return (
                    <img
                        style={{
                            border:
                                i === index ? '3px solid red'
                                    :
                                    null
                        }}
                        width={50}
                        src={elem} />
                )
            })}
        </div>
    )
}

export default Slider;