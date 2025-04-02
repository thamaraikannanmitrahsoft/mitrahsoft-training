"use strict";
var performanceIndex;
(function (performanceIndex) {
    performanceIndex[performanceIndex["Excellent"] = 0] = "Excellent";
    performanceIndex[performanceIndex["Very Good"] = 1] = "Very Good";
    performanceIndex[performanceIndex["Good"] = 2] = "Good";
    performanceIndex[performanceIndex["Need Improvement"] = 3] = "Need Improvement";
})(performanceIndex || (performanceIndex = {}));
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
    else if (rank <= 15) {
        return "A";
    }
    else if (rank <= 25) {
        return "B";
    }
    return "C";
};
const fetchStudentDetails = (studentDetails) => {
    let filteredStudents = studentDetails.filter((students) => students.rank !== "");
    let studentRank = filteredStudents.map((students) => (Object.assign(Object.assign({}, students), { grade: fetchGrade(Number(students.rank)) })));
    return studentRank;
};
let GradeArray = ["A+", "A", "B", "C"];
//Result of exercise 1
let resultRank = fetchStudentDetails(studentDetails);
const studentPerformance = (studentDetails) => {
    let performanceData = studentDetails.map((students) => {
        var _a;
        let value = (_a = students.grade) !== null && _a !== void 0 ? _a : "";
        let index = GradeArray.indexOf(value);
        return Object.assign(Object.assign({}, students), { performance: performanceIndex[index] });
    });
    return performanceData;
};
let result = studentPerformance(resultRank);
console.log("THE PERFORMANCE DATA OF STUDENTS ARE:", result);
let firstRankStudents = result.find((student) => student.rank == 1) || null;
console.log("THE FIRST RANK STUDENT IS:", firstRankStudents);
console.assert(firstRankStudents !== null, "There is no student with 1st rank");
