import React, {ChangeEvent, useCallback} from 'react';
import './App.css';
import {AppTaskType} from "./AppWithRedux";
import EditableSpan from "./EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type TaskType = {
    id:string
    task:AppTaskType;
    changeTaskStatus:(id:string, todoListId: string, isDone: boolean) => void;
    removeTasks: (id: string, todoListId: string) => void;
    updateTitle:(id:string,newTitle:string, todoListsId:string) => void;
}

const Task = React.memo(function (props:TaskType) {
    console.log('asdasd')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.changeTaskStatus(props.task.id,props.id,e.currentTarget.checked)
    }
    const onRemoveTaskHandler = useCallback(() => {
        props.removeTasks(props.task.id,props.id)
    },[])
    return (
        <div className="App">
            <Checkbox
                checked={props.task.isDone}
                color={'primary'}
                onChange={onChangeHandler}
            />
            <EditableSpan task={props.task}
                          updateTitle={props.updateTitle}
                          id={props.id}
            />
            <IconButton onClick={onRemoveTaskHandler}><Delete/></IconButton>
        </div>
    );
})

export default Task;
