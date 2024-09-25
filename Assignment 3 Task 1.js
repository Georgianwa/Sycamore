const fetchWeather = () => {
	return new Promise((resolve)=> {
		setTimeout(() => {
			resolve({city: "Lagos", temperature: "28", forecast: "cloudy"});
		}, 2000);
	});
};


fetchWeather().then((weatherInfo) => {
	console.log(`City: ${weatherInfo.city}, Temperature: ${weatherInfo.temperature}, Forecast: ${weatherInfo.forecast}`);
});