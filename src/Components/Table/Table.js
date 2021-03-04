import React from "react";

import "./Table.css";
import TableCaption from "./TableCaption/TableCaption";
import TableUsers from "./TableUsers/TableUsers";
import tableMaker from "../../TableMaker/tableMaker";

function Table({usersInfo}) {
    // tableMaker(usersInfo)
    return (
        <div>
            <TableCaption captions={usersInfo[0] ? usersInfo[0] : []}/>
            <TableUsers users={usersInfo ? usersInfo : []}/>
        </div>
    )
}

export default Table;