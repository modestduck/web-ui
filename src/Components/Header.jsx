import React from "react";

import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";

import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeWorkSharpIcon from "@material-ui/icons/HomeWorkSharp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar alt="Miguel Campos, website creator" src="/me64.jpg" />
        <Typography>Miguel-Angel Campos</Typography>
        <Typography>@ G2 Software Systems</Typography>
        <HomeWorkSharpIcon />
        <EmailSharpIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </Toolbar>
    </AppBar>
  );
}
