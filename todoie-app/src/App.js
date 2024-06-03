// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// create own app..............................
import React from "react";

// render component
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

import CounterComponent from "./components/CounterComponent";

import "./style.css";
const App=()=>{
  // return <p>Todoie App</p>

  return(
    <div className="todo-container">
      <CounterComponent />
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Study"/>
      <TodoItem text="Sleep Again"/>
      <Button/>
    </div>
  );
};

export default App;