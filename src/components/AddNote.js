import { useState,useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import NotesService from "../services/NotesService";

/* use useNavigate() instead of useHistory() */

const AddNote = () => {
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[category,setCategory] = useState('programming');//initial value
    const[errors,setErrors] = useState(false);
    const history = useNavigate();
    const {id} = useParams();

    const saveNote = (e) => {
        e.preventDefault();

        if(!title || !body){
            setErrors(true);
            return ;
        }

        const note = {title,body,category, id};
        //console.log("printing note",note);

        if(id){
            //if ID exists, then we call the service update method
            NotesService.update(note)
                        .then(response => {
                            console.log("Note updated sucessfully",response.data);
                            history("/");
                        })
                        .catch(error =>{
                            console.log("Something went wrong", error);
                        })
        }else{
            //call thhe service create method
            NotesService.create(note)
                        .then(response=>{
                            console.log("Note added sucessfully",response.data);
                            history("/");
                         })
                         .catch(error => {
                            console.log('something went wrong',error);
                         })
        }
        
    }

    useEffect(()=>{
        if (id){
            NotesService.get(id)
                        .then(note => {
                            setTitle(note.data.title);
                            setBody(note.data.body);
                            setCategory(note.data.category);
                        })
                        .catch(error=>{
                            console.log("Something went wrong", error)
                        })
        }
    }, [])
    
    return ( 
        <div className="create">
            <div className="text-center">
                <h5>{id ? "Update a Note": "Add a New Note"}</h5>
                 {errors &&  <span style={{color:'red',fontStyle:'italic'}} > Please enter the mandatory fields </span> }
            </div>

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
                    <button onClick={(e) => saveNote(e)} > {id ? "Update A Note": "Add Note"} </button>
                </div>
            </form>
        </div>
     );
}
 
export default AddNote;