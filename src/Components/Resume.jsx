import React from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import "./resume.css"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#efefef"
  }
}));


export default function Resume(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactMarkdown source={props.markdown} />
    </div>
  )
}
