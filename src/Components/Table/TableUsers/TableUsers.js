import React from "react";

import "./TableUsers.css";

function TableUsers({users}) {
   return (
       <div className="users">
           {users.map((user) => {
               return user.map( (item, index) => {
                   console.log(item)
                   return (<p className="user" key={index}>{item}</p>)
               })
           })}
       </div>
   )
}

export default TableUsers;