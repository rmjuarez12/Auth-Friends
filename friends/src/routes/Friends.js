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

  return (
    <div id='friends'>
      {isFetching ? (
        "Data Fetching..."
      ) : (
        <ul>
          {friends.length > 0 &&
            friends.map((friend) => {
              return <FriendsList key={friend.id} friend={friend} />;
            })}
        </ul>
      )}
    </div>
  );
}
