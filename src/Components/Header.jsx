import React from "react";

import { AppBar, Avatar, Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1)
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  }

}), {withStyles: true});
export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.header}>
        <Avatar alt="Miguel Campos, website creator" src="/me64.jpg" />
        <div>
          <Typography className={classes.title}>Miguel-Angel Campos @ G2 Software Systems</Typography>
        </div>
        <div>
          <Link className={classes.link} target="_blank" href="mailto:amodestduck@gmail.com"><EmailSharpIcon fontSize="large" /></Link>
          <Link className={classes.link} target="_blank" href="https://github.com/GGonryun/"><GitHubIcon fontSize="large" /></Link>
          <Link className={classes.link} target="_blank" href="https://www.linkedin.com/in/miguel-campos-5b1114172/"><LinkedInIcon fontSize="large" /></Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
