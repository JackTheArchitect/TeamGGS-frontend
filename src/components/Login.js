import { useState } from "react";
import axios from "axios";
import './Login.css';

function Login() {
	const [data, setData] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

    const handleChange = ({target: input}) => {
		setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "https://team-ggs-back.herokuapp.com/users/signin";
            const { data : res } = await axios.post(url, data);

            window.location = "/";
        }
        catch (err) {   
            setError(error.response.data.message);
        }
    }

    return (
        <div id='Login-container'>
            <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label><br></br>
                        <input 
                        type='text' 
                        name='email' 
                        placeholder='Enter Email'
                        onChange={handleChange}
                        value={data.email} required/>
                    </div>
                    <div>
                        <label>Password</label><br></br>
                        <input 
                        type='text' 
                        name='password' 
                        placeholder='Enter Password'
                        onChange={handleChange}
                        value={data.password} required/>
                    </div>
                    {error && <div className="error_msg">{error}</div>}
                    <p>Not registered yet? <a href="/register">Create an Account</a> </p>
                    <div>
                        <button type='submit' id='loginBtn' className='loginBtn'>Login</button>
                    </div>
                </form>            
        </div>

    
  );
}

export default Login;
