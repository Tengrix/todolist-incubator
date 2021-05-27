
import {removeTodoListAC, todoListsReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {filterType, TodoListsType} from '../AppWithRedux';

let todolistId1: string;
let todolistId2: string;
let startState: TodoListsType[];

beforeEach(()=>{
    let todolistId1 = v1();
    let todolistId2 = v1();
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
})

test('correct todolist should be removed', () => {
    const endState = todoListsReducer(startState, removeTodoListAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});
test('correct todolist should add todoList', () => {

    const title = 'New TodoList'
    const startState: Array<TodoListsType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, { type: 'ADD-TODOLIST', newTitle:title, id:todolistId1})

    expect(endState.length).toBe(3);
});
test('correct todolist should change title', () => {

    let title = 'asd'

    const startState: Array<TodoListsType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, { type: 'CHANGE-TODOLIST-TITLE', newTitle:title ,todoListId: todolistId1})

    expect(endState[0].title).toBe(title);
});
test('correct todolist should change filter', () => {

    const a: filterType = 'all'

    const startState: Array<TodoListsType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, { type: 'CHANGE-TODOLIST-FILTER', value:a ,todoListId: todolistId1})

    expect(endState[0].filter).toBe(a);
});

