import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Questions from '../Questions/Questions';
import RequiredKey from '../RequiredKey/RequiredKey';

const App = () => {

  useEffect(() => {
    getStatus();
  }, [])

  const [isLoggin, setIsLoggin] = useState(null);

  const changeIsLoggin = (status) => {
    setIsLoggin(status);
    if (isLoggin) {
      getQuesions();
    }
  }

  const getQuesions = async () => {
    axios.get('/questions/getuserquestions').then(response => {
      localStorage.setItem('questions' , JSON.stringify(response.data));
    }).catch(e => {
      
    })
  }

  const getStatus  = () => {
    axios.get('auth/getuserstatus').then(response => {
      setIsLoggin(true);
      getQuesions();
    }).catch(e => {
      setIsLoggin(false);
    })
  }

  return (
    <div className="App">
      {
        isLoggin === null ?
          null :
          isLoggin ?
            <Questions /> :
            <RequiredKey changeIsLoggin={(status) => changeIsLoggin(status)} />
      }
    </div>
  );
}



export default App;
