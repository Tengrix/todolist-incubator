import React from 'react';
import './App.css';
import Tasks from './Tasks';
import NewTitle from "./NewTitle";
import {AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from '@material-ui/icons'
import Container from '@material-ui/core/Container'
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "./state/task-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

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
    let dispatch = useDispatch()
    function changeFilterTasks(todoLists: TodoListsType) {
        switch (todoLists.filter) {
            case 'active':
                return tasks[todoLists.id].filter(el => !el.isDone)
            case 'completed':
                return tasks[todoLists.id].filter(el => el.isDone)
            default:
                return tasks[todoLists.id]
        }
    }

    function removeTasks(id: string, todoListId: string) {
        let action = removeTaskAC(id, todoListId)
        dispatch(action)
    }
    function changeTaskStatus(id: string, todoListId: string, isDone: boolean) {
        dispatch(changeTaskStatusAC(id, todoListId, isDone))
    }
    function addTask(newTitle: string, todoListId: string) {
        dispatch(addTaskAC(newTitle, todoListId))
    }
    function updateTitle(id: string, newTitle: string, todoListsId: string) {
        dispatch(changeTaskTitleAC(id, newTitle, todoListsId))
    }

    function changeFilter(value: filterType, todoListId: string) {
        dispatch(changeTodoListFilterAC(value, todoListId))
    }
    function removeTodoLists(todoListId: string) {
        let action = removeTodoListAC(todoListId)
        dispatch(action)

    }
    function addTodoList(newTitle: string) {
        dispatch(addTodoListAC(newTitle))
    }
    function updateTodoListTitle(newTitle: string, todoListId: string) {
        dispatch(changeTodoListTitleAC(newTitle, todoListId))
    }

    const todoListComponents = todoLists.map(el => {
        return <Grid item={true}>
            <Paper elevation={6} style={{padding: '10px'}}>
                <Tasks key={el.id}
                       id={el.id}
                       task={changeFilterTasks(el)}
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
