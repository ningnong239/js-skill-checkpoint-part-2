const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function TotalScore(students) {
const over50 = students.filter((student) => {
  return student.score > 50;
});
console.log(over50);
const upScores = over50.map((student) => {
  return student.score * 1.1;
});
console.log(upScores);

const totalScore = upScores.reduce((acc, cur) => {
  return cur + acc;
}, 0);

  return totalScore;
}

const result = TotalScore(students);

console.log(`Total score is ${result}`);