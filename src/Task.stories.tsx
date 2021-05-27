import React from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Task, {TaskType} from "./Task";

export default {
    title: 'TodoList/Task',
    component: Task,
} as Meta;
const removeTaskCallback = action('Remove')
const changeTaskStatusCallBack = action('Status')
const updateTaskTitleCallBack = action('Title')
const Template: Story<TaskType> = (args) => <Task {...args} />;
const baseArgs = {
    removeTasks: removeTaskCallback,
    changeTaskStatus: changeTaskStatusCallBack,
    updateTitle: updateTaskTitleCallBack
}
export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    ...baseArgs,
    task:{id:'1', isDone: true, title: 'JS'},
    id: 'todoListId1'
};

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task:{id:'1', isDone: false, title: 'JS'},
    id: 'todoListId1'
};