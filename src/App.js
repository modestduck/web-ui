import React, { useState, useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import { makeStyles,createMuiTheme, responsiveFontSizes, ThemeProvider  } from "@material-ui/core/styles";
import { Divider, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Api from "./Data/Api";
import Client from "./Data/Client";
import Config from "./Config";
import resumePath from "./resume.md";
import { reducer, initialState, ACTION } from "./Data/Reducer";
import log from "loglevel";

const api = new Api(new Client(Config.api));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    maxWidth: "100vw",
    minWidth: "90vw",
    background: "#ECD632"
  },

  main: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "97.5vw",
  },
}), {withTheme: true});

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: "#50E6C4",
    },
    secondary: {
      main: "#5AC161",
    },
    background:
    {
      default: "#50E6C4",
    }
  },
}));


log.setLevel("error");

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
      });
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <Paper elevation={3} className={classes.main}>
          <Resume markdown={markdown} />
        </Paper>
        <Divider />
        <Footer
          reactions={reactions}
          onReact={(emoji) => {
            api.postReaction(emoji).then(() => {
              dispatch({ type: ACTION.ADD_REACTION, payload: emoji });
            });
          }}
        />
      </div>
    </ThemeProvider>

  );
}

export default App;
