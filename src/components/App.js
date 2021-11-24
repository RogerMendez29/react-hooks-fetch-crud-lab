import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function retrieveQuestions(question) {
    setQuestions(question);
  }

  function addQuestion(newQuestion) {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
  }
  function deleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />

      {page === "Form" ? (
        <QuestionForm addQuestion={addQuestion} />
      ) : (
        <QuestionList
          deleteQuestion={deleteQuestion}
          questions={questions}
          retrieveQuestions={retrieveQuestions}
          page={page}
        />
      )}
    </main>
  );
}

export default App;
