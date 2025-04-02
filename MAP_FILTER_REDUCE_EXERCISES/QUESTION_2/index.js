const input = [
    { value: 5 },
    { value: 10 },
    { value: 15 },
    { value: 20 }
];
multipliedArray = input.map((object) => {
    return { value: object.value * 2 }
})
console.log(multipliedArray);