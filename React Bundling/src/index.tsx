import { React, ReactDOM } from "https://unpkg.com/es-react@16.8.60/index.js";

function Deno(props: any): any {
  const [counter, setCounter] = React.useState(1);

  return (
    <>
      <h1>Hello Deno 🦕 </h1>
      <p>React with deno: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>&nbsp; &nbsp;
      <button onClick={() => setCounter(counter - 1)}>- Decrement</button>
    </>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  //@ts-ignore
  let el = window.document.getElementById("app");

  ReactDOM.render(<Deno />, el, () => {
    console.log("Welcome to DENO");
  });
});
