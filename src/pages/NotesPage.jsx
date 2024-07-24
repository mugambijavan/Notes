import {useState, useEffect} from 'react'
// import { fakeData as notes } from '../assets/fakeData'
import { databases } from '../appwrite/config'
import NoteCard from '../components/NoteCard'
import { db } from "../appwrite/databases"

const Notespage = () => {
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const response = await db.notes.list();
        setNotes(response.documents);
    }
    return (
        <div>
            {notes.map((note) => (
                <NoteCard key = {note.$id} note={note} setNotes = {setNotes}/>
            ))}
        </div>
    )
}

export default Notespage