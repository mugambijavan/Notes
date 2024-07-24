import Notespage from "./pages/NotesPage"
import NoteProvider from "./context/NoteContext"

function App() {
  return (
      <div id='app'>
        <NoteProvider>
          <Notespage />
        </NoteProvider>
        
      </div>
        
  )
}

export default App
