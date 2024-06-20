document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertBtn = document.getElementById('convertBtn');
    const reverseBtn = document.getElementById('reverseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const conversionResult = document.getElementById('conversionResult');
    const formulaExplanationTextarea = document.getElementById('kalkulasiText');

    convertBtn.addEventListener('click', function() {
        convertTemperature();
    });

    reverseBtn.addEventListener('click', function() {
        reverseConversion();
    });

    resetBtn.addEventListener('click', function() {
        resetForm();
    });

    function convertTemperature() {
        let temperature = parseFloat(temperatureInput.value);
        let unit = unitSelect.value;
        
        let result;
        let explanation;
        if (unit === 'celsius') {
            result = (temperature * 9/5) + 32;
            explanation = `${temperature} °C = (${temperature} * 9/5) + 32 = ${result.toFixed(2)} °F`;
        } else {
            result = (temperature - 32) * 5/9;
            explanation = `${temperature} °F = (${temperature} - 32) * 5/9 = ${result.toFixed(2)} °C`;
        }

        conversionResult.textContent = `${result.toFixed(2)} ${unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
        formulaExplanationTextarea.value = explanation;
    }

    function reverseConversion() {
        let currentUnit = unitSelect.value;
        let newUnit = (currentUnit === 'celsius') ? 'fahrenheit' : 'celsius';
        unitSelect.value = newUnit;

        conversionResult.textContent = '';
        formulaExplanationTextarea.value = '';

        temperatureInput.value = '';
    }

    function resetForm() {
        temperatureInput.value = '';
        unitSelect.value = 'celsius';
        conversionResult.textContent = '';
        formulaExplanationTextarea.value = '';
    }
});
