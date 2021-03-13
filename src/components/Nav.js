import React, { useState } from 'react';

function Nav(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const textHandler = (e) => {
        setText(e.target.value);
    }
    return (
        <div>
        <form>
        <textarea value={text} onChange={textHandler} id="" cols="30" rows="10"></textarea>
        <p onClick={() => setText("")}> Text: {text}</p>
        </form>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Deccrement</button>
        </div>
    )
}


export default Nav

