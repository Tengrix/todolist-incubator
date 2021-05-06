import React from 'react';
import './App.css';
import {AppTaskType, filterType, TodoListsType} from "./AppWithRedux";
import NewTitle from './NewTitle';
import Task from './Task';
import NewTitleForTodoList from "./NewTitleForTodoList";
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

type TasksType = {
    id: string;
    title: string;
    task: AppTaskType[];
    changeFilter: (value: filterType, todoListId: string) => void;
    removeTasks: (id: string, todoListId: string) => void;
    addTask: (newTitle: string, todoListId: string) => void;
    filter: filterType;
    changeTaskStatus: (id: string, todoListId: string, isDone: boolean) => void;
    removeTodoLists: (todoListId: string) => void;
    addTodoLists: (title: string) => void;
    updateTitle: (id: string, newTitle: string, todoListsId: string) => void;
    updateTodoListTitle: (newTitle: string, todoListId: string) => void;
}

function Tasks(props: TasksType) {
    let todolist = useSelector<AppRootStateType, TodoListsType>(state => state.todolists.filter
    (el => el.id === props.id)[0])
    let task = useSelector<AppRootStateType, AppTaskType[]>(state => state.tasks[props.id])


    const filterAllBtnHandler = props.filter === 'all' ? 'activeBtn' : ''
    const filterActiveBtnHandler = props.filter === 'active' ? 'activeBtn' : ''
    const filterCompletedBtnHandler = props.filter === 'completed' ? 'activeBtn' : ''
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    return (
        <div className="App">
            <NewTitleForTodoList title={props.title}
                                 updateTodoListTitle={props.updateTodoListTitle}
                                 id={props.id}
             removeTodoLists={props.removeTodoLists}/>
            <NewTitle addTask={addTask}/>
            {props.task.map(el => <Task
                    key={el.id}
                    task={el}
                    changeTaskStatus={props.changeTaskStatus}
                    id={props.id}
                    removeTasks={props.removeTasks}
                    updateTitle={props.updateTitle}
                />
            )}
            <Button color={'primary'}
                    size={'small'}
                    variant={props.filter === 'all' ? 'outlined' : 'contained'}
                    className={filterAllBtnHandler}
                    onClick={() => {
                        props.changeFilter('all', props.id)
                    }}>all
            </Button>
            <Button color={'primary'}
                    size={'small'}
                    variant={props.filter === 'active' ? 'outlined' : 'contained'}
                    className={filterActiveBtnHandler} onClick={() => {
                props.changeFilter('active', props.id)
            }}>active
            </Button>
            <Button color={'primary'}
                    size={'small'}
                    variant={props.filter === 'completed' ? 'outlined' : 'contained'}
                    className={filterCompletedBtnHandler} onClick={() => {
                props.changeFilter('completed', props.id)
            }}>completed
            </Button>
        </div>
    );
}

export default Tasks;
