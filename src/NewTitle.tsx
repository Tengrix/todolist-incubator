import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {AppTaskType, filterType} from "./App";

type NewTitleType = {
    addTask:(newTitle:string, todoListId:string) => void;
    id:string;
}

function Tasks(props:NewTitleType) {
    const [newTitle, setNewTitle] = useState<string>('')
    const [error, setError] = useState<string>('')
    const changeTitle = () => {
        if(newTitle.trim()){
            props.addTask(newTitle.trim(),props.id)
        }
        else{
            setError('new task required!')
        }
        setNewTitle('')
    }
    const inputChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setNewTitle(e.currentTarget.value)
        setError('')
    }
    return (
        <div className="App">
            <input className={error?'inputError':''} type="text" value={newTitle}  onChange={inputChange}/>
            <button onClick={changeTitle}>+</button>
            {error? <div className={'error'}>{error}</div>:''}
        </div>
    );
}

export default Tasks;
