/*
 * JavaScript Boilerplate for Weather Dashboard Assignment
 * 
 * This JavaScript file is part of the Asynchronous JavaScript assignment.
 * Your task is to complete the functions with appropriate async/await,
 * handle errors, and update the DOM with the fetched data.
 * 
 * Follow the TODO prompts and complete each section to ensure the
 * weather dashboard works as expected.
 */

// Function: Fetch Weather Data
async function fetchWeatherData(location) {
    const url = `https://wttr.in/${location}?format=j1`;
    try {
        // TODO: Fetch data from the API using async/await
        // Hint: Use the fetch() method and await its response
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        console.log(weatherData)
        return weatherData;
    } catch (error) {
        // TODO: Handle errors gracefully
        // Hint: Log the error to the console and rethrow it
        console.error('Fetch error', error);
        throw error;
    }
}

// Function: Display Weather Data
function displayWeatherData(data) {
    // TODO: Update the DOM with weather data
    // Hint: Use document.getElementById() to select the element and update its innerHTML
    const weather = document.getElementById('weatherData');
    const current = data.current_condition[0];

    weather.innerHTML = `
        <div>
            <h1>Current Weather</h1>
            <p>Temperature: ${current.temp_F}°F</p>
            <p>Feels Like: ${current.FeelsLikeF}°F</p>
            <p>Weather: ${current.weatherDesc[0].value}</p>
            <p>Humidity: ${current.humidity}%</p>
        </div>
    `;
}

// Function: Get Weather
async function getWeather(location) {
    try {
        // TODO: Fetch weather data and display it
        // Hint: Call fetchWeatherData() and displayWeatherData()
        const data = await fetchWeatherData(location);
        displayWeatherData(data);
        
        
    } catch (error) {
        // TODO: Display an error message in the DOM
        // Hint: Use document.getElementById() to select the element and update its innerHTML
        const weather = document.getElementById('weatherData');
        weather.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Couldn't obtain the weather data. Please check the location and try again.
            </div>
        `;



    }
}
// Event Listener for Form Submission
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    await getWeather(location);
});
