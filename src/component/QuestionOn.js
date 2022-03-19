
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import right from "../sound/right.mp3"
import wrong from "../sound/wrong.mp3"

import './Question.css';


const QuestionOn = ({ question, current, setCurrent, option, score, setScore, correct }) => {
    const Navigation = useNavigate()
    const [selected, setSelected] = useState();
    const [correctAnswer] = useSound(right)
    const [wrongAnswer] = useSound(wrong)
    // const [stop, setStop] = useState(false);
    const handleSelect = (i) => {
        if (current > 3) {
            result2()
        }

        else if (selected === i && selected === correct) {
            setTimeout(() => {
                handleNext()

            }, 2000);


            return "select";

        }
        else if (selected === i && !selected === !correct) {
            wrongAnswer()

            setTimeout(() => {
                handleNext()
            }, 2000);


            return "wrong";

        }
        else if (i === correct) {


            return "select";
        }

    }
    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) {
            correctAnswer()

            // console.log(score);
            setScore(score + 1)
        }

    }
    const handleNext = () => {
        if (selected) {

            setSelected()
            setCurrent(current + 1)
        }

    }
    const result2 = () => {

        if (current > 3) {
            Navigation('/result');
            // console.log('working');

        }
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Question-{current + 1}</h1>
            <br />
            <div className="display">
                <h2 className='cq'>{question[current].question}</h2>
            </div>
            <div className="options">
                {option &&
                    option.map(i => (<button onClick={() => handleCheck(i)
                    }

                        className={`singleOption ${selected && handleSelect(i)}`}
                        key={i}
                        disabled={selected}



                    >{i}</button>))}

            </div>

        </div>
    )
}

export default QuestionOn
