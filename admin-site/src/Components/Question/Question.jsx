import axios from 'axios';
import React, {useState} from 'react';
import './Question.scss';

const Question = (props) => {

    const {id, user, message, deleteQuestion} = props;

    const [answer, setAnswer] = useState("");

    const sendAnswer = (id, user, answer) => {
        deleteQuestion(id);
        // axios.post('/sendanswer', {
        //     id,
        //     user,
        //     answer
        // }).then(response => {
        //     deleteQuestion(id);
        // }).catch(e => {
        //     deleteQuestion(id);
        // })
    }

    return (
        <div className="Question" key={id}>
            <div className="QuestionMessage">{message}</div>
            <textarea 
                className="QuestionAnswer" 
                cols="30" 
                rows="10"
                value={answer}
                onChange={event => {
                    setAnswer(event.target.value);
                }}
            ></textarea>
            <div
                className="QuestionButton"
                onClick={() => sendAnswer(id, user, answer)}
            >Отправить ответ</div>
        </div>
    )
}

export default Question;