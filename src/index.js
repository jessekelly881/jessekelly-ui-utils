import React, { useState } from "react";
import moment from "moment";
import { useInterval } from "react-use";

const getTimeStr = format => moment().format(format || "h:mm A");

/**
 * CurrentTimeStr
 * Displays the current time as a string(in a span)
 */
export const CurrentTimeStr = ({ format, ...props }) => {
    useInterval(_ => setTime(getTimeStr(format)), 1000);
    const [time, setTime] = useState(getTimeStr(format));

    return <span {...props}>{time}</span>;
};
