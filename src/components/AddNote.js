import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NotesService from "../services/NotesService";

/* use useNavigate() instead of useHistory() */

const AddNote = () => {
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[category,setCategory] = useState('programming');//initial value
    const history = useNavigate();
    
    const saveNote = (e) => {
        e.preventDefault();
        const note = {title,body,category};
        //console.log("printing note",note);
        NotesService.create(note)
                    .then(response=>{
                        console.log("Note added sucessfully",response.data);
                        //history('/');
                        history("/");
                    })
                    .catch(error => {
                        console.log('something went wrong',error);
                    })
    }
    
    return ( 
        <div className="create">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Note Title: <sup>*</sup></label>
                    <input 
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea 
                        name="body"
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>


                <div className="form-group">
                    <label htmlFor="category">Note category: </label>
                    <select
                        id="category"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <option value="programming">Programming</option>
                        <option value="vacation">Vacation</option>
                        <option value="meeting">Meeting</option>
                        <option value="writing">Writing</option>
                    </select> 
                </div>
                <div className="text-center">
                    <button onClick={(e) => saveNote(e)}>Add Note</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddNote;