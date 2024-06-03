import logo from './logo.svg';
import Item from './components/Item';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      {/* <Item /> */}
      <Cart />
    </div>
  );
};

export default App;
