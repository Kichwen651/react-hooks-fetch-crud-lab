import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List"); // Page state to toggle between Form and List
  const [questions, setQuestions] = useState([]); // State to hold the list of questions

  // Function to add a new question to the list
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addQuestion={addQuestion} />
      ) : (
        <QuestionList questions={questions} />
      )}
    </main>
  );
}

export default App;
