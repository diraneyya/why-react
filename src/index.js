import React from "react";
import ReactDOM from "react-dom/client";

/**
 * This is a mixed application as seen in the public/index.html file, namely,
 * there is a part of the application that uses React to mount an arbitrary
 * view, and another part that uses DOM manipulation to attach an event list-
 * ener to change the view of the application.
 * 
 * The purpose of this demonstration is to show how powerful and smart react
 * really is, and why so many people use it today instead of just using some-
 * thing like `.innerHTML` or `.insertAdjacentHTML` in the DOM. 
 */

// PART 1: React

// A React component named App, used to demonstrate React's functionality
//   note that the component is being passed a prop called "view" which is
//   a positive integer (i.e. a number that is greater than or equal to 0)
function App(props) {
  return <h1>{props.view}</h1>
}

// The react app mounting point in the DOM, referred to as the react
// DOM root and created using `createRoot` from the ReactDOM library
const root = ReactDOM.createRoot(document.querySelector("#root"));

// Mount the React app for the first time, using the App component with
// a "view" prop of 0
root.render(<App view={0} />);

// PART 2: DOM manipulation part

// Use DOM manipulation to add an event listener to re-mount (and hence
// refresh) the react app with a different value for the "view" prop
document.querySelector("#change_view")
  .addEventListener('change', event => {
    root.render(<App view={+event.currentTarget.value} />);
});