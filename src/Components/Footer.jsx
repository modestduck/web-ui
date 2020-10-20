import { Paper, Badge, Typography, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import emoji from "emoji-dictionary";
import React from "react";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 1),
    marginTop: "auto",
    minWidth: "100%",
  },
  badgebutton: {
    padding: theme.spacing(2, 0),
    margin: "0",
    fontSize: "larger"
  },
  copyright: {
    fontSize: "smaller",
    padding: "0",
    margin: "0",
  },
  link: {
    color: theme.palette.text.primary,
  }
}), {withTheme: true});

export default function Footer(props) {
  const classes = useStyles();
  return (
    <>
    <Paper elevation={3} className={classes.paper}>
      <ReactionBar {...props} />
      <Copyright />
    </Paper>
    </>
  );
}

function ReactionBar(props) {
  const classes = useStyles();
  const { reactions, onReact } = props;
  return <div className={classes.reactionBar}>
  {  
    Object.keys(reactions).map((key) => 
    {
      const value = reactions[key] || 0
      return (
      <Badge max={9999} badgeContent={value} key={key}>
        <span role="img" aria-label={key}>
          <Button className={classes.badgebutton} onClick={() => onReact(key, value)}>
            {emoji.getUnicode(key)}
          </Button>
        </span>
      </Badge>
    )})
  }
  </div>
}



function Copyright() {
  const classes = useStyles();
  return (
    <Typography className={classes.copyright}>
      {"Original Content by "}
      <Link className={classes.link} href="">Miguel-Angel Campos</Link> ©{new Date().getFullYear()}
    </Typography>
  );
}
