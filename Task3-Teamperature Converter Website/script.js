function convertTemperature() {

    let temp = document.getElementById("temperature").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result = document.getElementById("result");

    // Validate input
    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);
    let convertedTemp;

    if (fromUnit === toUnit) {
        convertedTemp = temp;
    }

    // Celsius conversions
    else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (temp * 9/5) + 32;
    }

    else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemp = temp + 273.15;
    }

    // Fahrenheit conversions
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (temp - 32) * 5/9;
    }

    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemp = (temp - 32) * 5/9 + 273.15;
    }

    // Kelvin conversions
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemp = temp - 273.15;
    }

    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemp = (temp - 273.15) * 9/5 + 32;
    }

    result.innerHTML = "Converted Temperature: " + convertedTemp.toFixed(2) + "°";
}
