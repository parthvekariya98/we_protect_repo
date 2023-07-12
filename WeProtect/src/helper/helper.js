export const getCelsiusToKelvin = (kelvin) => {
    const celsius = kelvin - 273.15;
    const final = Math.round(celsius * 10) / 10 + '°C';
    return final;
};