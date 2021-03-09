import React from "react";

import TableCaption from "./TableCaption/TableCaption";
import TableUsers from "./TableUsers/TableUsers";

function Table({usersInfo, captions}) {
    return (
        <table>
            <TableCaption captions={captions ? captions : []}/>
            <TableUsers users={usersInfo ? usersInfo : []}/>
        </table>
    )
}

export default Table;

