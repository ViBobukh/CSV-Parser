import React from "react";

import "./TableCaptions.css";

function TableCaption ({captions}) {
    return (
        <div className="captions">
            {captions.map( (caption, index) => <p className="caption" key={index}>{caption}</p>)}
        </div>
    )
}

export default TableCaption;