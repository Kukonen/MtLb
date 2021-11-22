import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Questions from '../Questions/Questions';
import RequiredKey from '../RequiredKey/RequiredKey';

const App = () => {

  const [questions, setQuestions] = useState([]);

  const [isLoggin, setIsLoggin] = useState(localStorage.getItem('isLogin') === 'yes' || false);

  useEffect(() => {
    if (isLoggin) {
      setIsLoggin(getQuesions());
    }
  }, [isLoggin]);

  const changeIsLoggin = (status) => {
    setIsLoggin(status);
  }

  const getQuesions = async () => {
    axios.get('/getuserquestion').then(response => {
      return setQuestions(response.data.quesions);
    }).catch(e => {
      return setQuestions([]);
    })
  }

  return (
    <div className="App">
      {
        isLoggin ?
          <Questions quesions={questions}/> :
          <RequiredKey changeIsLoggin={(status) => changeIsLoggin(status)} />
      }
    </div>
  );
}



export default App;
