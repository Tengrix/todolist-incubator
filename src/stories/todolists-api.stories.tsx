import React, {useEffect, useState} from 'react'
import {todoApi} from "../api/todolist-api";
export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoApi.getTodos().then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = 'AXE'
        todoApi.createTodo(title).then( (res) => {
            setState(res.data.messages);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = 'd44fe945-59d5-47bb-9ee2-c015de80dec6'
        todoApi.deleteTodo(todolistId).then( (res) => {
            setState(res.data.resultCode);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = 'eb445450-2d87-4fe4-9423-5404164da9a1'
        let title = 'EFFECT'
            todoApi.updateTodoTitle(todolistId,title).then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

