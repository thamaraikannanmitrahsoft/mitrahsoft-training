const user = {
    name: 'ajay',
    age: 23,
    qualification: 'B.E.Csc'
}
userDetails = () => {
    user.rollno = '12345';
    user.gender = 'Male'
}
userDetails();
console.log(user);