import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type NewTitleType = {
    id: string
    title: string;
    updateTodoListTitle: (newTitle: string, todoListId: string) => void;
    removeTodoLists: (todoListId: string) => void;
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
            <Button size={'small'} onClick={() => setEdit(!edit)}>edit</Button>
            <Button size={'small'} onClick={updateTodoListTitle}>save</Button>
            <IconButton onClick={() => {
                props.removeTodoLists(props.id)
            }}> <Delete/>
            </IconButton>
        </div>
    );
}

export default Tasks;
