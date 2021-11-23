import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Questions from '../Questions/Questions';
import RequiredKey from '../RequiredKey/RequiredKey';

const App = () => {

  const [questions, setQuestions] = useState([
    {
      id: 333,
      user: 222,
      message: "lorem text"
    },
    {
      id: 222,
      user: 333,
      message: "question ftgyhjnk vygbhjnkml vghbjnk vygbhjn vyghbjnk vygbhujn vygbhjn ygbuhnj ygbhnj"
    }
  ]);

  const [isLoggin, setIsLoggin] = useState(localStorage.getItem('isLogin') === 'yes' || false);

  useEffect(() => {
    if (isLoggin) {
      getQuesions();
    }
  }, []);

  const changeIsLoggin = (status) => {
    setIsLoggin(status);
    if (isLoggin === "yes") {
      getQuesions();
    }
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
          <Questions questions={questions}/> :
          <RequiredKey changeIsLoggin={(status) => changeIsLoggin(status)} />
      }
    </div>
  );
}



export default App;
