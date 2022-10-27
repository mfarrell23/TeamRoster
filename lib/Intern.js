// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee= require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        this.name = name
        this.role = "Intern"
        this.id = id
        this.email = email
        this.school = school
    }

    getRole(){
        return this.role
    }

    getSchool(){
        return this.school
    }

}


function init(intern) {
    console.log("calling init function");
    fs.writeFileSync('index.html',generateHTML(intern));
}
module.exports = Intern