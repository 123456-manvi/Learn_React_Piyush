import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Component:start with capital letter and return jsx 

// function HelloWorld(){
//   return <h1>Hello from Component</h1>
// }

// function MyButton(){
//   return <button>Click Me</button>
// }


// jsx..........
// it embedded expressions in curly brackets...
// function MyComponent() {
//   const name="Piyush Garg";
//   const x=2+3;
//   return <h2>Hello {x}</h2>;
// }


function add(x,y) {
  return x+y;
}

function MyComponent(){
  return <h2>Hello {add(10,5)}</h2>;
}


// dynamic link
function MyLink(){
  const link="https://piyushgarg.dev";
  return <a href={link}>Click Me</a>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(<HelloWorld/>);
// root.render(<MyButton/>);


root.render(<MyComponent />);
root.render(<MyLink />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
