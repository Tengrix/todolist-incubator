import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import Tasks from './Tasks';
import NewTitle from "./NewTitle";
import {AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from '@material-ui/icons'
import Container from '@material-ui/core/Container'

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

function App() {

    const todoListId_1 = v1();
    const todoListId_2 = v1();

    const [todoLists, setTodoLists] = useState<TodoListsType[]>([
            {id: todoListId_1, title: 'What to Learn', filter: 'all'},
            {id: todoListId_2, title: 'What to Study', filter: 'active'},
        ]
    )

    const [task, setTask] = useState<KeyTasksType>({
            [todoListId_1]: [
                {id: v1(), title: 'Redux', isDone: false},
                {id: v1(), title: 'Mobx', isDone: false},
                {id: v1(), title: 'React', isDone: true},
            ],
            [todoListId_2]: [
                {id: v1(), title: 'Html', isDone: true},
                {id: v1(), title: 'Css', isDone: true},
                {id: v1(), title: 'JS', isDone: false},
            ],
        }
    )

    function changeFilterTasks(todoLists: TodoListsType) {
        switch (todoLists.filter) {
            case 'active':
                return task[todoLists.id].filter(el => !el.isDone)
            case 'completed':
                return task[todoLists.id].filter(el => el.isDone)
            default:
                return task[todoLists.id]
        }
    }

    function changeFilter(value: filterType, todoListId: string) {
        setTodoLists(todoLists.map(el => el.id === todoListId ? {...el, filter: value} : el))
    }

    function removeTasks(id: string, todoListId: string) {
        const newTasks = task[todoListId].filter(el => el.id !== id)
        setTask({...task, [todoListId]: newTasks})
    }

    function changeTaskStatus(id: string, todoListId: string, isDone: boolean) {
        const newTasks = task[todoListId].map(el => el.id === id ? {...el, isDone: isDone} : el)
        setTask({...task, [todoListId]: newTasks})
    }

    function addTask(newTitle: string, todoListId: string) {
        const newTask = {
            id: v1(),
            title: newTitle,
            isDone: false
        }
        const newTasks = [newTask, ...task[todoListId]]
        setTask({...task, [todoListId]: newTasks})
    }

    function removeTodoLists(todoListId: string) {
        const updatedTodoLists = todoLists.filter(el => el.id !== todoListId)
        setTodoLists(updatedTodoLists)
        delete task[todoListId]
    }

    function addTodoList(newTitle: string) {
        let todoListId = v1()
        const newTodoList: TodoListsType = {
            id: todoListId,
            title: newTitle,
            filter: 'all'
        }
        setTodoLists([...todoLists, newTodoList])
        setTask({...task, [todoListId]: []})
    }

    function updateTitle(id: string, newTitle: string, todoListsId: string) {
        const changedTitle = task[todoListsId].map(el => el.id === id ? {...el, title: newTitle} : el)
        setTask({...task, [todoListsId]: changedTitle})
    }

    function updateTodoListTitle(newTitle: string, todoListId: string) {
        const updatedTodoList = todoLists.map(el => el.id === todoListId ? {...el, title: newTitle} : el)
        setTodoLists(updatedTodoList)
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

export default App;
