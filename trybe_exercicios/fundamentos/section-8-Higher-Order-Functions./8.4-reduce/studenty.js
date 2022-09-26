const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grade) {
  return students.map((student, index) => ({
    name: student,
    average: grade[index].reduce((acc, note) => acc + note) /grade[index].length
  }))
}


module.exports = studentAverage;