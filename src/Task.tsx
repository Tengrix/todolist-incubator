import React from 'react';
import './App.css';
import {AppTaskType} from "./App";
import EditableSpan from "./EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
            <Checkbox
                checked={props.task.isDone}
                color={'primary'}
                onChange={(e)=>{props.changeTaskStatus(props.task.id,props.id,e.currentTarget.checked)}}
            />
            <EditableSpan task={props.task}
                          updateTitle={props.updateTitle}
                          id={props.id}
            />
            <IconButton onClick={()=>{props.removeTasks(props.task.id,props.id)}}><Delete/></IconButton>
        </div>
    );
}

export default Tasks;
