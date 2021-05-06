import {KeyTasksType, TodoListsType} from "../App";
import {taskReducer} from "./task-reducer";
import {addTodoListAC, todoListsReducer} from "./todolists-reducer";

test('ids should be equals', () => {
    const startTasksState: KeyTasksType = {};
    const startTodolistsState: TodoListsType[] = [];

    const action = addTodoListAC("new todolist");

    const endTasksState = taskReducer(startTasksState, action)
    const endTodolistsState = todoListsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.id);
    expect(idFromTodolists).toBe(action.id);
});
