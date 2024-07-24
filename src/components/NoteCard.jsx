import { useEffect, useRef, useState } from "react";
import Trash from '../icons/Trash';

const NoteCard = ({ note }) => {
    const [position, setPosition] = useState(JSON.parse(note.position));
    const colors = JSON.parse(note.colors);
    const body = JSON.parse(note.body);

    let mouseStartPos = { x: 0, y: 0 };
    const cardRef = useRef(null);

    const textAreaRef = useRef(null)

    useEffect(() => {
            autoGrow(textAreaRef.current);
        }, [body]);

    const autoGrow= (textarea) => {
        const {current} = textAreaRef;

        current.style.height = "auto"; // Reset the height
        current.style.height = current.scrollHeight + "px"; // Set the new height
    }

    const mouseDown = (e)=> {
        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY

        document.addEventListener("mousemove", mouseMove)
        document.addEventListener("mouseup", mouseUp)

    }

    const mouseMove = (e) => {
        const mouseMoveDir = {
            x:mouseStartPos.x - e.clientX,
            x:mouseStartPos.y - e.clientY
        }
        console.log('mouseMoveDir', mouseMoveDir)
        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY

        setPosition({
            x:cardRef.current.offsetLeft - mouseMoveDir.x,
            x:cardRef.current.offset - mouseMoveDir.y,
        })
    }
    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    };
    return (
        <div
        ref={cardRef}
            className="card"
            style={{
                backgroundColor: colors.colorBody,
                left:'${position.x}px',
                top:'${position.y}px',
            }}
        >
            <div className="card-header" 
            onMouseDown={mouseDown}
            style={{ backgroundColor: colors.colorHeader }}>
                <Trash />
            </div>
            <div className="card-body">
            <textarea
            ref={textAreaRef}
            style={{color: colors.colortext}}
                defaultValue={body}
                onInput={()=> {autoGrow(textAreaRef)}}>

            </textarea>
            </div>
        </div>
    );
};

export default NoteCard;