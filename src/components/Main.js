import { useState } from "react";
import { Form } from "./Form";
import { SideBar } from "./SideBar";
import { initialFriends } from "./App";

export function Main() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [currentFriend, setCurrentFriend] = useState(null);
  function handleCurrentFriend(id) {
    return setCurrentFriend((e) => {
      if (currentFriend !== null) {
        if (currentFriend.id === id) return null;
      }
      const found = friends.find((friend) => friend.id === id);

      return found;
    });
  }
  console.log(currentFriend);
  const isFormOpen = currentFriend === null ? false : true;
  return (
    <div className="app">
      <SideBar
        onSetCurrentFriend={handleCurrentFriend}
        isFormOpen={isFormOpen}
        currentFriend={currentFriend}
        friends={friends}
        setFriends={setFriends}
      />
      {!isFormOpen ? null : (
        <Form
          friend={currentFriend}
          isFormOpen={isFormOpen}
          friends={friends}
          setFriends={setFriends}
          setCurrentFriend={handleCurrentFriend}
        />
      )}
    </div>
  );
}
