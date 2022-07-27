import './Login.css';

function Login() {
  return (
    <div id='Login-container'>
        <h1>Login</h1>
            <form method='post'>
                <div>
                    <label>Email</label><br></br>
                    <input type='text' id='email' name='email' placeholder='Enter Email' required></input>
                </div>
                <div>
                    <label>Password</label><br></br>
                    <input type='password' id='password' name='password' placeholder='Enter Password' required></input>
                </div>
                <p>Not registered yet? <a href="/register">Create an Account</a> </p>
                <div>
                    <button type='submit' id='loginBtn' name='loginBtn'>Login</button>
                </div>
            </form>            
    </div>

    
  );
}

export default Login;
