import "../styles/_variables.scss";
import "../styles/styles.scss";
import App from "./App";

const app = new App(
    ".weather-form-enter-location",
    ".weather-form-current-location",
    ".weather-box"
);

app.init();
