import { Button } from '@mui/material'
import React from 'react'
import useSound from 'use-sound'
import lose from "../sound/lose.wav"
import win from "../sound/win.wav"



const Result = ({ score, name1 }) => {
    const [soundLose] = useSound(lose)
    const [soundWin] = useSound(win)

    return (
        <div>
            <div className="resultDisplay" style={{ textAlign: 'center', marginTop: '6rem' }}>
                <h1 style={{ textAlign: 'center' }}>"{name1}" Your final score is : {score} {score > 3 ? soundWin() : soundLose()}</h1>
                <Button variant='contained' size="large" style={{ textAlign: 'center', marginTop: '2rem' }} href="/">Replay</Button>

                <h1 style={{
                    marginBlock: ' 12rem',
                    fontFamily: ' cursive',
                    fontSize: '6rem'
                }}> {score > 3 ? `"Smarty"` : `"Poor Performance"`}</h1>
            </div>
        </div>
    )

}
export default Result
