import React from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import EditableSpan, {EditableSpanPropsType} from "./EditableSpan";
export default {
    title: 'TodoList/EditableSpan',
    component: EditableSpan,
    argTypes:{
        updateTitle: {
            description: 'Value changed'
        },
        task: {
            defaultValue: 'HTML',
            description: 'Start value'
        },
        id:{
            description: 'Id'
        }
    },
} as Meta;
const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args}/>;
export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    updateTitle:action('Title'),
    task: {id:'1', isDone: true, title: 'JS'},
    id:'todolistId'

};
