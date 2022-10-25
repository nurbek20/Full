import React, {useState} from 'react'
// import Battery from "./components/battery";
// import Slider from './components/slider';
// import Buttons from './components/buttons';
// import Menu from './components/menu';
// import Card from './components/card';
// import Counter from './components/counter';
import Product from './components/Product/Product'
import './App.scss'

const App = () => {
  const [val, setVal] = useState('');
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data"))||'');
  const [text, setText] = useState(false);

  const btnClick=()=>{
    setData(val)
    setText((text)=>!text)
    localStorage.setItem('data', JSON.stringify(val))
    // setVal('')
  }



  return (
    <div>
      {/* <Battery/> */}
      {/* <Slider/> */}
      {/* <Buttons/> */}
      {/* <Menu/> */}
      {/* <Card/> */}
      {/* <Counter/> */}
      <Product 
      data={data}
      val={val}
      setVal={setVal}
      btnClick={btnClick}
      text={text}
      />
    </div>
  )
}

export default App;