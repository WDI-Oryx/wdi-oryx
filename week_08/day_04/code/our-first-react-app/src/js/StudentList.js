import React from "react";
import Student from "./Student";

class StudentList extends React.Component {
  render() {
    const students = [
      "Faisal Al - Qahtani",
      "Mada Alwuthaynani",
      "Njod Alnasser",
      "Atheer Minwar",
      "Halimah Alshahrani",
      "Rawan Albahouth",
      "Sami Aldahlawi",
      "Noura Alsubaie",
      "Noura Alhadlaq",
      "Jafar Alhajji",
      "Dalal Saeed",
      "Alanoud AlRasheed",
      "Razan Almusa",
      "Leana Alqurashi",
      "Sarah AlFadly",
      "Mashael Almosallam",
      "Wafa Alturaifi",
      "Abdullah AlQahtani",
      "Sultan Alsamaani",
      "Thekra Alowais",
      "Sarah Alasadi",
      "Mohammed abdulqader",
      "Saud Almotairy",
      "Mansour Bin Suqayan",
      "Haya AlMousa",
      "Ali Alsubaie"
    ];
    const items = students.map(function(s) {
      // This should be an instance of Student
      return <Student name={s} />;
    });
    return (
      <div>
        <h1>All Students</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default StudentList;
