export const getCelsiusToKelvin = (kelvin) => {
    const celsius = kelvin - 273.15;
    const final = Math.round(celsius * 10) / 10 + '°C';
    return final;
};

export const roundOff = (number) => {
    const final = Math.round(number * 10) / 10 + '°C';
    return final;
}

export const getFormattedHourFromDate = (date) => {
    const dateTime = new Date(date);
    const hour = dateTime.getHours();
    const isAM = hour < 12;
    const formattedHour = hour % 12 || 12;
    const period = isAM ? 'AM' : 'PM';
    return `${formattedHour}:00 ${period}`;
};