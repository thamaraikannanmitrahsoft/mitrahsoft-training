interface student {
  name: string
  age?: number
  rank: number | string
  grade?: string
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
]
let fetchGrade = (rank: number): string => {
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
}
const fetchStudentDetails = (studentDetails: student[]): student[] => {
  let filteredStudents: student[] = studentDetails.filter((students) => students.rank !== "")
  let studentRank: student[] = filteredStudents.map((students) => ({
    ...students,
    grade: fetchGrade(Number(students.rank))
  }))
  return studentRank;
}
let resultRank: student[] = fetchStudentDetails(studentDetails);
console.log(resultRank)