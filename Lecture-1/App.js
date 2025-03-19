const heading1 = React.createElement(
    "h1",
    {
      id: "heading1",
      className: "heading1",
    },
    "Hello World1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "heading2",
      className: "heading2",
    },
    "Hello World2"
  );
  const container = React.createElement("div", null, [heading1, heading2]);
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing a react element to the root using render method
  root.render(container);



  