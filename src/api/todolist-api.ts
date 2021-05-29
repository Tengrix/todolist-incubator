import axios from "axios";

type CommonResponseType<T> = {
    resultCode: number;
    messages: Array<string>;
    fieldsErrors: Array<string>;
    data: T
}

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers:{
        'API-KEY': '1eaa5d66-d310-487c-a1d0-2fd59af6c2de'
    }
})
export const todoApi = {
    getTodos(){
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodo(title:string){
        return instance.post<CommonResponseType<{ item: TodolistType }>>('todo-lists',{title})
    },
    deleteTodo(todolistId:string){
        return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId:string, title:string){
        return instance.put<CommonResponseType<{}>>(`todo-lists/${todolistId}`,{title})
    }
}