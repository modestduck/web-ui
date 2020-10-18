import React from "react";
import ReactMarkdown from "react-markdown";

export default function Resume(props) {
  return <ReactMarkdown source={props.markdown} />;
}
