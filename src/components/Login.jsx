import axios from 'axios';
import React, {useState} from 'react';

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
            <h2>Login</h2>
            <div className='form-field'>
                <input type="text" className="input" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className='form-field'>
                <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button onClick={handleLogin} className="login-btn" >Login</button>
        </div>
    )
}

export default Login