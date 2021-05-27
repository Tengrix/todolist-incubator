import React, {useCallback} from 'react';
import './App.css';
import {Tasks} from './Tasks';
import {NewTitle} from "./NewTitle";
import {AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from '@material-ui/icons'
import Container from '@material-ui/core/Container'
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/task-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {Dispatch} from "redux";

export type TodoListsType = {
    id: string;
    title: string;
    filter: filterType
}
export type AppTaskType = {
    id: string;
    title: string;
    isDone: boolean;
}
export type KeyTasksType = {
    [key: string]: AppTaskType[]
}
export type filterType = 'all' | 'active' | 'completed'

function AppWithRedux() {

    let todoLists = useSelector<AppRootStateType, TodoListsType[]>(state => state.todolists)
    let tasks = useSelector<AppRootStateType, KeyTasksType>(state => state.tasks)
    let dispatch = useDispatch<Dispatch>()

    const removeTasks = useCallback((id: string, todoListId: string) => {
        let action = removeTaskAC(id, todoListId)
        dispatch(action)
    },[dispatch])
    const changeTaskStatus = useCallback((id: string, todoListId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(id, todoListId, isDone))
    },[dispatch])
    const addTask = useCallback((newTitle: string, todoListId: string) => {
        dispatch(addTaskAC(newTitle, todoListId))
    },[dispatch])
    const updateTitle = useCallback((id: string, newTitle: string, todoListsId: string) => {
        dispatch(changeTaskTitleAC(id, newTitle, todoListsId))
    }, [dispatch])

    const changeFilter = useCallback((value: filterType, todoListId: string) => {
        dispatch(changeTodoListFilterAC(value, todoListId))
    },[dispatch])
    const removeTodoLists = useCallback((todoListId: string) => {
        let action = removeTodoListAC(todoListId)
        dispatch(action)

    },[dispatch])
    const addTodoList = useCallback((newTitle: string) => {
        dispatch(addTodoListAC(newTitle))
    },[dispatch])
    const updateTodoListTitle = useCallback((newTitle: string, todoListId: string) => {
        dispatch(changeTodoListTitleAC(newTitle, todoListId))
    },[dispatch])

    const todoListComponents = todoLists.map(el => {
        return <Grid item={true}>
            <Paper elevation={6} style={{padding: '10px'}}>
                <Tasks key={el.id}
                       id={el.id}
                       task={tasks[el.id]}
                       changeFilter={changeFilter}
                       removeTasks={removeTasks}
                       addTask={addTask}
                       filter={el.filter}
                       title={el.title}
                       changeTaskStatus={changeTaskStatus}
                       removeTodoLists={removeTodoLists}
                       addTodoLists={addTodoList}
                       updateTitle={updateTitle}
                       updateTodoListTitle={updateTodoListTitle}
                />
            </Paper>
        </Grid>
    })

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TodoLists
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid container={true} style={{padding: '20px 0px '}}>
                    <NewTitle addTask={addTodoList}/>
                </Grid>
                <Grid spacing={3} container={true}>
                    {todoListComponents}
                </Grid>
            </Container>
        </div>
    )
}

export default AppWithRedux;
