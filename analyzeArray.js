export default function analyzeArray(array) {
    let min = array.reduce((accumulator, currentValue) => {
        return Math.min(accumulator, currentValue);
    });

    let max = array.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue);
    });

    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    let average = Math.round((sum / array.length) * 100) / 100;

    return { length: array.length, min: min, max: max, average: average };
}
