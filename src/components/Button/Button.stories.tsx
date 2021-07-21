import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes:{
    theme:{
      control:{
        type:"select",
      }
    }
  }
}

export const Main = (args:any) => <Button {...args}/>;

Main.args={
  children:"",
  className:"",
}

export const Outline= (args:any) => <Button {...args} className="bg-opacity-0 shadow-none" outline="outline" />;

Outline.args={
    children:"",
    theme:"undefined"
}