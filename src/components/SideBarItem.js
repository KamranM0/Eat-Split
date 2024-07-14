export function SideBarItem({ friend, onSetCurrentFriend, currentFriend }) {
  let isFormOpen;
  let content;
  const balance = friend.balance;
  if (currentFriend === null) {
    isFormOpen = true;
  } else if (currentFriend.id === friend.id) {
    isFormOpen = false;
  } else isFormOpen = true;

  if (balance === 0) content = <p>You and {friend.name} are even.</p>;
  else if (balance < 0)
    content = (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.balance)}$
      </p>
    );
  else
    content = (
      <p className="green">
        {friend.name} owes you {Math.abs(friend.balance)}$
      </p>
    );
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {content}
      <button
        className="button"
        onClick={() => {
          return onSetCurrentFriend(friend.id);
        }}
      >
        {isFormOpen ? "Select" : "Close"}
      </button>
    </li>
  );
}
