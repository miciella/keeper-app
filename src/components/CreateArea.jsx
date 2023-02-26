import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title : "",
        content : ""
    });


    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                //returns the string name for the key to the actual value of the name constant
            [name] : value
            }
        })
    }

    function submitNote(event){
        props.add(note);
        setNote({
            title : "",
            content : ""
        })
        event.preventDefault();
    }


    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
