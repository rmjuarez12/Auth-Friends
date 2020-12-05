// Import Modules
import { useEffect, useState } from "react";
import FriendsList from "../components/FriendsList";

// Import Utils
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Friends(props) {
  //* State with friends list
  const [friends, setFriends] = useState([]);

  //* State for isFetching
  const [isFetching, setIsFetching] = useState(true);

  //* Get the data from friends from the API endpoint
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("Friends.js: line 16: Get friends data:", res);
        setFriends(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteFriend = (id) => {
    setIsFetching(true);

    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then((res) => {
        console.log(res);
        setFriends(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setIsFetching(false);
      });
  };

  return (
    <div id='friends'>
      <h2>My Friends</h2>
      {isFetching ? (
        "Data Fetching..."
      ) : (
        <ul className='friends-list'>
          {friends.length > 0 &&
            friends.map((friend) => {
              return (
                <FriendsList
                  key={friend.id}
                  friend={friend}
                  deleteFriend={deleteFriend}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
}
