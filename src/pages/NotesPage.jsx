import NoteCard from '../components/NoteCard'
import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'
import Controls from '../components/Controls'


const Notespage = () => {
    const {notes} = useContext(NoteContext)
    return (
        <div>
            {notes.map((note) => (
                <NoteCard key = {note.$id} note={note} />
            ))}
            <Controls />
        </div>
    )
}

export default Notespage