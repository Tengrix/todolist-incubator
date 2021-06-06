import {v1} from 'uuid';
import {todolistsAPI, TodolistType} from '../api/todolists-api'
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    todolist:TodolistType
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistActionType | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType
    | setTodosActionType

const initialState: Array<TodolistDomainType> =  [
    /*{id: todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order: 0},
    {id: todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order: 0}*/
]

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            const newTodolist: TodolistDomainType = {...action.todolist, filter:'all'}
            return [newTodolist, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.filter;
            }
            return [...state]
        }
        case "SET-TODOLISTS":
            return action.todos.map(el => {
                return {...el, filter: 'all'}
            })
        default:
            return state;
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodolistAC = (todolist:TodolistType): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', todolist}
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}
}
export const setTodosAC = (todos: TodolistType[]) => {
    return { type: 'SET-TODOLISTS',
        todos
    } as const
}
export type setTodosActionType = ReturnType<typeof setTodosAC>

export const fetchTodosThunk = (dispatch:Dispatch, getState: () => AppRootStateType) => {
    // 1. side Effects
    todolistsAPI.getTodolists().then((res) => {
        // 2. dispatch Actions
        dispatch(setTodosAC(res.data))
    })
}

export const fetchDelTodoLists = (id:string) => {
    return (dispatch:Dispatch) => {
        todolistsAPI.deleteTodolist(id).then((res) => {
            dispatch(removeTodolistAC(id))
        })
    }
}

export const fetchAddTodoList = (title:string) => {
    return (dispatch:Dispatch)=>{
        todolistsAPI.createTodolist(title).then((res) => {
            dispatch(addTodolistAC(res.data.data.item))
        })
    }
}
export const fetchChangeTodoListTitle = (id: string, title: string) => {
    return (dispatch:Dispatch)=>{
        todolistsAPI.updateTodolist(id, title).then((res) => {
            dispatch(changeTodolistTitleAC(id, title))
        })
    }
}