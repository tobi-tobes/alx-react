import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const iter = Seq(object);
  const toPrint = iter
    .filter((student) => student.score > 70)
    .map((student) => student
      .update('firstName', (firstName) => firstName.charAt(0).toUpperCase() + firstName.slice(1))
      .update('lastName', (lastName) => lastName.charAt(0).toUpperCase() + lastName.slice(1)));
  console.log(toPrint);
}
