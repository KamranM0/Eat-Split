import AddFriend from "./AddFriend";
import { SideBarItem } from "./SideBarItem";
import { useState } from "react";

export function SideBar({
  onSetCurrentFriend,
  isFormOpen,
  currentFriend,
  friends,
  setFriends,
}) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  function handleIsAddOpen() {
    return setIsAddOpen((s) => !s);
  }
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <SideBarItem
            onSetCurrentFriend={onSetCurrentFriend}
            friend={friend}
            isFormOpen={isFormOpen}
            currentFriend={currentFriend}
          />
        ))}
      </ul>
      {isAddOpen ? (
        <AddFriend friends={friends} setFriends={setFriends} />
      ) : null}

      <button className="button" onClick={handleIsAddOpen}>
        {!isAddOpen ? "Add Friend" : "Close"}
      </button>
    </div>
  );
}
