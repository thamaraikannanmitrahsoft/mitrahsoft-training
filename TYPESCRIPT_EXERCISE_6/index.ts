abstract class employee {
    private name: string;
    private role: string;
    private monthlySalary: number;
    constructor(name: string, role: string, monthlySalary: number) {
        this.name = name;
        this.role = role;
        this.monthlySalary = monthlySalary;
    }
    getName = (): string => this.name;
    getRole = (): string => this.role;
    getMonthlySalary = (): number => this.monthlySalary;
    abstract annualIncome(): number;
    Allowance(): number {
        return this.getMonthlySalary() * 0.05;
    }
}
class developer extends employee {
    constructor(name: string, role: string, monthlySalary: number) {
        super(name, role, monthlySalary);
    }
    annualIncome(): number {
        return this.getMonthlySalary() * 12;
    };
}
class manager extends employee {
    private yearlyBonusPercentage: number;
    constructor(name: string, role: string, monthlySalary: number, yearlyBonusPercentage: number) {
        super(name, role, monthlySalary);
        this.yearlyBonusPercentage = yearlyBonusPercentage;
    }
    annualIncome(): number {
        let annualSalary: number = this.getMonthlySalary() * 12
        let bonusAmount: number = (annualSalary * this.yearlyBonusPercentage) / 100
        let totalIncome: number = annualSalary + bonusAmount;
        return totalIncome;
    };
    Allowance(): number {
        return this.getMonthlySalary() * 0.10;
    }
}
class intern extends employee {
    constructor(name: string, role: string, monthlySalary: number) {
        super(name, role, monthlySalary);
    }
    annualIncome(): number {
        return this.getMonthlySalary() * 12;
    };
}
const employeeDeveloper = new developer('John', 'Developer', 10000)
console.log(`Name: ${employeeDeveloper.getName()}, Role: ${employeeDeveloper.getRole()}, Monthly Salary: ${employeeDeveloper.getMonthlySalary()} 
Developer Annual Income: ${employeeDeveloper.annualIncome()}
Developer Monthly Allowance: ${employeeDeveloper.Allowance()}`);
const employeeManager = new manager('Mary', 'Manager', 100000, 10)
console.log(`Name: ${employeeManager.getName()}, Role: ${employeeManager.getRole()}, Monthly Salary: ${employeeManager.getMonthlySalary()}
Manager Annual Income: ${employeeManager.annualIncome()}
Manager Monthly Allowance: ${employeeManager.Allowance()}`);
const employeeIntern = new intern('Rob', 'Intern', 1000)
console.log(`Name: ${employeeIntern.getName()}, Role: ${employeeIntern.getRole()}, Monthly Salary: ${employeeIntern.getMonthlySalary()}
Intern Annual Income: ${employeeIntern.annualIncome()}
Intern Monthly Allowance: ${employeeIntern.Allowance()}`);
// overloading
class exampleOverloading {
    computeValues(firstValue: number, secondValue: number): number;
    computeValues(firstValue: string, secondValue: string): string;
    computeValues(firstValue: number[]): number
    computeValues(firstValue: any, secondValue?: any): any {
        if (typeof firstValue == "number" && typeof secondValue == "number") {
            return firstValue * secondValue;
        }
        else if (typeof firstValue == "string" && typeof firstValue == "string") {
            return firstValue + secondValue;
        }
        else if (Array.isArray(firstValue)) {
            let sum: number = firstValue.reduce((accumulator, current) => accumulator + current, 0);
            return sum;
        }
        else {
            return "Invalid input"
        }
    }
}
const objectOverloading = new exampleOverloading;
console.log(`The value is: ${objectOverloading.computeValues(10, 20)}`);
console.log(`The concatenated string is: ${objectOverloading.computeValues("Hello", "Everyone")}`);
console.log(`The sum of the array is: ${objectOverloading.computeValues([1, 2, 3, 4, 5])}`);