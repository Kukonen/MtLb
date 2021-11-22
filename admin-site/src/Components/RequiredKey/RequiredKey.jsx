import React, {useState} from 'react';
import axios from 'axios';
import './RequiredKey.scss';

const RequiredKey = (props) => {

    const {changeIsLoggin} = props;

    const [adminPassword, setAdminPassword] = useState('');
    const [error, setError] = useState(false);

    const sendKey = (key) => {
        axios.post('/auth', {
            key
        }).then(response => {
            localStorage.setItem('isLogin', 'yes');
            changeIsLoggin(true);
        }).catch(e => {
            setError(true);
        })
    }

    return (
        <div className="RequiredKey">
            <div className="RequiredKeySection">
                <h1 className="RequiredKeySectionHeadline">Введите пароль админа</h1>
                <input type="password" 
                    className="RequiredKeySectionInput"
                    value={adminPassword}
                    size={32}
                    onChange={event => {
                        setError(false);
                        setAdminPassword(event.target.value)
                    }}
                />
                <div className="RequiredKeyButton"
                    onClick={() => sendKey(adminPassword)}
                >
                    Войти
                </div>
                <div className={ error ? "RequiredKeyErrorActive" : "RequiredKeyErrorNoActive"}>
                    Пароль не верный
                </div>
            </div>
        </div>
    )
}

export default RequiredKey;