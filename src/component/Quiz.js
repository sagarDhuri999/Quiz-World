import { CircularProgress } from '@mui/material';
//  import { color } from '@mui/system';
import React, { useEffect, useState } from 'react'
import QuestionOn from './QuestionOn';
import './Question.css'

const Quiz = ({ name1, score, question, setScore, setQuestion }) => {
    //ALL state
    const [option, setOption] = useState();
    const [current, setCurrent] = useState(0);  //current Questions

    useEffect(() => {
        console.log(question);
        setOption(
            question && handleShuffle(
                [question[current]?.correct_answer,
                ...question[current]?.incorrect_answers,]))


    }, [question, current]);

    // console.log(option);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5); //Mixing currentQuestions

    }


    return (
        <div className='main'>
            <h3 className='subName' style={{ color: ' rgba(211, 175, 175, 0.999)', textAlign: 'center', fontSize: '2rem' }}>Welcome,{name1}</h3>
            {question ? (<><div className="quizInfo">
                <span className='category' >{question[current].category}</span>
                <br />
                <span className='score' >score:5/<strong>{score}</strong></span></div>
                <QuestionOn current={current} setCurrent={setCurrent} option={option} correct={question[current]?.correct_answer}
                    question={question} score={score} setScore={setScore} setQuestion={setQuestion}
                />

            </>) : (

                <CircularProgress style={{ margin: 100, color: 'inherit', size: 170, thickness: 1, marginTop: '20%', marginLeft: '50%' }} />
            )}

        </div>
    )
}

export default Quiz
