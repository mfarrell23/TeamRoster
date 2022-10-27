const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateHtml");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const employee=[]
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "getName",
  },
  {
    type: "input",
    message: "What is your employee id?",
    name: "getId",
  },
  {
    type: "input",
    message: "What is your email",
    name: "getEmail",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "getName",
  },
  {
    type: "input",
    message: "What is your employee id?",
    name: "getId",
  },
  {
    type: "input",
    message: "What is your email",
    name: "getEmail",
  },
  {
    type: "input",
    message: "What is your github?",
    name: "github",
  },
];
const internQuestions= [
    
    {
        type: 'input',
        message: 'What is your name?',
        name: 'getName',
    },
    {
        type: 'input',
        message: 'What is your job role',
        name: 'getRole',
    },
    {
        type: 'input',
        message: 'What is your employee id?',
        name: 'getId',
    },
    {
        type: 'input',
        message: 'What is your email',
        name: 'getEmail',
    },
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school',
    }
]
const engineerOrInern= {
                type:'list',
                message: 'what type of teamate do you want?',
                name: "getTeam",
                choices:['Engineer','Intern','quit'],
            }

function addManager(){
    inquirer.prompt(managerQuestions)
    .then ((response)=>{
        const{getName, getId, getEmail, officeNumber}= response;
        let manager = new Manager(getName, getId, getEmail, officeNumber);
        console.log(manager)
        employee.push(manager)
        teammate()
    });
}

function teammate(){
    inquirer.prompt(engineerOrInern)
    .then ((response)=>{
        if(response.getTeam==='Engineer'){
            addEngineer()
            console.log('i want to add engineer')
        }else if(response.getTeam==='Intern'){
            addIntern()
            console.log('i want to add an intern')
        }else{
        console.log('BYE-BYE')
        fs.writeFileSync("index.html", generateMarkdown(employee));
        }
    
    });
}

function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then ((response)=>{
        const{getName, getId, getEmail,github }= response;
        let engineer = new Engineer(getName, getId, getEmail, github);
        console.log(engineer)
        employee.push(engineer)
        teammate()
    });
}

function addIntern(){
    inquirer.prompt(internQuestions)
    .then ((response)=>{
        const{getName, getId, getEmail,school }= response;
        let intern = new Intern(getName, getId, getEmail, school);
        console.log(intern)
        employee.push(intern)
        teammate()
    });
}

addManager();

