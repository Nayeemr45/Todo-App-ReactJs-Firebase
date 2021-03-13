import React, { useState } from 'react';

function Todo() {
    const [text, setText] = useState("");
    let saveText = '';
    let saveText2 = '';
    const textHandler = (e) => {
        saveText = e.target.value;
    }
    const textSave = (e) => {
        setText(saveText);
        saveText2= saveText;
    }
    return (
        <div>
            <form action="">
            <textarea onChange={textHandler}  name="" id="todo" cols="80" rows="1"></textarea>
            <button onClick={textSave}>Add</button>
            </form>
            <p onClick={() => setText("")}> Text: {text}</p>


        </div>
    )
}

export default Todo
