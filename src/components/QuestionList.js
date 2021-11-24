import { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, retrieveQuestions, page, deleteQuestion }) {
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => retrieveQuestions(data));
  }, [page]);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionItem
              deleteQuestion={deleteQuestion}
              key={question.id}
              question={question}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
