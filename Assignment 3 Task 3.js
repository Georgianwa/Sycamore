function fetchWeather(city) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (city === "Lagos") {
				const weatherInfo = { 
					city: "Lagos", 
					temperature: 28, 
					forecast: "Cloudy"
				};
				resolve(weatherInfo);
			}else{
				reject(new Error(`Weather data for ${city} not found`));
			}
		}, 2000);
	});
}
async function getWeather(city) {
	try {
		const weather = await fetchWeather(city);
		console.log(`City: ${weather.city}, Temperature: ${weather.temperature}, Forecast: ${weather.forecast}`);
	}catch (error) {
		console.error("Error fetching weather information:", error.message);
	}
}

getWeather("Lagos");
getWeather("Abuja")