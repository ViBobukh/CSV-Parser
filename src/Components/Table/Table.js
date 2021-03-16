import React from "react";

import TableCaption from "./TableCaption/TableCaption";
import TableUsers from "./TableUsers/TableUsers";
import "./Table.css";

function Table({usersInfo, captions}) {
    return (
        <table className='table'>
            <TableCaption captions={captions ? captions : []}/>
            <TableUsers users={usersInfo ? usersInfo : []}/>
        </table>
    )
}

export default Table;

