import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Api from "./Data/Api";
import Client from "./Data/Client";
import Config from "./Config";
import resumePath from "./resume.md";
import { reducer, initialState, ACTION } from "./Data/Reducer";
import log from "loglevel";
import { green } from "@material-ui/core/colors";

const visitedPageReaction = "eye";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: green,
    background: green,
  },
}));

const api = new Api(new Client(Config.api));

log.setLevel("debug");

function App() {
  const classes = useStyles();

  const [reactions, dispatch] = useReducer(reducer, initialState);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    log.info("getting resume");
    fetch(resumePath)
      .then((r) => r.text())
      .then((t) => {
        log.debug(t);
        return t;
      })
      .then((t) => setMarkdown(t));
  }, []);

  useEffect(() => {
    (function () {
      api.getReactions().then((data) => {
        dispatch({ type: ACTION.LOAD_REACTIONS, payload: data });
        api.postReaction(visitedPageReaction).then(() => {
          dispatch({ type: ACTION.ADD_REACTION, payload: visitedPageReaction });
        });
      });
    })();
  }, []);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header className={classes.header} />
        <Divider />
        <Resume markdown={markdown} className={classes.main} />
        <Divider />
        <Footer
          reactions={reactions}
          onReact={(emoji) => {
            api.postReaction(emoji).then(() => {
              dispatch({ type: ACTION.ADD_REACTION, payload: emoji });
            });
          }}
          className={classes.footer}
        />
      </div>
    </>
  );
}

export default App;
