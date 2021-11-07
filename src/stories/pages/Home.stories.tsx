import { Story, Meta } from '@storybook/react';
import React from 'react';

import Home from '../../pages';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta<typeof Home>;

const Template: Story = (args) => <Home {...args} />;

export const Default = Template.bind({});
