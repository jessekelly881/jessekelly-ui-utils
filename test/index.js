import { TimeStr } from "src";
import ReactDOM from "react-dom";
import React from "react";

console.log(TimeStr);

/**
 * Demo
 */
export const Demo = props => (
    <>
        <h1>UI Utils Demo</h1>
        <TimeStr />
    </>
);

ReactDOM.render(<Demo />, document.getElementById("root"));
