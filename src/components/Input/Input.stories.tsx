import React from "react";
import { FiUser, FiLock, FiAtSign } from "react-icons/fi";

import Input from "./Input";

const icons = { FiUser, FiLock, FiAtSign };

export default {
  title: "Components/Input",
  component: Input,
  argTypes:{
      Icon:{
          options:Object.keys(icons),
          mapping:icons,
          control:{
              type:"select",
              labels:{
                  FiUser:"user",
                  FiLock:"Lock",
                  FiAtSign:"At",
              }
          }
      }
  },
};

export const Main = (args: any) => <Input {...args} />;

Main.args = {
  type: "text",
  className: "",
  id: "username",
  PlaceHolder: "Username",
  error: "Some error",
  touched:false,
};

export const Password = (args: any) => <Input {...args} />;

Password.args = {
  type: "password",
  className: "",
  id: "password",
  PlaceHolder: "Password",
  touched:false,
  error:"Some error",
};
