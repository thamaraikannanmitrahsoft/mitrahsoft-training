"use strict";
class employee {
    constructor(name, role, monthlySalary) {
        this.getName = () => this.name;
        this.getRole = () => this.role;
        this.getMonthlySalary = () => this.monthlySalary;
        this.name = name;
        this.role = role;
        this.monthlySalary = monthlySalary;
    }
    Allowance() {
        return this.getMonthlySalary() * 0.05;
    }
}
class developer extends employee {
    constructor(name, role, monthlySalary) {
        super(name, role, monthlySalary);
    }
    annualIncome() {
        return this.getMonthlySalary() * 12;
    }
    ;
}
class manager extends employee {
    constructor(name, role, monthlySalary, yearlyBonusPercentage) {
        super(name, role, monthlySalary);
        this.yearlyBonusPercentage = yearlyBonusPercentage;
    }
    annualIncome() {
        let annualSalary = this.getMonthlySalary() * 12;
        let bonusAmount = (annualSalary * this.yearlyBonusPercentage) / 100;
        let totalIncome = annualSalary + bonusAmount;
        return totalIncome;
    };
    Allowance() {
        return this.getMonthlySalary() * 0.10;
    }
}
class intern extends employee {
    constructor(name, role, monthlySalary) {
        super(name, role, monthlySalary);
    }
    annualIncome() {
        return this.getMonthlySalary() * 12;
    }
    ;
}
const employeeDeveloper = new developer('John', 'Developer', 10000);
console.log(`Name: ${employeeDeveloper.getName()}, Role: ${employeeDeveloper.getRole()}, Monthly Salary: ${employeeDeveloper.getMonthlySalary()} 
Developer Annual Income: ${employeeDeveloper.annualIncome()}
Developer Monthly Allowance: ${employeeDeveloper.Allowance()}`);
const employeeManager = new manager('Mary', 'Manager', 100000, 10);
console.log(`Name: ${employeeManager.getName()}, Role: ${employeeManager.getRole()}, Monthly Salary: ${employeeManager.getMonthlySalary()}
Manager Annual Income: ${employeeManager.annualIncome()}
Manager Monthly Allowance: ${employeeManager.Allowance()}`);
const employeeIntern = new intern('Rob', 'Intern', 1000);
console.log(`Name: ${employeeIntern.getName()}, Role: ${employeeIntern.getRole()}, Monthly Salary: ${employeeIntern.getMonthlySalary()}
Intern Annual Income: ${employeeIntern.annualIncome()}
Intern Monthly Allowance: ${employeeIntern.Allowance()}`);
// overloading
class exampleOverloading {
    computeValues(firstValue, secondValue) {
        if (typeof firstValue == "number" && typeof secondValue == "number") {
            return firstValue * secondValue;
        }
        else if (typeof firstValue == "string" && typeof firstValue == "string") {
            return firstValue + secondValue;
        }
        else if (Array.isArray(firstValue)) {
            let sum = firstValue.reduce((accumulator, current) => accumulator + current, 0);
            return sum;
        }
        else {
            return "Invalid input";
        }
    }
}
const objectOverloading = new exampleOverloading;
console.log(`The value is: ${objectOverloading.computeValues(10, 20)}`);
console.log(`The concatenated string is: ${objectOverloading.computeValues("Hello", "Everyone")}`);
console.log(`The sum of the array is: ${objectOverloading.computeValues([1, 2, 3, 4, 5])}`);