// Import Modules
import React from "react";

export default function FriendsList(props) {
  return (
    <li>
      <span className='name'>{props.friend.name}</span>
      <span className='email'>{props.friend.email}</span>
    </li>
  );
}
