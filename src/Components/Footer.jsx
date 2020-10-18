import { Paper, Badge, Typography, Link, Button } from "@material-ui/core";
import emoji from "emoji-dictionary";
import React from "react";

export default function Footer(props) {
  return (
    <Paper className={props.className}>
      <ReactionBar {...props} />
      <Copyright />
    </Paper>
  );
}

function ReactionBar(props) {
  const { reactions, onReact } = props;
  return Object.keys(reactions).map((key) => 
  {
    const value = reactions[key] || 0
    return (
    <Badge badgeContent={value} key={key}>
      <span role="img" aria-label={key}>
        <Button onClick={() => onReact(key, value)}>
          {emoji.getUnicode(key)}
        </Button>
      </span>
    </Badge>
  )});
}

function Copyright() {
  return (
    <Typography>
      {"Original Content by "}
      <Link href="">Miguel-Angel Campos ©</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
