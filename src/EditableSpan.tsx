import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {AppTaskType} from "./App";

type EditableSpanPropsType = {
    task: AppTaskType;
    updateTitle:(id:string,newTitle:string, todoListsId:string) => void;
    id: string;
}

function EditableSpan(props:EditableSpanPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(props.task.title)
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        props.updateTitle(props.task.id,newTitle,props.id)
    }
    const changeTitle = (e:ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return (
        <span className="App">
            {editMode? <input onChange={changeTitle} value={newTitle} autoFocus onBlur={offEditMode} type="text"/>:
                <span onDoubleClick={onEditMode}>{props.task.title}</span> }

        </span>
    );
}

export default EditableSpan;
