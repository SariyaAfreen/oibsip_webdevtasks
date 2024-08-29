document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(tempInput)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;

    if (inputUnit === outputUnit) {
        convertedTemp = tempInput;
    } else if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
            convertedTemp = (tempInput * 9/5) + 32;
        } else if (outputUnit === 'kelvin') {
            convertedTemp = tempInput + 273.15;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            convertedTemp = (tempInput - 32) * 5/9;
        } else if (outputUnit === 'kelvin') {
            convertedTemp = (tempInput - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
            convertedTemp = tempInput - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            convertedTemp = (tempInput - 273.15) * 9/5 + 32;
        }
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
});
