//sfc==> stateless functional components
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NotesService from "../services/NotesService";

const NoteDetails= () => {
    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');
    const history=useNavigate();

    useEffect(() => {
        NotesService.get(id)
                    .then(note => {
                        setCurrentNote(note.data);
                    })
                    .catch(error =>{
                        console.log('Something went wrong', error);
                    })
    }, []);

    const handleDelete = () =>{
        NotesService.remove(id)
                    .then(response =>{
                        history("/");
                    })
                    .catch(error =>{
                        console.log("Something went wrong",error);
                    })
    }   

    const handleEdit= () => {
        //use the history and id that we defined previously
       history(`/notes/edit/${id}`);
    }
        


    return ( 
        <div className="note-details main-content">
            <article>
                <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                <div className="mb-3 font-italic metadata">
                    <span>{currentNote.updatedAt}</span>
                    <span className="text-capitalize">, {currentNote.category}</span>
                </div>
                <div className="mb-3">{currentNote.body}</div>
            </article>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete} className="ms-3">Delete</button>
        </div>
    );
}
 
export default NoteDetails;