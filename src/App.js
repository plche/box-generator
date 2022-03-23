import './App.css';
import BoxColorForm from "./components/BoxColorForm/BoxColorForm";
import DisplayColoredBox from "./components/DisplayColoredBox/DisplayColoredBox";
import {useState} from "react";

function App() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (color, size) => {
        setBoxes(boxes => [...boxes, {color: color, size: size}]);
    }

    return (
        <div className="App">
            <BoxColorForm addBox={addBox}/>
            {boxes.map(box => <DisplayColoredBox box={box}/>)}
        </div>
    );
}

export default App;
