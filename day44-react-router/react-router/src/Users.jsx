import React, { useEffect, useState } from "react";

const Users = (props) => {
  useEffect(() => {
    console.log(props.match);
  });
  return (
    <div className="users-container">
      <h1>Users</h1>
    </div>
  );
};

export default Users;
