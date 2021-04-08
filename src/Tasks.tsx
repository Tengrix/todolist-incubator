import React from 'react';
import './App.css';
import {AppTaskType, filterType} from "./App";
import NewTitle from './NewTitle';
import Task from './Task';

type TasksType = {
    id: string;
    title: string;
    task: AppTaskType[];
    changeFilter: (value: filterType, todoListId: string) => void;
    removeTasks: (id: string, todoListId: string) => void;
    addTask: (newTitle: string, todoListId: string) => void;
    filter: filterType;
    changeTaskStatus: (id: string, todoListId: string, isDone: boolean) => void;
    removeTodoLists:(todoListId:string) => void;
}

function Tasks(props: TasksType) {

    const filterAllBtnHandler = props.filter === 'all' ? 'activeBtn' : ''
    const filterActiveBtnHandler = props.filter === 'active' ? 'activeBtn' : ''
    const filterCompletedBtnHandler = props.filter === 'completed' ? 'activeBtn' : ''

    return (
        <div className="App">
            {props.title} <button onClick={()=>{props.removeTodoLists(props.id)}}>x</button>
            <NewTitle addTask={props.addTask} id={props.id}/>
            {props.task.map(el => <Task
                key={el.id}
                task={el}
                changeTaskStatus={props.changeTaskStatus}
                id={props.id}
                removeTasks={props.removeTasks}/>
            )}
            <button className={filterAllBtnHandler} onClick={() => {
                props.changeFilter('all', props.id)
            }}>all
            </button>
            <button className={filterActiveBtnHandler} onClick={() => {
                props.changeFilter('active', props.id)
            }}>active
            </button>
            <button className={filterCompletedBtnHandler} onClick={() => {
                props.changeFilter('completed', props.id)
            }}>completed
            </button>
        </div>
    );
}

export default Tasks;
