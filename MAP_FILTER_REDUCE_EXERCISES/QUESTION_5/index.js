const arr = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 30 },
    { name: 'Peter', age: 35 }
];
renamedArray = arr.map((object) => {
    object.name = object.name.toUpperCase();
    return object;
});
console.log(renamedArray);