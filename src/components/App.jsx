import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

    const [notes, setNotes] = useState([]);

    function addNewNote(newNote){
        setNotes((prevNote) => {
            return [...prevNote, newNote];
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea add={addNewNote}/>
            {notes.map((noteItem, index) =>
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    delete={deleteNote}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;
