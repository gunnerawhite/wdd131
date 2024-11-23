// Footer: Display current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperatureF = 85; // Temperature in Fahrenheit
const windSpeedMph = 17; // Wind speed in mph

// Function to calculate wind chill in Imperial units
function calculateWindChill(temp, windSpeed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1); // round to nearest decimal
}

// Check conditions for wind chill calculation
let windChill;
if (temperatureF <= 50 && windSpeedMph > 3) {
    windChill = calculateWindChill(temperatureF, windSpeedMph) + " °F";
} else {
    windChill = "N/A"; // Not applicable
}

// Update the HTML with the wind chill value
document.getElementById("windchillValue").textContent = windChill;