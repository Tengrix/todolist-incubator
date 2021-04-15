import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {IconButton, TextField} from "@material-ui/core";
import { AddBox } from '@material-ui/icons';

type NewTitleType = {
    addTask:(newTitle:string) => void;
}

function Tasks(props:NewTitleType) {
    const [newTitle, setNewTitle] = useState<string>('')
    const [error, setError] = useState<string|null>('')
    const changeTitle = () => {
        if(newTitle.trim()){
            props.addTask(newTitle.trim())
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
            <TextField
                variant={'outlined'}
                className={error?'inputError':''}
                type="text" value={newTitle}
                onChange={inputChange}
                label={'Title'}
                error={!!error}
                helperText={error}
            />
            <IconButton color={'primary'} onClick={changeTitle}><AddBox/></IconButton>

        </div>
    );
}

export default Tasks;
