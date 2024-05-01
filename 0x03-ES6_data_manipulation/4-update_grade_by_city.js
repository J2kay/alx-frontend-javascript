export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
      const matchingGrade = newGrade.find((studentGrade) => studentGrade.studentId === student.id);
      const updatedStudent = { ...student };

      if (matchingGrade) {
        updatedStudent.grade = matchingGrade.grade;
      }

      if (!Object.prototype.hasOwnProperty.call(updatedStudent, 'grade')) {
        updatedStudent.grade = 'N/A';
      }

      return updatedStudent;
    });
}
