import {setTodosAC, TodolistDomainType, todolistsReducer} from "./todolists-reducer";
import {v1} from "uuid";
let todolistId1:string
let todolistId2:string
let startState: Array <TodolistDomainType> = []
beforeEach(() => {
    todolistId1 = v1()
    todolistId2 = v1()
    startState = [
        {id: todolistId1, title: 'asd', filter: 'all', addedDate:'', order:0},
        {id: todolistId2, title: 'qqqasd', filter: 'all', addedDate:'', order:0}
    ]

})
test ('todolists should be set to the state', () =>{
const action = setTodosAC(startState)
    const endState = todolistsReducer([], action)
    expect(endState.length).toBe(2)

})