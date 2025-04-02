"use strict";
var studentDetails = [
    { "name": "JOHN", "age": 13, "rank": 2 },
    { "name": "HARRY", "age": 13, "rank": 1 },
    { "name": "VENOM", "age": 13, "rank": 10 },
    { "name": "MARK", "age": 13, "rank": 11 },
    { "name": "BROCK", "age": 13, "rank": 40 },
    { "name": "HENRY", "age": 13, "rank": "" },
    { "name": "TIM", "age": 13, "rank": 27 },
    { "name": "MARRY", "age": 13, "rank": 22 },
    { "name": "MANOJ", "age": 13, "rank": 12 }
];
let fetchGrade = (rank) => {
    if (rank <= 10) {
        return "A+";
    }
    if (rank <= 15) {
        return "A";
    }
    if (rank <= 25) {
        return "B";
    }
    return "C";
};
const fetchStudentDetails = (studentDetails) => {
    let filteredStudents = studentDetails.filter((students) => students.rank !== "");
    let studentRank = filteredStudents.map((students) => (Object.assign(Object.assign({}, students), { grade: fetchGrade(Number(students.rank)) })));
    return studentRank;
};
let resultRank = fetchStudentDetails(studentDetails);
console.log(resultRank);
