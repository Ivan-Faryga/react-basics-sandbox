// import React from "react";
import ReactDOM from "react-dom";

const elem1 = <span>Hello</span>;

const elem2 = <span>everybody</span>;

// const element = React.createElement("div", {
//   vanya: 10,
//   tanya: 20,
//   children: "Hello everybody",
// });

// const jsxElement = <div>Hello everybody</div>;

// =============== jsx выражение ====================
const jsxElement = (
  <div>
    {elem1} {elem2}
  </div>
);

console.log(jsxElement);

ReactDOM.render(jsxElement, document.querySelector("#root"));
//=============================================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
