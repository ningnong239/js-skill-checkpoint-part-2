const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
function Under20(people1, people2) {
  const allPeople = [...people1, ...people2];
  console.log(allPeople);
  return allPeople.filter(person => person.age < 20);
  
}

const result = Under20(techupPeople, techcoolPeople);

console.log(result);