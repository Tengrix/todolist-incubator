import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import Tasks from './Tasks';

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
            ]
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

    return (
        <div className="App">
            {todoLists.map(el => {
                return <Tasks key={el.id}
                              id={el.id}
                              task={changeFilterTasks(el)}
                              changeFilter={changeFilter}
                              removeTasks={removeTasks}
                              addTask={addTask}
                              filter={el.filter}
                              title={el.title}
                              changeTaskStatus={changeTaskStatus}
                              removeTodoLists={removeTodoLists}
                />
            })}
        </div>
    )
}

export default App;
