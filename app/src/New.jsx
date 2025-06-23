import { useState } from "react";

function New(parameter) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{parameter.name} home</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <p>{count}</p>
    </div>
  );
}

export default New;
