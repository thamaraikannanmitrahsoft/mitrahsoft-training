const user = {
    data: [
        {
            name: "Ajay",
            personal: {
                age: "25",
                native: "nellai",
                education: {
                    rank: "2",
                    grade: "B",
                },
                interest: {
                    hobby: "book reading",
                },
            },
        },
        {
            name: "vicky",
            personal: {
                age: "26",
                native: "chennai",
                education: {
                    rank: "3",
                    grade: "D",
                },
                interest: {
                    hobby: "playing",
                },
            },
        },
        {
            name: "muthu",
            personal: {
                age: "35",
                native: "madurai",
                education: {
                    rank: "5",
                    grade: "F",
                },
                interest: {
                    hobby: "writing",
                },
            },
        },
    ],
};
const { data } = user;
const [userOne, userTwo, userThree] = data;
const { personal } = userOne;
const { education } = personal;
const { rank, grade } = education;
const { personal: personalTwo } = userTwo;
const { education: educationtwo } = personalTwo;
const { rank: rankTwo, grade: gradeTwo } = educationtwo;
const { personal: personalThree } = userThree;
const { education: educationThree } = personalThree;
const { rank: rankThree, grade: gradeThree } = educationThree;
console.log(rank, grade);
console.log(rankTwo, gradeTwo);
console.log(rankThree, gradeThree);