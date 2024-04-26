import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/brooke-busteed-63046a15a?originalSubdomain=au"
            target="_blank"
          >
            Brooke Busteed{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/brookebusteed/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
