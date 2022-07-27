import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const [data, setData] = useState({
        email: '', 
        password: '',
        firstName: '',
        lastName: ''
    });

    const navigate = useNavigate();

    const handleChange = ({ target: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "https://team-ggs-back.herokuapp.com/users/signup";
			const { data: res } = await axios.post(url, data);

            navigate("/login");

        }
        catch (error) {
			setError(error.response.data.message);
        }

    }
    

    return (
        <div id='Login-container'>
            <h1>Register Here</h1>
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
                    <div>
                        <label>First Name</label><br></br>
                        <input 
                        type='text' 
                        name='firstName' 
                        placeholder='Enter First Name'
                        onChange={handleChange}
                        value={data.firstName} required/>
                    </div>
                    <div>
                        <label>Last Name</label><br></br>
                        <input 
                        type='text' 
                        name='lastName' 
                        placeholder='Enter Last Name'
                        onChange={handleChange}
                        value={data.lastName} />
                    </div>

                    <div>
                        <button type='submit' id='loginBtn' name='loginBtn'>Submit</button>
                    </div>
                </form>            
        </div>      
  );
}

export default Login;
