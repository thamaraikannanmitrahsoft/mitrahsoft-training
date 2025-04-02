const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
const employeeDepartemnt = employees.reduce((accumulatorDepartment, currentDepartment) => {
  const department = currentDepartment.department;
  if (accumulatorDepartment[department] == null) {
    accumulatorDepartment[department] = [];
  }
  accumulatorDepartment[department].push(currentDepartment);
  return accumulatorDepartment;
}, {});
const averageSalary = Object.keys(employeeDepartemnt).map(department => {
  const sum = employeeDepartemnt[department].reduce((accumulatorSalary, currentSalary) => accumulatorSalary + currentSalary.salary, 0);
  return { department: department, average: Math.floor(sum / employeeDepartemnt[department].length) };
});
const highestSalary = averageSalary.filter(department => department.average > 65000);
console.log(highestSalary);