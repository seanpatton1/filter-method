  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];


const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// const paul = people.filter(person => person.name === 'Paul');
// below gets it to print out just the object rather than returning array
const paul = people.filter(person => person.name === 'Paul')[0];
console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// const cadidates = students.filter(student =>{
//   let strongskills = student.skills.filter(skill => skill.yrsExpirience >= 5);
//   return strongskills.length > 0;
// })
// console.log(cadidates)

// below is a more condensed filter


const has5yearsExp = skill => skill.yrsExperience >= 5;
let hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const cadidates = students.filter(hasStrongSkills);

const namesOfCandidates = students.filter(hasStrongSkills).map(student => student.name);

console.log(namesOfCandidates);