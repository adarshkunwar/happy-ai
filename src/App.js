// import './App.css';
// import Btn from "./Components/Btn";
import { useEffect, useState } from "react"
import HappyFaceAi from './Components/Faces/HappyFaceAi';
import Home from './Components/Home';

function App() {
  const [ selectedBackgroundColor, setSelectedBackgroundColor ] = useState("")
  const backgroundColor = {
    backgroundColor: selectedBackgroundColor // "#ff"
  }
  const color = [
    {
      id: "01",
      color: "red",
      value: "#f00",
    },
    {
      id: "02",
      color: "green",
      value: "#0f0",
    },
    {
      id: "03",
      color: "blue",
      value: "#00f",
    },
    {
      id: "04",
      color: "cyan",
      value: "#0ff",
    },
    {
      id: "05",
      color: "magenta",
      value: "#f0f",
    },
    {
      id: "06",
      color: "yellow",
      value: "#ff0",
    },
    {
      id: "07",
      color: "black",
      value: "#000",
    },
  ];

  useEffect( () => {
    // console.log("Hello world  and the color is,.", selectedBackgroundColor)
}, [selectedBackgroundColor])

  return (
    <div style={backgroundColor} className="flex justify-center items-center w-screen h-screen mx-auto">
      {/* {color.map((color) => (
        <Btn setSelectedBackgroundColor={setSelectedBackgroundColor}  key={color.id} color={color.color} value={color.value} />
      ))} */}
      <Home/>
      {/* <HappyFaceAi/> */}
    </div>
  );
}

export default App;



// happy words={ good, sweet, glad }
// sad words={ bad, naughty, dissapointed }

// string is just an an array of characters.
// 