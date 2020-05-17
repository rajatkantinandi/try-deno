import { React, ReactDOM } from "https://unpkg.com/es-react@16.8.60/index.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

function Deno(props: any): any {
  return (
    <div>
      Hello Deno 🦕
    </div>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  //@ts-ignore
  let el = window.document.getElementById("app");

  ReactDOM.render(<Deno />, el, () => {
    console.log("Welcome to DENO");
  });
});
