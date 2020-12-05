import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

function EditFriend(props) {
  const initialData = {
    name: "",
    email: "",
    age: "",
  };

  //* State to manage form data
  const [friendData, setFriendData] = useState(initialData);

  //* Get the parameters passed by React Router
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/friends/${id}`)
      .then((res) => {
        setFriendData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //* Handle fields change
  const handleChange = (e) => {
    const changedData = { ...friendData, [e.target.name]: e.target.value };

    setFriendData(changedData);
  };

  //* Handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .put(`/friends/${id}`, friendData)
      .then((res) => {
        console.log(res);
        props.history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add A Friend</h2>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={friendData.name}
          placeholder='Name'
        />
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={friendData.email}
          placeholder='Email'
        />
        <input
          type='number'
          name='age'
          onChange={handleChange}
          value={friendData.age}
          placeholder='Age (Enter a Number)'
        />

        <button>Edit Friend</button>
      </form>
    </div>
  );
}

export default withRouter(EditFriend);
