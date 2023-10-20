import { useState } from 'react';

function Todolist() {
    const [currentInput, setcurrentInput] = useState("");

    const handleChange = (e) => {
        setcurrentInput(e.target.value);
    }
    return (  
        <div className="todo-list">
            <div className="mainInput">
                <input className="inputField" type="text" value={currentInput} placeholder="Enter the item name" onClick={handleChange}></input>
            </div>

        </div>
    );
}
 
export default Todolist;