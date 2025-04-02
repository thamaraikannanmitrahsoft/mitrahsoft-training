abstract class department {
    departmentName: string;
    employees: { name: string; age: number; email: string; }[];
    constructor(departmentName: string) {
        this.departmentName = departmentName
        this.employees = []
    }
    sortEmployees(direction: 'asc' | 'dsc' = 'asc') {
        return this.employees.sort((firstName, secondName) => {
            if (direction === 'asc') {
                return firstName.name.localeCompare(secondName.name)
            }
            else {
                return secondName.name.localeCompare(firstName.name)
            }
        })
    }
}
class departmentInformation extends department {
    constructor(departmentName: string, data: { department: string; employees: { name: string; age: number; email: string; }[] }[]) {
        super(departmentName)
        const department = data.find(departmentInfo => departmentInfo.department == departmentName)
        if (department) {
            this.employees = department.employees
        }
    }
    findEmployees = (name: string) => {
        const employee = this.employees.find(employee => employee.name === name)
        if (employee) {
            return employee
        }
        else {
            return "No employee found with that name"
        }
    }
}
const departmentData = [
    {
        "department": "Marketing",
        "employees": [
            { "name": "James", "age": 20, "email": "James@yopmail.com" },
            { "name": "Jack", "age": 23, "email": "Jack@yopmail.com" },
            { "name": "George", "age": 54, "email": "George@yopmail.com" },
            { "name": "Thomas", "age": 45, "email": "Thomas@yopmail.com" }
        ]
    },
    {
        "department": "Sales",
        "employees": [
            { "name": "John", "age": 45, "email": "John@yopmail.com" },
            { "name": "Daniel", "age": 10, "email": "Daniel@yopmail.com" },
            { "name": "David", "age": 12, "email": "David@yopmail.com" },
            { "name": "Oscar", "age": 15, "email": "Oscar@yopmail.com" }
        ]
    },
    {
        "department": "Finance",
        "employees": [
            { "name": "Michael", "age": 21, "email": "Michael@yopmail.com" },
            { "name": "Noah", "age": 22, "email": "Noah@yopmail.com" },
            { "name": "Robert", "age": 25, "email": "Robert@yopmail.com" },
            { "name": "Liam", "age": 23, "email": "Liam@yopmail.com" }
        ]
    },
    {
        "department": "Human Resource",
        "employees": [
            { "name": "Richard", "age": 22, "email": "Richard@yopmail.com" },
            { "name": "Martin", "age": 21, "email": "Martin@yopmail.com" },
            { "name": "Charlie", "age": 23, "email": "Charlie@yopmail.com" },
            { "name": "Jake", "age": 22, "email": "Jake@yopmail.com" }
        ]
    },
    {
        "department": "Operations",
        "employees": [
            { "name": "Henry", "age": 25, "email": "Henry@yopmail.com" },
            { "name": "Jack", "age": 40, "email": "Jack@yopmail.com" },
            { "name": "William", "age": 16, "email": "William@yopmail.com" },
            { "name": "Alexander", "age": 28, "email": "Alexander@yopmail.com" }
        ]
    }
]
const financeDept = new departmentInformation("Finance", departmentData)
console.log("Finance department employees in descending order: ", financeDept.sortEmployees('dsc'));
const salesDept = new departmentInformation("Sales", departmentData)
console.log("Sales department employees in Ascending order: ", salesDept.sortEmployees('asc'));
console.log("Find details of the employees:");
const hrDept = new departmentInformation("Human Resource", departmentData)
console.log(hrDept.findEmployees("Charlie"));
const operationsDept = new departmentInformation("Operations", departmentData)
console.log(operationsDept.findEmployees("William"));
console.log(financeDept.findEmployees("David"));