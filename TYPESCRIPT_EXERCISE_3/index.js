"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculation_1 = require("./calculation");
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
const fetchStudentDetails = (studentDetails) => {
    let filteredStudents = studentDetails.filter((students) => students.rank !== "");
    let studentRank = filteredStudents.map((students) => (Object.assign(Object.assign({}, students), { grade: calculation_1.studentInformation.fetchGrade(Number(students.rank)) })));
    return studentRank;
};
let resultRank = fetchStudentDetails(studentDetails);
let result = calculation_1.studentInformation.studentPerformance(resultRank);
console.log("THE PERFORMANCE DATA OF STUDENTS ARE:", result);
let firstRankStudents = result.find(student => student.rank == 1) || null;
if (firstRankStudents) {
    console.log("THE FIRST RANK STUDENT IS: ", firstRankStudents);
}
console.assert(firstRankStudents !== null, "There is no student with 1st rank");
