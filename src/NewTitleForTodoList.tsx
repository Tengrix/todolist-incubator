import React, {ChangeEvent, useState} from 'react';
import './App.css';

type NewTitleType = {
    id: string
    title: string;
    updateTodoListTitle: (newTitle: string, todoListId: string) => void;
}

function Tasks(props: NewTitleType) {
    const [newTitle, setNewTitle] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const updateTodoListTitle = () => {
        props.updateTodoListTitle(newTitle, props.id)
        setNewTitle('')
        setEdit(!edit)
    }
    return (
        <div className="App">
            <span>{props.title}</span>
            {edit &&
            <input type="text" value={newTitle} onChange={changeTitle}/>}
            <button onClick={() => setEdit(!edit)}>edit</button>
            <button onClick={updateTodoListTitle}>save</button>
        </div>
    );
}

export default Tasks;
