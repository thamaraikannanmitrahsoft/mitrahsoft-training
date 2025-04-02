"use strict";
class user {
    constructor(name, email) {
        this.getName = () => this.name;
        this.getEmail = () => this.email;
        this.getAge = () => this.age;
        this.getAddress = () => this.address;
        this.getCity = () => this.city;
        this.getState = () => this.state;
        this.getContactNumber = () => this.contactnumber;
        this.getRole = () => this.role;
        this.setAge = (age) => this.age = age;
        this.setAddress = (address) => this.address = address;
        this.setCity = (city) => this.city = city;
        this.setState = (state) => this.state = state;
        this.setContactNumber = (contactnumber) => this.contactnumber = contactnumber;
        this.setRole = (role) => this.role = role;
        this.name = name;
        this.email = email;
    }
}
class student extends user {
    constructor(name, email, studentClass, rank) {
        super(name, email);
        this.getClass = () => this.studentClass;
        this.getRank = () => this.rank;
        this.setClass = (studentClass) => this.studentClass = studentClass;
        this.setRank = (rank) => this.rank = rank;
        this.setStudentAge = (age) => {
            if (age >= 5) {
                this.setAge(age);
            }
            else {
                console.log("Student age can not be less than 5");
            }
        };
        this.studentClass = studentClass;
        this.rank = rank;
    }
}
class teacher extends user {
    constructor(name, email, subject, classHandeled, experience) {
        super(name, email);
        this.getSubject = () => this.subject;
        this.getClassHandeled = () => this.classHandeled;
        this.getexperience = () => this.experience;
        this.setSubject = (subject) => this.subject = subject;
        this.setClassHandeled = (classHandeled) => this.classHandeled = classHandeled;
        this.setExperience = (experience) => this.experience = experience;
        this.setTeacherAge = (age) => {
            if (age > 20) {
                this.setAge(age);
            }
            else {
                console.log("Teacher age can not be less than 20");
            }
        };
        this.subject = subject;
        this.classHandeled = classHandeled;
        this.experience = experience;
    }
}
let studentOne = new student("XXX", "xxx@gmail.com", "II", 1);
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
let teacherOne = new teacher("YYY", "yyy@gmail.com", "Science", "II", 8);
teacherOne.setTeacherAge(19);
teacherOne.setCity('Madurai');
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
