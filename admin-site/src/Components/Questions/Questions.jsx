import React, { useState } from 'react';
import './Questions.scss';
import Question from '../Question/Question';

const Questions = () => {

    const [questionsElements, setQuestionsElements] = 
    useState(localStorage.getItem('questions') ? JSON.parse(localStorage.getItem('questions')).map(question => {
        return (
            <Question id={question.id} user={question.user} message={question.message} deleteQuestion={id => deleteQuestion(id)} key={question.id}/>
        )
    }) : [])

    const deleteQuestion = (id) => {

        const quesions = JSON.parse(localStorage.getItem('questions'));

        const newQuestions = quesions.map(question => {
            return {
                id: question.id,
                user: question.user,
                message: question.message
            }
        }).filter(quesion => quesion.id !== id);

        localStorage.setItem('questions', JSON.stringify(newQuestions))

        setQuestionsElements(localStorage.getItem('questions') ?JSON.parse( localStorage.getItem('questions')).map(question => {
            return (
                <Question id={question.id} user={question.user} message={question.message} deleteQuestion={id => deleteQuestion(id)} key={question.id}/>
            )
        }) : [])
    }

    return (
        <div className="Questions">
            {
                questionsElements
            }
        </div>
    )
}

export default Questions;