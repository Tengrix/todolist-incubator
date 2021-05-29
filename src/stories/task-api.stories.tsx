import React, {useEffect, useState} from 'react';
import {taskApi} from "../api/task-api";
export default {
    title: 'TASK'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '694655d4-5502-42fc-aa74-95849eb71e2d'
        taskApi.getTasks(todolistId).then((res) => {
            setState(res.data.items);
        })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = 'Redux'
        let todolistId = '694655d4-5502-42fc-aa74-95849eb71e2d'
        taskApi.createTask(title,todolistId).then((res) => {
            setState(res.data);
        })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '694655d4-5502-42fc-aa74-95849eb71e2d'
        let taskId = 'cc97a09c-5068-42d4-9f25-e958af464c2d'
        taskApi.deleteTask(todolistId, taskId).then((res) => {
            setState(res.data.resultCode);
        })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '694655d4-5502-42fc-aa74-95849eb71e2d';
        let taskId = '4b8270c3-d26a-4362-849c-73e5c37ba80e'
        let title = 'Ajax'
        let description = 'Redux'
        let completed = false
        let status = 1
        let priority = 10
        let startDate = '25-05-2021'
        let deadline = '29-05-2021'
        taskApi.updateTask(todolistId, taskId, title, description, completed, status, priority, startDate, deadline).then((res) => {
            setState(res.data);
        })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}



