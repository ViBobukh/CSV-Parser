import React from "react";

import "./TableCaptions.css";

function TableCaption({captions}) {
    const {id, ...other} = captions;
    return (
        <thead>
        <tr>
            <td className="caption">{id}</td>
            {Object.values(other).map((caption, index) => <td className="caption" key={index}>{caption}</td>)}
        </tr>
        </thead>

    )
}

export default TableCaption;