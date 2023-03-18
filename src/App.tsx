import React from "react";

interface IApp {
  readingTime: number;
}

function app(props: IApp) {
  return (
    <>
      <div>hello chrome extension</div>
      <div>{props.readingTime}</div>
    </>
  );
}

export default app;
