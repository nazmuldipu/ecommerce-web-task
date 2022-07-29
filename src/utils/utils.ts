
function FormatNumber(num: number) {
    const options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };

    return Number(num).toLocaleString('en', options);
}
function FormatInterger(num: number) {
    const options = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    };
    return Number(num).toLocaleString('en', options);
}



export { FormatNumber, FormatInterger }

