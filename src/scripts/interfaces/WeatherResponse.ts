export default interface WeatherResponse {
    base: string;
    clouds: object;
    code: number;
    coord: {
        lon: number;
        lat: Number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibiliity: number;
    weather: {
        main: string;
        description: string;
        icon: string;
        id: number;
    };
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}
