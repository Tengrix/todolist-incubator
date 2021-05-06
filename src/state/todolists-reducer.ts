import {filterType, TodoListsType} from "../AppWithRedux";
import {v1} from "uuid";

type ReducerActionType = ChangeTodoListFilterActionType|RemoveTodoListActionType|AddTodoListActionType|ChangeTodoListTitleActionType
export type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST';
    todoListId: string;

}
export type AddTodoListActionType = {
    type: 'ADD-TODOLIST';
    newTitle: string;
    id: string;
}
type ChangeTodoListTitleActionType = {
    type:'CHANGE-TODOLIST-TITLE';
    newTitle:string;
    todoListId:string;
}
type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER';
    value:filterType;
    todoListId:string;
}
let initialState: TodoListsType[] = []

export const todoListsReducer = (state:TodoListsType[] = initialState, action: ReducerActionType):TodoListsType[] => {
    switch (action.type){
        case "REMOVE-TODOLIST":
            return state.filter(el => el.id !== action.todoListId)
        case 'ADD-TODOLIST':
            const newTodoList: TodoListsType = {
                id: action.id,
                title: action.newTitle,
                filter: 'all'
            }
            return [...state, newTodoList]
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.todoListId ? {...el, title: action.newTitle} : el)
        case "CHANGE-TODOLIST-FILTER":
            return state.map(el => el.id ===action.todoListId ? {...el, filter: action.value} : el)
        default:
            return state
    }
}

export const removeTodoListAC = (id:string): RemoveTodoListActionType => {
    return {type: "REMOVE-TODOLIST", todoListId: id}
}
export const addTodoListAC = (newTitle:string): AddTodoListActionType => {
    return {type: 'ADD-TODOLIST', newTitle, id: v1()}
}
export const changeTodoListTitleAC = (newTitle:string, todoListId:string): ChangeTodoListTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', newTitle, todoListId}
}
export const changeTodoListFilterAC = (value:filterType, todoListId:string): ChangeTodoListFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', value, todoListId}
}