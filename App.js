import logo from './images/zen.png';
import './App.css';

import Login from './components/Login';
import Member from './components/Member';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        {/* <Member></Member> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </header>
      <footer>
        <p class="tagline">
          &nbsp;&bull;&nbsp; Read &nbsp;&bull;&nbsp; Learn&nbsp;&bull;&nbsp; Connect&nbsp;&bull;&nbsp;  Grow &nbsp;&bull;&nbsp;
        </p>
      </footer>
    </div>
  );
}

export default App;
