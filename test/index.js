import ReactDOM from "react-dom";
import React from "react";

import "normalize.css";
import "./index.scss";

import { CurrentTimeStr } from "src";

/**
 * Demo
 */
export const Demo = _ => (
    <>
        <h1>UI Utils Demo</h1>
        <code>npm install @jessekelly/ui-utils</code>
        <section>
            <h2>DateTime Related</h2>
            <section>
                <h3>CurrentTimeStr</h3>
                <CurrentTimeStr />
            </section>
        </section>
    </>
);

ReactDOM.render(<Demo />, document.getElementById("root"));
