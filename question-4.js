const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];

// เพิ่ม property company ให้กับแต่ละพนักงาน
const alphaTechWithCompany = alphaTech.map(employee => ({ ...employee, company: 'alphaTech' }));
const betaSoftWithCompany = betaSoft.map(employee => ({ ...employee, company: 'betaSoft' }));
const gammaDevWithCompany = gammaDev.map(employee => ({ ...employee, company: 'gammaDev' }));

const allEmployees = [
  ...alphaTechWithCompany,
  ...betaSoftWithCompany,
  ...gammaDevWithCompany
];
console.log(allEmployees);

const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
});
const answer = result.map((employee) => {
  return {
    name: employee.name,
    company: employee.company
  };
});




console.log(answer);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

