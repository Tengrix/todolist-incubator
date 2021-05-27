import {KeyTasksType} from "../AppWithRedux";
import {v1} from "uuid";
import {AddTodoListActionType, RemoveTodoListActionType} from "./todolists-reducer";

type ReducerActionType = RemoveTaskTypeAT |
    addTaskAT |
    changeTaskStatusAT |
    changeTaskTitleAT |
    AddTodoListActionType|
    RemoveTodoListActionType
type RemoveTaskTypeAT = {
    type: 'REMOVE-TASK';
    id: string;
    todoListId: string;
}
type addTaskAT = {
    type: 'ADD-TASK';
    newTitle: string;
    todoListId: string;
}

type changeTaskStatusAT = {
    type: 'CHANGE-TASK-STATUS';
    id:string;
    todoListId:string;
    isDone: boolean;

}

type changeTaskTitleAT = {
    type : 'CHANGE-TASK-TITLE'
    id: string;
    newTitle: string;
    todoListId: string
}

let initialState:KeyTasksType = {}

export const taskReducer = (state:KeyTasksType = initialState, action:ReducerActionType):KeyTasksType =>{
    switch (action.type){
        case "REMOVE-TASK":{
            let stateCopy = {...state}
            stateCopy[action.todoListId] = stateCopy[action.todoListId].filter(el => el.id !== action.id)
            return stateCopy
        }
        case "ADD-TASK":{
            let stateCopy = {...state}
            const newTask = {
                id: v1(),
                title: action.newTitle,
                isDone: false
            }
            stateCopy[action.todoListId] = [newTask, ...stateCopy[action.todoListId]]
            return stateCopy
        }
        case "CHANGE-TASK-STATUS":{
            let todolistTasks = state[action.todoListId]
            state[action.todoListId] = todolistTasks.map(el => el.id === action.id ? {
                ...el,
                isDone: action.isDone
            } : el)
            return ({...state})
        }
        case 'CHANGE-TASK-TITLE':{
            let stateCopy = {...state}
            stateCopy[action.todoListId] = stateCopy[action.todoListId].map(el => el.id === action.id ? {...el, title:action.newTitle} : el)
            return stateCopy
        }
        case 'ADD-TODOLIST':{
            return {...state, [action.id]: []}
        }
        case "REMOVE-TODOLIST":{
            let stateCopy = {...state}
            delete stateCopy[action.todoListId]
            return stateCopy
        }
        default:
            return state
    }
}

export const removeTaskAC = (id: string, todoListId: string):RemoveTaskTypeAT => {
    return {type:'REMOVE-TASK',id,todoListId }
}
export const addTaskAC = (newTitle: string, todoListId: string):addTaskAT => {
    return {type:'ADD-TASK', newTitle, todoListId}
}

export const changeTaskStatusAC = (id: string, todoListId: string, isDone: boolean):changeTaskStatusAT  => {
    return {type: 'CHANGE-TASK-STATUS', id, todoListId, isDone}
}

export const changeTaskTitleAC = (id: string, newTitle: string, todoListId: string): changeTaskTitleAT => {
    return {type: 'CHANGE-TASK-TITLE', id, newTitle, todoListId}
}
