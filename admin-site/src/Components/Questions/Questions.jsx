import React, { useState } from 'react';
import './Questions.scss';
import Question from '../Question/Question';

const Questions = () => {

    const [findText, setFindText] = useState("");

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

    const getQuestionsElementsByText = () => {
        console.log(questionsElements)
        const questionsElementsByText = questionsElements
            .filter(question => question.props.message.toLowerCase().indexOf(findText.toLowerCase()) !== -1);
        
        if (questionsElementsByText.length === 0) {
            return (
                <div className="QuestionsHeadline">
                    Не найден ни один вопрос по заданым параметрам
                </div>
            )
        }
        return questionsElementsByText;
    }

    return (
        <div className="Questions">
            {
                <div>
                    {
                        questionsElements.length === 0 ?
                            <div className="QuestionsHeadline">Не осталось больше обращений</div> :
                            <div>
                                <div className="QustionFindTextSection">
                                    <input type="text" 
                                    className="QustionFindTextInput"
                                    value={findText}
                                    onChange={event => setFindText(event.target.value)}
                                    placeholder="Найти Вопрос"
                                />
                                </div>
                                <div>
                                    {
                                        findText === "" ? questionsElements : getQuestionsElementsByText()
                                    }
                                </div>
                            </div>
                    }
                </div>
                
            }
        </div>
    )
}

export default Questions;