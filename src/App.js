import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(window.Telegram.WebApp.initData)} <hr/>
          {JSON.stringify(window.Telegram.WebApp.initDataUnsafe)} <hr/>
          {window.Telegram.WebApp.colorScheme} <hr/>
          {window.Telegram.WebApp.isExpanded} <hr/>
          {window.Telegram.WebApp.viewportHeight} <hr/>
          {window.Telegram.WebApp.viewportStableHeight} <hr/>
          {JSON.stringify(window.Telegram.WebApp.themeParams)} <hr/>
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
        <button onClick={()=>window.Telegram.WebApp.sendData("Hello Telegram")}>
          Send Data
        </button>
      </header>
    </div>
  );
}

export default App;
