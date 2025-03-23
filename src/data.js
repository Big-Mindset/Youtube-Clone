export const APi_KEY = 'AIzaSyBMpX4szFVvNiVtv5vvLuA3e9E_dP5bS1s'
export const convertor = (value) => {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M"; // Convert to millions
    } else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + "K"; // Convert to thousands
    } else {
        return value.toString(); // Return as is for smaller numbers
    }
};
