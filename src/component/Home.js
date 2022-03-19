import { Button, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from './Data/categories'
import './Home.css'

const Home = ({ name1, setName1, fetchQuestions }) => {
    const Navigation = useNavigate()
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")

    const onClick = () => {
        if (category === "" || difficulty === "" || name1 === "") {
            return alert("Not fill Details properly");

        }
        else {
            fetchQuestions(category, difficulty)
            Navigation('/quiz')
        }
    }
    return (
        <div className='content'>
            <div className="settings">
                <h3 style={{ fontSize: '4rem ' }}>Details</h3>
                <div className="settingSelect">
                    <TextField label="Enter Name" color='warning' variant='outlined' style={{ marginBottom: "3.2rem", color: 'white' }} onChange={(e) => setName1(e.target.value)} value={name1} />

                    <TextField
                        select
                        color='warning'
                        label="Select Category"
                        variant='outlined'
                        style={{ marginBottom: "3.2rem", color: 'white' }} onChange={(e) => setCategory(e.target.value)} value={category}>
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        select
                        color='warning'
                        label="Select Level"
                        variant='outlined'
                        style={{ marginBottom: "3.2rem", color: 'white' }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>

                    <Button variant='contained' size='small' onClick={onClick} >
                        Start Quiz
                    </Button>


                </div>
            </div>
            {/* <div className="img"> */}

            <img src="/quiz.svg" className='banner' alt="img" />
            {/* </div> */}
        </div>
    );
};

export default Home
