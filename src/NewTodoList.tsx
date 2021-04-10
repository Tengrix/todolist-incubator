import React, {ChangeEvent, useState} from 'react';
import './App.css';

type NewTitleType = {
    addTask:(newTitle:string) => void;
}

function Tasks(props:NewTitleType) {
    const [newTitle, setNewTitle] = useState<string>('')
    const [error, setError] = useState<string>('')
    const changeTitle = () => {
        if(newTitle.trim()){
            props.addTask(newTitle.trim())
        }
        else{
            setError('new todoList required!')
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
