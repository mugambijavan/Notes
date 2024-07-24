import NoteCard from '../components/NoteCard'
import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'

const Notespage = () => {
    const {notes} = useContext(NoteContext)
    return (
        <div>
            {notes.map((note) => (
                <NoteCard key = {note.$id} note={note} />
            ))}
        </div>
    )
}

export default Notespage