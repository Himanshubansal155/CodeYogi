import React from 'react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes:{
      badges:{
          control:{
              type:"range",
              min:2,
              max:10,
          }
      }
  }
}

export const Main = (args:any) => <Card {...args}/>;

Main.args={

}
