import React from "react";
import profile from "../../images/profile-12.jpeg";

import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Main = (args: any) => <Avatar {...args} src={profile} />;

Main.args = {
  className: "",
};
