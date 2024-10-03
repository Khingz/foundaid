export const digitOnly = (value) => {
    const regex = /^[0-9\b]+(\.[0-9]{1,2})?$/;

    if (value === '') {
        return '';
    }

    return regex.test(value) ? value : undefined;
}

export const convertToTwoDecimal = (str) => {
    const number = parseFloat(str);
    
    if (isNaN(number)) {
        return null;
    }

    return number.toFixed(2);
};