const user = {
    name: 'karthick',
    age: 12,
    standard: 7
};
const data = {
    marks: [67, 34, 54, 72, 56],
    grade: 'II'
};
const result = { ...user, ...data };
console.log(result);