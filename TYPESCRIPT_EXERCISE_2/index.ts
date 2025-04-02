interface student {
    name: string;
    age?: number;
    rank: number | string;
    grade?: string;
    performance?: string;
}
enum performanceIndex {
    "Excellent",
    "Very Good",
    "Good",
    "Need Improvement"
}
var studentDetails: student[] = [
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
let fetchGrade = (rank: number): string => {
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
const fetchStudentDetails = (studentDetails: student[]): student[] => {
    let filteredStudents: student[] = studentDetails.filter((students) => students.rank !== "");
    let studentRank: student[] = filteredStudents.map((students) => ({
        ...students,
        grade: fetchGrade(Number(students.rank))
    }));
    return studentRank;
};
let GradeArray: string[] = ["A+", "A", "B", "C"];
//Result of exercise 1
let resultRank: student[] = fetchStudentDetails(studentDetails);
const studentPerformance = (studentDetails: student[]): student[] => {
    let performanceData: student[] = studentDetails.map((students) => {
        let value: string = students.grade ?? "";
        let index: number = GradeArray.indexOf(value);
        return {
            ...students,
            performance: performanceIndex[index]
        };
    });
    return performanceData;
};
let result: student[] = studentPerformance(resultRank);
console.log("THE PERFORMANCE DATA OF STUDENTS ARE:", result);
let firstRankStudents: student | null = result.find((student) => student.rank == 1) || null;
console.log("THE FIRST RANK STUDENT IS:", firstRankStudents);
console.assert(firstRankStudents !== null, "There is no student with 1st rank");