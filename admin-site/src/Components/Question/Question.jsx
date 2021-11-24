import axios from 'axios';
import React, {useState} from 'react';
import './Question.scss';

const Question = (props) => {

    const {id, user, message, deleteQuestion} = props;

    const [answer, setAnswer] = useState("");

    const sendAnswer = (id, user, message, answer) => {
        if (answer === "") {
            return;
        }
        deleteQuestion(id);
        axios.post('/questions/sendnswer', {
            id,
            message,
            user,
            answer
        }).then(response => {
            deleteQuestion(id);
        }).catch(e => {
            deleteQuestion(id);
        })
    }

    return (
        <div className="Question">
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
                onClick={() => sendAnswer(id, user, message,answer)}
            >Отправить ответ</div>
        </div>
    )
}

export default Question;