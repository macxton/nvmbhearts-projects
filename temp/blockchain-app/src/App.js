import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>N🖤MB HEARTS coming soon</h3>
        </p>
        <a //this is making the learn react words a hyperlink
          className="App-link"
          href="https://ethereum.org/en/"
          target="_blank"//this opens whatever in a new window
          rel="noopener noreferrer"
        >
          Do you know etherum?
        </a>
      </header>
    </div>
  );
}

export default App;
