// For the skills table

const skillSets = [
    {
        "item": "HTML5",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "CSS3",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "Python",
        "strength": "Intermediate",
        "type": "Language",
    },
    {
        "item": "Bash",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "Java",
        "strength": "Intermediate",
        "type": "Language",
    },
    {
        "item": "Git",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "C Sharp",
        "strength": "Learning/Some Experience",
        "type": "Language",
    },
    {
        "item": "PHP",
        "strength": "Want to learn",
        "type": "Language",
    },
    {
        "item": "R",
        "strength": "Want to learn",
        "type": "Language",
    },
    {
        "item": "React.js",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "React Native",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Angular",
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Spring Boot",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": ".NET",
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "D3.js",
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Node.js",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Mustache-Express MVC",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "SQL",
        "strength": "Intermediate",
        "type": "Databases",
    },
    {
        "item": "MongoDB",
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    {
        "item": "PostreSQL",
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    {
        "item": "Mongoose",
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    {
        "item": "Jira",
        "strength": "Expert",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Confluence",
        "strength": "Expert",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Maple",
        "strength": "Intermediate",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Matlab",
        "strength": "Intermediate",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Linux",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "AWS",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Heroku",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Apache Maven",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Visual Studio Code",
        "strength": "Expert",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Intellij",
        "strength": "Expert",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Kanban",
        "strength": "Want to learn",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Agile",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Scrum",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Xcode",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Android Studio",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Test Driven Development (TDD)",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "AJAX",
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    {
        "item": "GraphQL",
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    {
        "item": "Soap APIs",
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    {
        "item": "RESTful Routes",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    {
        "item": "Event Listeners",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    {
        "item": "DOM manipulation",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    {
        "item": "Template Literals",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
]

// import {skillSets} from '../skill_sets.json';
// import skillSets from '../skill_sets.json';
// var skillSets = require('../skill_sets.json');
// import * as skillSets from '../skill_sets.json';
// import * as skillSets from './skill_sets.json';
// import skillSets from './skill_sets.json';
// var skillSets = require('./skill_sets.json');
// var mydata = JSON.parse(skillSets);

data = {
    "Q1": [1,2,3,2],
    "Q2": [5,6,7,6],
    "Q3": [9,10,11,10]
};
console.log(data);
var tbody = document.getElementById('tbody');
tbody.innerHTML=`<p>Hello</p>`;

// Need to iterate through the skill_sets.json object. If a sub-object has 'Language' as 'type' and 'Expert' as 'strength', then value for 'name' needs to go in the cell occupied by the row 'Expert' and the column 'Language'.

// console.log(skill_sets.json);
// console.log(skillSets);
// console.log(skillSets[0]);
// console.log(skillSets[2].item);
var myArray=[];
for (let index = 0; index < skillSets.length; index++) {
    const element = skillSets[index].item;
    myArray.push(skillSets[index].item);
    console.log(element);
}
console.log(myArray);

// fetch(skillSets)
//   .then(response => response.json())
//   .then(json => console.log(json));

// (function(){
//     console.log(skillSets); // {"a" : "b", "c" : "d"}
//  })();


// export table.js;