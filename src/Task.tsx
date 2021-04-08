import React from 'react';
import './App.css';
import {AppTaskType, filterType} from "./App";

type TaskType = {
    id:string
    task:AppTaskType;
    changeTaskStatus:(id:string, todoListId: string, isDone: boolean) => void;
    removeTasks: (id: string, todoListId: string) => void;
}

function Tasks(props:TaskType) {

    return (
        <div className="App">
            <input type="checkbox" checked={props.task.isDone}
                   onChange={(e)=>{props.changeTaskStatus(props.task.id,props.id,e.currentTarget.checked)}}/>
            {props.task.title}
            <button onClick={()=>{props.removeTasks(props.task.id,props.id)}}>x</button>
        </div>
    );
}

export default Tasks;
