const fetchWeather = () => {
	return new Promise((resolve)=> {
		setTimeout(() => {
			resolve({city: "Lagos", temperature: "28", forecast: "Cloudy"});
		}, 2000);
	});
};

async function getWeather() {
	const weatherInfo = await fetchWeather();
	console.log(`City: ${weatherInfo.city}, Temperature: ${weatherInfo.temperature}, Forecast: ${weatherInfo.forecast}`);
}
getWeather();