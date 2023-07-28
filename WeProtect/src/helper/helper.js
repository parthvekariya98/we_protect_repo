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

export const formatTimeAgo = (publishedAt) => {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);
    const timeDifferenceInSeconds = Math.floor((currentDate - publishedDate) / 1000);
  
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
  
    if (timeDifferenceInSeconds < MINUTE) {
      return "Just now";
    } else if (timeDifferenceInSeconds < HOUR) {
      const minutesAgo = Math.floor(timeDifferenceInSeconds / MINUTE);
      return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
    } else if (timeDifferenceInSeconds < DAY) {
      const hoursAgo = Math.floor(timeDifferenceInSeconds / HOUR);
      return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
    } else {
      const daysAgo = Math.floor(timeDifferenceInSeconds / DAY);
      return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    }
  };
  