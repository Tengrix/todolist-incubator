import React from 'react';
import './App.css';
import {AppTaskType} from "./App";
import EditableSpan from "./EditableSpan";

type TaskType = {
    id:string
    task:AppTaskType;
    changeTaskStatus:(id:string, todoListId: string, isDone: boolean) => void;
    removeTasks: (id: string, todoListId: string) => void;
    updateTitle:(id:string,newTitle:string, todoListsId:string) => void;
}

function Tasks(props:TaskType) {

    return (
        <div className="App">
            <input type="checkbox" checked={props.task.isDone}
                   onChange={(e)=>{props.changeTaskStatus(props.task.id,props.id,e.currentTarget.checked)}}/>
            <EditableSpan task={props.task}
                          updateTitle={props.updateTitle}
                          id={props.id}
            />
            <button onClick={()=>{props.removeTasks(props.task.id,props.id)}}>x</button>
        </div>
    );
}

export default Tasks;
