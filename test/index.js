import { CurrentTimeStr } from "src";
import ReactDOM from "react-dom";
import React from "react";

/**
 * Demo
 */
export const Demo = _ => (
    <>
        <h1>UI Utils Demo</h1>
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
