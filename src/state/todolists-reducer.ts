import {filterType, TodoListsType} from "../App";
import {v1} from "uuid";

type ReducerActionType = ChangeTodoListFilterActionType|RemoveTodoListActionType|AddTodoListActionType|ChangeTodoListTitleActionType
type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST'
    todoListId: string;
}
type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    newTitle: string;
}
type ChangeTodoListTitleActionType = {
    type:'CHANGE-TODOLIST-TITLE'
    newTitle:string;
    todoListId:string;
}
type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    value:filterType;
    todoListId:string;
}

export const todoListsReducer = (todoLists:TodoListsType[], action: ReducerActionType):TodoListsType[] => {
    switch (action.type){
        case "REMOVE-TODOLIST":
            return todoLists.filter(el => el.id !== action.todoListId)
        case 'ADD-TODOLIST':
            let todoListId = v1()
            const newTodoList: TodoListsType = {
                id: todoListId,
                title: action.newTitle,
                filter: 'all'
            }
            return [...todoLists, newTodoList]
        case "CHANGE-TODOLIST-TITLE":
            return todoLists.map(el => el.id === action.todoListId ? {...el, title: action.newTitle} : el)
        case "CHANGE-TODOLIST-FILTER":
            return todoLists.map(el => el.id ===action.todoListId ? {...el, filter: action.value} : el)
        default:
            return todoLists
    }
}

export const removeTodoList = (id:string): RemoveTodoListActionType => {
    return {type: "REMOVE-TODOLIST", todoListId: id}
}