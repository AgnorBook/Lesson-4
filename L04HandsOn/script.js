class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
class Manager extends Employee{
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name,salary,hireDate);
        this.descriptionOfJob = descriptionOfJob
    }
    jobDesription(){
        console.log(this.name + " was hired on " + this.hireDate + " and is making " + this.salary + " because they " + this.descriptionOfJob + ".");        
    }
  }
class Designer extends Employee{
    constructor(name, salary, hireDate, yearsOfExperience){
        super(name, salary, hireDate);
        this.yearsOfExperience = yearsOfExperience;
    }
    yearsExperience(){
        console.log(this.name + " was hired on " + this.hireDate + " and is being paid " + this.salary + " and has " + this.yearsOfExperience + "years of experience.");
    }
}
class SalesAssociate extends Employee{
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate + ", is making " + this.salary + " and has completed " + this.degrees + " degree.");
        
    }
}

let David = new Manager("David", 64000, "2/12/15", "manage the shop floor");
let Anna = new Designer("Anna", 52000, "12/04/14", 7);
let Vic = new SalesAssociate("Vic", 36500, "6/22/16", "Associate of Business Finance");

David.jobDesription();

Anna.yearsExperience();

Vic.degreeCompleted();