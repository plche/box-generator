import styles from './BoxColorForm.module.css';
import {useRef, useState} from "react";

const BoxColorForm = props => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(0)
    const inputEl = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        props.addBox(color, size);
        setColor("");
        setSize(0);
        inputEl.current.focus();
    }

    return(
        <div className={styles.BoxColorForm}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color </label>
                <input type="text" onChange={e => setColor(e.target.value)} value={color} ref={inputEl}/>
                <label htmlFor="size"> Size </label>
                <input type="number" onChange={e => setSize(Number(e.target.value))} value={size} />
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

export default BoxColorForm;