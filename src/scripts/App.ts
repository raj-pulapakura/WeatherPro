import WeatherAPI from "./WeatherAPI";
import WeatherResponse from "./interfaces/WeatherResponse";
import Utility from "./Utility";

export default class App {
    weatherForm1: HTMLFormElement;
    weatherForm2: HTMLFormElement;
    weatherBox: HTMLDivElement;

    constructor(
        weatherForm1Selector: string,
        weatherForm2Selector: string,
        weatherBoxSelector: string
    ) {
        this.weatherForm1 = document.querySelector(weatherForm1Selector)!;
        this.weatherForm2 = document.querySelector(weatherForm2Selector);
        this.weatherBox = document.querySelector(weatherBoxSelector)!;
    }

    init() {
        this.weatherForm1.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formInputs = this.getWeatherForm1Inputs();
            // making sure all inputs are entered
            if (formInputs.some((input) => !input.value)) {
                return alert("Please enter all the fields.");
            }
            const { value: location } = formInputs.find(
                (input) => input.name === "location"
            );
            const weatherData = await WeatherAPI.weatherByLocation(location);
            this.weatherBox.classList.remove("hidden");
            this.renderWeatherData(weatherData);
        });
        this.weatherForm2.addEventListener("submit", async (e) => {
            e.preventDefault();
            const weatherData = await WeatherAPI.weatherByCurrentLocation();
            this.weatherBox.classList.remove("hidden");
            this.renderWeatherData(weatherData);
        });
    }

    private renderWeatherData(weatherData: WeatherResponse) {
        this.weatherBox.innerHTML = `
            <h2>Location: ${weatherData.name}</h2>
        `;
        for (const stat in weatherData.main) {
            const value =
                weatherData.main[stat as keyof typeof weatherData.main];
            this.weatherBox.innerHTML += `
                <div class="component-stat-container">
                    <p class="component-stat-name">${Utility.snakeCaseToCamelCase(
                        stat
                    )}</p>
                    <p>👉</p>
                    <p class="component-stat-value">${value}</p>
                </div>
            `;
        }
    }

    private getWeatherForm1Inputs(): { name: string; value: string }[] {
        const inputs = Array.from(this.weatherForm1.querySelectorAll("input"));
        const prettyInputs = inputs.map((input) => ({
            name: input.name,
            value: input.value,
        }));
        return prettyInputs;
    }
}
