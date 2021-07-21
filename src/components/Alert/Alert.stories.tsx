import React from 'react';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
}

export const Main = (args:any) => <Alert {...args}/>;

Main.args={
  children:"Welcome to the Alert Box",
  className:"",
}
