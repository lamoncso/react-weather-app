import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by {""}
        <a
          href="https://codefusion-ml.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Monika Lauko
        </a>
        <br /> and is{" "}
        <a
          href="https://github.com/lamoncso/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>{" "}
        and{" "}
        <a href="https://app.netlify.com" target="_blank" rel="noreferrer">
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
