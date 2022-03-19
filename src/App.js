import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Result from "./component/Result";

function App() {
  const [name1, setName1] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {

    const { data } = await axios.get(`https://opentdb.com/api.php?amount=5${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    console.log(data);
    setQuestion(data.results);

  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home name1={name1} setName1={setName1} fetchQuestions={fetchQuestions} />} ></Route>
          <Route path="/quiz" element={<Quiz name1={name1} question={question} setQuestion={setQuestion} score={score} setScore={setScore} />} ></Route>
          <Route path="/result" element={<Result name1={name1} score={score} />} ></Route>

        </Routes>
      </Router>
    </div>

  );
}

export default App;
