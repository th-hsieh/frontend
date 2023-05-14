import {useEffect, useState} from "react";
import NotesService from "../services/NotesService";
import {Link} from "react-router-dom";

const NotesList = () => {

    const[notes, setNotes]= useState([]);

    /*useEffect Hook */

    /*this is an async call */
    useEffect(()=>{
        NotesService.getAll()
                    .then(response =>{
                        console.log('printing response',response.data);
                        setNotes(response.data);
                     })
                     .catch(error=>{
                        console.log('something went wrong',error);
                     })
    },[]);

    return (
        <div className="main-content">
            <h4>List of Notes</h4>
            <div className="notes-list mt-4">
                {
                    notes.length>0 ? notes.map(note => (
                        <div key={note.id} className="notes-preview mt-3">
                            <Link to={`/notes/${note.id}`} className="text-decoration-none">
                                <h5 className="primary-color text-capitalize">{note.title}</h5>
                                <h5>{note.body}</h5>
                            </Link>
                        </div>
                    )):<div>No notes available</div>
                }
            </div>
        </div>
    );
}
 
export default NotesList;