import React, {useState} from 'react';
import './Questions.scss';
import Question from '../Question/Question';

const Questions = (props) => {
    const { questions } = props;

    const [questionsElements, setQuestionsElements] = useState(questions.map(question => {
        return (
            <Question id={question.id} user={question.user} message={question.message} deleteQuestion={id => deleteQuestion(id)}/>
        )
    }))

    const deleteQuestion = (id) => {

        const newQuestionsElements = questionsElements.filter(question => question.id !== id);

        setQuestionsElements(newQuestionsElements);
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