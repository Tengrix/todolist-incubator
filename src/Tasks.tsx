import React, {useCallback} from 'react';
import './App.css';
import {AppTaskType, filterType, TodoListsType} from "./AppWithRedux";
import {NewTitle} from './NewTitle';
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

export const Tasks = React.memo(function (props: TasksType) {

    const filterAllBtnHandler = props.filter === 'all' ? 'activeBtn' : ''
    const filterActiveBtnHandler = props.filter === 'active' ? 'activeBtn' : ''
    const filterCompletedBtnHandler = props.filter === 'completed' ? 'activeBtn' : ''
    const addTask = useCallback( (title: string) => {
        props.addTask(title, props.id)
    },[props])
    let taskFilter = props.task
    if(props.filter === 'active'){
        taskFilter = props.task.filter(el=> !el.isDone)
    }
    if(props.filter === 'completed'){
        taskFilter = props.task.filter(el => el.isDone)
    }
    const onAllClickHandler = useCallback(()=>props.changeFilter('all',props.id),[props.changeFilter,props.id])
    const onActiveClickHandler = useCallback(()=>props.changeFilter('active',props.id),[props.changeFilter,props.id])
    const onCompletedClickHandler = useCallback(()=>props.changeFilter('completed',props.id),[props.changeFilter,props.id])

    return (
        <div className="App">
            <NewTitleForTodoList key={props.id}
                                 title={props.title}
                                 updateTodoListTitle={props.updateTodoListTitle}
                                 id={props.id}
                                 removeTodoLists={props.removeTodoLists}
            />
            <NewTitle addTask={addTask}/>
            {taskFilter.map(el => <Task
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
                    onClick={onAllClickHandler}>all
            </Button>
            <Button color={'primary'}
                    size={'small'}
                    variant={props.filter === 'active' ? 'outlined' : 'contained'}
                    className={filterActiveBtnHandler} onClick={onActiveClickHandler}>active
            </Button>
            <Button color={'primary'}
                    size={'small'}
                    variant={props.filter === 'completed' ? 'outlined' : 'contained'}
                    className={filterCompletedBtnHandler} onClick={onCompletedClickHandler}>completed
            </Button>
        </div>
    );
  }
)