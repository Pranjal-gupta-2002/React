import React from "react";
import ReactDOM from "react-dom/client";



const heading1 = ()=>(
  <h1 id="heading1" className="heading1">
    Hello World1
  </h1>
)
const HeaderComponent = () => {
  return (
    <div>
      <h1>Header Component</h1>
      {heading1()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element to the root using render method
root.render(<HeaderComponent/>);


