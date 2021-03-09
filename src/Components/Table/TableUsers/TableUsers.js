import React from "react";
import classnames from "classnames";

import "./TableUsers.css";

function TableUsers({users}) {
    return (
        <tbody>
        {users.map((user, index) => {
            const {id, ...other} = user;
            return <tr key={index}>
                <td className="user">{id.value}</td>
                {Object.values(other).map((item, index) => {
                    return (
                        <td className={classnames("user", {wrongCell: !item.isValid})} key={index}>{item.value}</td>)
                })}
            </tr>
        })}
        </tbody>
    )
}

export default TableUsers;