import React from "react";
interface IApp {
  readingTime: number;
}
const App = (props: IApp) => {
  return (
    <>
      <div>hello chrome extension</div>
      <div>{props.readingTime}</div>
    </>
  );
};

export default App;
