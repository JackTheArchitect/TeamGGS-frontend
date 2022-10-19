import { useState } from "react";
import axios from "axios";
import './CreatePost.css';

function CreatePost() {
	const [data, setData] = useState({ title: '', content: '' });
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
        <div id='CreatePost-container'>
            
                <form onSubmit={handleSubmit}>
                    <div className="horizontal-div">
                        <div>
                            <h1>Create a post!</h1>                                            
                        </div>

                        <div>
                            <button type='submit' id='createBtn' className='createBtn'>Create</button>
                        </div>                                             
                    </div>
                    
                    <hr></hr>
                    
                    <div className="horizontal-div">
                        <select name="cars" id="bulletin-type-select">
                            <option value="volvo">Notice</option>
                            <option value="saab">General Bulletin</option>                            
                        </select>
                    </div>

                    <br></br>

                    <div>
                        <input 
                            id="title-input"
                            type='text' 
                            name='title' 
                            placeholder='Please Enter the title'
                            onChange={handleChange}
                            value={data.title} required/>
                    </div>

                    <div>
                        <input          
                        id="content-input"               
                        type='text' 
                        name='password'                         
                        placeholder='Please write the content'
                        onChange={handleChange}
                        value={data.content} required/>
                    </div>
                    
                    {error && <div className="error_msg">{error}</div>}                    
                    
                </form>            
        </div>

    
  );
}

export default CreatePost;