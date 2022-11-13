import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";

const apiName = "nextword";
const path = "/prompt";

function App() {
  const invokeFunction = () => {
    API.get(apiName, path)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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
        <button onClick={invokeFunction}>Invoke Function</button>
      </header>
    </div>
  );
}

export default App;
