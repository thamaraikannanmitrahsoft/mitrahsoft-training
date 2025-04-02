input = [
    { Red: 5, Green: 54, Blue: 34 },
    { Red: 15, Green: 45, Blue: 56 },
    { Red: 52, Green: 57, Blue: 67 },
    { Red: 522, Green: 15, Blue: 97 },
    { Red: 53, Green: 50, Blue: 123 },
    { Red: 45, Green: 58, Blue: 34 },
];
reducedInput = input.reduce((accumulator, current) => {
    accumulator.Red += current.Red;
    accumulator.Green += current.Green;
    accumulator.Blue += current.Blue;
    return accumulator;
});
console.log(reducedInput); 