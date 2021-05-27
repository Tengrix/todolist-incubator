import React from 'react';
import { Story, Meta } from '@storybook/react';

import {NewTitle, NewTitleType} from './NewTitle';
import {action} from "@storybook/addon-actions";

export default {
    title: 'TodoList/NewTitle',
    component: NewTitle,
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick:{
            description: 'Button from inside clicked'
        }
    },
} as Meta;

const Template: Story<NewTitleType> = (args) => <NewTitle {...args} />;

export const NewTitleExample = Template.bind({});
NewTitleExample.args = {
    addTask: action( 'Button from inside clicked')
};