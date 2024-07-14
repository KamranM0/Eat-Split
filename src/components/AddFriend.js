import { useState } from "react";
import FormField from "./FormField";
export default function AddFriend({ friends, setFriends }) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendImage, setNewFriendImage] = useState("");
  function addNewFriend(e) {
    e.preventDefault();
    if (newFriendName === "" || newFriendImage === "") {
      alert("Please, add name and image.");
      return;
    }
    const newFriend = {
      id: Date.now(),
      name: newFriendName,
      image: newFriendImage,
      balance: 0,
    };

    const newFriends = [...friends, newFriend];
    console.log(newFriends);
    setNewFriendName("");
    setNewFriendImage("");
    return setFriends(newFriends);
  }
  return (
    <form className="form-add-friend" onSubmit={addNewFriend}>
      <FormField
        type="text"
        input={newFriendName}
        onChangeInput={setNewFriendName}
      >
        😊Name
      </FormField>
      <FormField
        type="text"
        input={newFriendImage}
        onChangeInput={setNewFriendImage}
      >
        📸Image
      </FormField>
      <button className="button">Add</button>
    </form>
  );
}
