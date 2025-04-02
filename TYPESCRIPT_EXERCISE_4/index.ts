class user {
    private name: string;
    private email: string;
    private age?: number;
    private address?: string;
    private city?: string;
    private state?: string;
    private contactnumber?: number;
    protected role?: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    getName = (): string => this.name;
    getEmail = (): string => this.email;
    getAge = (): number | undefined => this.age;
    getAddress = (): string | undefined => this.address;
    getCity = (): string | undefined => this.city;
    getState = (): string | undefined => this.state;
    getContactNumber = (): number | undefined => this.contactnumber;
    getRole = (): string | undefined => this.role;
    setAge = (age: number) => this.age = age;
    setAddress = (address: string) => this.address = address;
    setCity = (city: string) => this.city = city;
    setState = (state: string) => this.state = state;
    setContactNumber = (contactnumber: number) => this.contactnumber = contactnumber;
    setRole = (role: string): string | undefined => this.role = role;
}
class student extends user {
    private studentClass?: string;
    private rank?: number;
    constructor(name: string, email: string, studentClass: string, rank: number) {
        super(name, email)
        this.studentClass = studentClass;
        this.rank = rank;
    }
    getClass = (): string | undefined => this.studentClass;
    getRank = (): number | undefined => this.rank;
    setClass = (studentClass: string) => this.studentClass = studentClass;
    setRank = (rank: number) => this.rank = rank;
    setStudentAge = (age: number) => {
        if (age >= 5) {
            this.setAge(age);
        }
        else {
            console.log("Student age can not be less than 5");
        }
    }
}
class teacher extends user {
    private subject?: string;
    private classHandeled?: string;
    private experience?: number;
    constructor(name: string, email: string, subject: string, classHandeled: string, experience: number) {
        super(name, email)
        this.subject = subject;
        this.classHandeled = classHandeled;
        this.experience = experience
    }
    getSubject = (): string | undefined => this.subject;
    getClassHandeled = (): string | undefined => this.classHandeled;
    getexperience = (): number | undefined => this.experience;
    setSubject = (subject: string) => this.subject = subject;
    setClassHandeled = (classHandeled: string) => this.classHandeled = classHandeled;
    setExperience = (experience: number) => this.experience = experience;
    setTeacherAge = (age: number) => {
        if (age > 20) {
            this.setAge(age);
        }
        else {
            console.log("Teacher age can not be less than 20");
        }
    }
}
let studentOne = new student("XXX", "xxx@gmail.com", "II", 1)
studentOne.setStudentAge(2);
studentOne.setCity('Madurai');
studentOne.setRole('student');
console.log('STUDENT DETAILS:');
console.log(`Name: ${studentOne.getName()}`);
if (Number(studentOne.getAge()) >= 5) {
    console.log(`Age: ${studentOne.getAge()}`);
}
console.log(`Email: ${studentOne.getEmail()}`);
console.log(`Class: ${studentOne.getClass()}`);
console.log(`Rank: ${studentOne.getRank()}`);
console.log(`Role: ${studentOne.getRole()}`);
console.log(`city: ${studentOne.getCity()}`);
let teacherOne = new teacher("YYY", "yyy@gmail.com", "Science", "II", 8)
teacherOne.setTeacherAge(19);
teacherOne.setCity('Madurai')
teacherOne.setRole('Teacher');
console.log('TEACHER DETAILS:');
console.log(`Name: ${teacherOne.getName()}`);
if (Number(teacherOne.getAge()) > 20) {
    console.log(`Age: ${teacherOne.getAge()}`);
}
console.log(`Email: ${teacherOne.getEmail()}`);
console.log(`subject: ${teacherOne.getSubject()}`);
console.log(`Class Handeled: ${teacherOne.getClassHandeled()}`);
console.log(`Year of Experience: ${teacherOne.getexperience()}`);
console.log(`Role: ${teacherOne.getRole()}`);
console.log(`city: ${teacherOne.getCity()}`);