"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculation_1 = require("./calculation");
const fetchStudentDetails = (studentDetails) => {
    return studentDetails
        .filter((student) => student.rank !== "")
        .map((student) => (Object.assign(Object.assign({}, student), { grade: calculation_1.studentInformation.fetchGrade(Number(student.rank)) })));
};
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
let resultRank = fetchStudentDetails(studentDetails);
let result = calculation_1.studentInformation.studentPerformance(resultRank);
console.log(result);
let firstRankStudent = result.find(student => student.rank === 1) || null;
if (firstRankStudent) {
    console.log(`The first rank student is ${firstRankStudent.name}`);
}
console.assert(firstRankStudent !== null, "There is no student with 1st rank");
