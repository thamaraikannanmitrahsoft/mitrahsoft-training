const employee = {
    name: 'ajay',
    age: 26,
    designation: 'software engineer',
    email: 'sr@gmail.com'
};
const updatedEmployee = { ...employee, email: 'sr@mitrahsoft.com' };
console.log(updatedEmployee);