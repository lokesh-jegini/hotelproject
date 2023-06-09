import React, { useState } from "react";

function Hoc(Oldcomponent) {
  const New = () => {
    const [count, setCount] = useState(0);
    const incerement = () => {
      setCount(count + 1);
    };
    return <Oldcomponent count={count} incerement={incerement} />;
  };
  return New;
}
export default Hoc;
