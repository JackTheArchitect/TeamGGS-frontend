import './Login.css';

function Login() {
  return (
    <div id='Login-container'>
        <h1>Register Here</h1>
            <form method='post'>
                <div>
                    <label for='firName'>First Name</label><br></br>
                    <input type='text' id='firName' name='firName' placeholder='First Name' required></input>
                </div>
                <div>
                    <label for='lastName'>Last Name</label><br></br>
                    <input type='text' id='lastName' name='lastName' placeholder='Last Name' required></input>
                </div>
                <div>
                    <label for='email'>Email</label><br></br>
                    <input type='text' id='email' name='email' placeholder='Enter Email' required></input>
                </div>
                <div>
                    <label for='password'>Password</label><br></br>
                    <input type='password' id='password' name='password' placeholder='Enter Password' required></input>
                </div>

                <div>
                    <button type='submit' id='loginBtn' name='loginBtn'>Submit</button>
                </div>
            </form>            
    </div>

    
  );
}

export default Login;
