"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentInformation = void 0;
var studentInformation;
(function (studentInformation) {
    let PerformanceIndex;
    (function (PerformanceIndex) {
        PerformanceIndex[PerformanceIndex["Excellent"] = 0] = "Excellent";
        PerformanceIndex[PerformanceIndex["Very Good"] = 1] = "Very Good";
        PerformanceIndex[PerformanceIndex["Good"] = 2] = "Good";
        PerformanceIndex[PerformanceIndex["Need Improvement"] = 3] = "Need Improvement";
    })(PerformanceIndex || (PerformanceIndex = {}));
    studentInformation.fetchGrade = (rank) => {
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
    studentInformation.studentPerformance = (studentDetails) => {
        let GradeArray = ["A+", "A", "B", "C"];
        return studentDetails.map((student) => {
            var _a;
            let value = (_a = student.grade) !== null && _a !== void 0 ? _a : "";
            let index = GradeArray.indexOf(value);
            return Object.assign(Object.assign({}, student), { performance: PerformanceIndex[index] });
        });
    };
})(studentInformation || (exports.studentInformation = studentInformation = {}));
