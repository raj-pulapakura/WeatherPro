import WeatherResponse from "./interfaces/WeatherResponse";

export default class WeatherAPI {
    static key = "af609f14917fc7c5c84721ecf1f42f8a";

    static async weatherByCoordinates(coordinates: {
        latitude: number;
        longitude: number;
    }): Promise<WeatherResponse> {
        const { latitude, longitude } = coordinates;
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.key}&units=metric`
        );
        return data.json();
    }

    static async weatherByCurrentLocation(): Promise<WeatherResponse> {
        const { coords } = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return this.weatherByCoordinates({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    }

    static async weatherByLocation(location: string): Promise<WeatherResponse> {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.key}&units=metric`
        );
        return data.json();
    }
}
