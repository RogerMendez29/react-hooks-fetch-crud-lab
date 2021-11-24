import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
      <button onClick={() => onChangePage("Quiz")}>Take Quiz</button>
    </nav>
  );
}

export default AdminNavBar;
