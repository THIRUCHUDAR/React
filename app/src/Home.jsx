import { useState } from "react";
function Home(parameter) {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>{parameter.name} home</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Click</button>
            <p>{count}</p>
        </div >
    )
}
export default Home;
