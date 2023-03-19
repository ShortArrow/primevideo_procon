import React from "react";
import episode from "./epsodes";
import { IParsed } from "./parser";
interface IApp {
  parsedList: IParsed[];
}

function app(props: IApp) {
  return (
    <>
      {props.parsedList.map((v, k) => (
        <div key={k}>{episode(v)}</div>
      ))}
    </>
  );
}

export default app;
