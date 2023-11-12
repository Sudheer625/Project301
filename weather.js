async function showWeather(){
    a  = placeName.value

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +a;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9674b3aca5msh24acd9ba37e5f63p198addjsn9f1edc95f818',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
    
}