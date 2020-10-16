import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import resumePath from "./resume.md";
import log from "loglevel";
import "./App.css";

function App() {
  const [resume, setResume] = useState("");
  useEffect(() => {
    fetch(resumePath)
      .then((r) => r.text())
      .then((t) => setResume(t))
      .catch((e) => log.error(e));
  }, [setResume]);

  return (
    <>
      <div class="headerBar">
        <div class="avatar"></div>
        <div class="identify">
          <div class="name">Miguel Campos</div>
          <div class="title">Technologist at G2 Software Systems</div>
        </div>
        <div class="contact">
          <div class="email">aModestDuck@gmail.com</div>
          <div class="hometown">San Diego, CA</div>
        </div>
      </div>
      <div class="divider"></div>
      <ReactMarkdown source={resume} />
      <div class="reaction bar">
        <div class="smile">😀</div>
        <div class="lmao">🤣</div>
        <div class="heart">😍</div>
        <div class="poop">💩</div>
        <div class="dead">💀</div>
        <div class="fuck">🤬</div>
        <div class="money">🤑</div>
        <div class="vomit">🤢</div>
        <div class="ice">🥶</div>
        <div class="mind">🤯</div>
      </div>
      <div class="footer">
        <div class="copyright">© 2020 - Original Content by Miguel Campos</div>
        <div class="social">
          <div class="github">www.github.com/ggonryun</div>
          <div class="linkedin">
            https://www.linkedin.com/in/miguel-campos-5b1114172/
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
