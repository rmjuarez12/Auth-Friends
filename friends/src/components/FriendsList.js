// Import Modules
import React from "react";

export default function FriendsList(props) {
  return (
    <li>
      <div className='name'>{props.friend.name}</div>
      <div className='email'>{props.friend.email}</div>
      <div className='buttons'>
        <a className='button' href={`/edit-friend/${props.friend.id}`}>
          Edit
        </a>
        <button
          className='logout'
          onClick={() => props.deleteFriend(props.friend.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
