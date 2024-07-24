import {useState, useEffect} from 'react'
// import { fakeData as notes } from '../assets/fakeData'
import { databases } from '../appwrite/config'
import NoteCard from '../components/NoteCard'

const Notespage = () => {
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_NOTES_ID
        )
        setNotes(response.documents)
        console.log(response)
    }
    return (
        <div>
            {notes.map((note) => (
                <NoteCard key = {note.$id} note={note}/>
            ))}
        </div>
    )
}

export default Notespage