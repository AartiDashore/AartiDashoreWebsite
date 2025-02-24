import logo from './logo.svg';
import './App.css';
import './certification'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <h1>Aarti Dashore</h1>
        <a className="App-link" href="https://github.com/AartiDashore">Github</a>
        <a className="App-link" href="https://linkedin.com/in/AartiDashore">LinkedIn</a>
        <a className="App-link" href="https://www.datascienceportfol.io/aartidashore">Data Science Portfolio</a>
        <a className="App-link" href="https://leetcode.com/u/aartidashore/">Leet Code</a>
        <a className="App-link" href="certification.js" target="_blank">My Certifications</a>
        <a className="App-link" href="https://github.com/AartiDashore">Skills</a>
        <a className="App-link" href="https://github.com/AartiDashore">Portfolio</a>
        <a className="App-link" href="https://github.com/AartiDashore">About Me</a>
        <a className="App-link" href="https://github.com/AartiDashore">Connect</a>
      </header>
    </div>
  );
}

export default App;
