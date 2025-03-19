/** 
 * function of parcel bundler
 * Create a server
 * HMR - Hot Module Replacement - It will automatically reload the page when we make changes in the code
 * File Watcher - It will watch the file and reload the page when we make changes in the code
 * Bundling - It will bundle all the files in a single file
 * Minification - It will minify the code
 * Tree Shaking - It will remove the unused code
 * Cleaning our code
 * Babel - It will convert our code to ES5
 * Dev and Production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compressing the code
 * Consistent build time
 * */


import React from "react";
import ReactDOM from "react-dom/client";

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
  const container = React.createElement("div", { id: "container" }, [heading1, heading2]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // passing a react element to the root using render method
  root.render(container);
  
  
  