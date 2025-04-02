const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
];
const studentAverages = students.map(student => {
    const sum = student.scores.reduce((accumulator, score) => accumulator + score);
    return { name: student.name, average: sum / student.scores.length };
});
const aboveNintyMarks = studentAverages.filter(student => student.average > 90);
console.log(aboveNintyMarks);