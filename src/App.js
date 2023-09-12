import logo from './logo.svg';
import './App.css';
import { NewMap } from './Map';
import { Map } from './test';
import searchBar from './search';
// import { SovietData } from './MakeClusterGroup';

function App() {
  return (
    <div className="App">
      {/* <searchBar/> */}
      {<NewMap/>} 
      {/* {<Map/>} */}
      {/* {<SovietData/>} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
