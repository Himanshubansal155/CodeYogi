import React from 'react';

import Bar from './Bar';

export default {
  title: 'Components/Bar',
  component: Bar,
  argTypes:{
      width:{
          control:{
              type:"range",
          }
      }
  }
}

export const Main = (args:any) => <Bar {...args} className="h-10"/>;

Main.args={
  width:70,
  className:"",
}
