import axios from 'axios';
import React, {useState} from 'react';
import { LoginOutlined } from '@ant-design/icons';

const projectID = '24339a4b-4e16-4fe3-863b-e034b6f937b7';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {

        const authObject = { 'Project-ID' : projectID, 'User-Name' : username, 'User-Secret' : password };

        try {
            await axios.get("https://api.chatengine.io/chats", { headers : authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch(error) {
            setError('Ooops inccorect credentials!');
        }   
    }   

    return (
        <div className="login">
            <div className="login-body">
                <h1 className="login-heading">Chat Application</h1>
                <div className="form-field">
                    <label>Username</label>
                    <input type="text" className="input" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="form-field">
                    <label>Password</label>
                    <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-field">
                    <button onClick={handleLogin} className="login-btn" >Login <LoginOutlined /></button>
                </div>
            </div>
        </div>
    )
}

export default Login