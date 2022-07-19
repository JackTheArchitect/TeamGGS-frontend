import './Login.css';

function Login() {
  return (
    <div id='Login-container'>
        <h1>Login</h1>
            <form method='post'>
                <div>
                    <label for='email'>Email</label><br></br>
                    <input type='text' id='email' name='email' placeholder='Enter Email' required></input>
                </div>
                <div>
                    <label for='password'>Password</label><br></br>
                    <input type='password' id='password' name='password' placeholder='Enter Password' required></input>
                </div>
                <div>
                    <button type='submit' id='loginBtn' name='loginBtn'>Login</button>
                </div>
            </form>            
    </div>

    
  );
}

export default Login;
