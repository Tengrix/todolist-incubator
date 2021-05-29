import axios from "axios";

type TaskType = {
    description: string;
    title: string;
    completed: boolean;
    status: number;
    priority: number;
    startDate: string;
    deadline: string;
    id: string;
    todoListId: string;
    order: number;
    addedDate: string;
}

type CommonResponseType<T> = {
    resultCode: number;
    messages: string[];
    data: T;
    fieldsErrors: string[];
}

type GetTasksType = {
    items: TaskType[];
    totalCount:number;
    error:string;
}
export const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers:{
        'API-KEY' : '1eaa5d66-d310-487c-a1d0-2fd59af6c2de'
    }
})

export const taskApi = {

    getTasks(todolistId:string){
        return  instance.get<GetTasksType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(title:string, todolistId:string){
        return instance.post<CommonResponseType<{ item: TaskType[] }>>(`todo-lists/${todolistId}/tasks`,{title})
    },
    deleteTask(todolistId:string, taskId:string){
        return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId:string, taskId:string,title:string, description:string, completed:boolean, status:number, priority:number,startDate:string, deadline:string   ){
        return instance.put<CommonResponseType<{item: TaskType[]}>>(`todo-lists/${todolistId}/tasks/${taskId}`,{
            title,
            description,
            completed,
            status,
            priority,
            startDate,
            deadline}
        )
    }

}