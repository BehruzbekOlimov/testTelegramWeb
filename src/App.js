import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {window.Telegram.WebApp.initData.toString()}
          {window.Telegram.WebApp.initDataUnsafe.toString()}
          {window.Telegram.WebApp.colorScheme.toString()}
          {window.Telegram.WebApp.isExpanded.toString()}
          {window.Telegram.WebApp.viewportHeight.toString()}
          {window.Telegram.WebApp.viewportStableHeight.toString()}
          {window.Telegram.WebApp.themeParams.toString()}
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
