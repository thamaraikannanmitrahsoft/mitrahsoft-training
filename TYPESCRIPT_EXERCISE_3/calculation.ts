export namespace studentInformation {
    enum PerformanceIndex {
        "Excellent",
        "Very Good",
        "Good",
        "Need Improvement"
    }
    export const fetchGrade = (rank: number): string => {
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
    export const studentPerformance = <T extends { grade?: string }>(studentDetails: T[]): T[] => {
        let GradeArray: string[] = ["A+", "A", "B", "C"];
        return studentDetails.map((student) => {
            let value: string = student.grade ?? "";
            let index: number = GradeArray.indexOf(value);
            return {
                ...student,
                performance: PerformanceIndex[index]
            };
        });
    };
}