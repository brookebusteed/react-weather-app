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
            href="https://github.com/brookebusteed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brooke Busteed{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/brookebusteed/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-bb.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
