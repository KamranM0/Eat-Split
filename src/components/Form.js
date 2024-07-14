import { useState } from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";
export function Form({ friend, setFriends, friends, setCurrentFriend }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [whoPays, setWhoPays] = useState("me");
  function reset() {
    setBill("");
    setFriendExpense("");
    setMyExpense("");
    setWhoPays("me");
  }
  function handleSetBill(e) {
    setBill(e);
    setMyExpense("");
  }
  function handleSplitBill(e) {
    e.preventDefault();
    const halfBill = Number(bill / 2);
    let newBalance = Number(friend.balance);
    if (Number(myExpense) + Number(friendExpense) !== Number(bill)) {
      alert("Please fill all the fields.");
      reset();
      return;
    }
    if (Number(myExpense) === halfBill) {
      newBalance += 0;
    }
    if (Number(myExpense) > halfBill) {
      newBalance += -1 * (halfBill - Number(myExpense));
    } else newBalance -= halfBill - Number(myExpense);

    setFriends((s) => {
      return s.map((el) => {
        if (el.id === friend.id) {
          return { ...el, balance: newBalance };
        }
        return { ...el };
      });
    });
    console.log(friends);
    reset();
    setCurrentFriend(friend.id);
  }
  function handleSetExpense(e) {
    if (whoPays === "me") {
      if (Number(e) > Number(bill)) {
        setFriendExpense(0);
        return setMyExpense(bill);
      } else {
        setFriendExpense(Number(bill) - Number(e));
        return setMyExpense(e);
      }
    } else {
      if (Number(e) > Number(bill)) {
        setFriendExpense(0);
        return setFriendExpense(bill);
      } else {
        setMyExpense(Number(bill) - Number(e));
        return setFriendExpense(e);
      }
    }
  }
  return (
    <form className="form-split-bill">
      <h2>Split the bill</h2>
      <FormField type="number" input={bill} onChangeInput={handleSetBill}>
        💰Bill value
      </FormField>
      <FormField
        type="number"
        isReadOnly={whoPays !== "me"}
        input={myExpense}
        onChangeInput={handleSetExpense}
      >
        🧑Your expense
      </FormField>
      <FormField
        type="number"
        input={friendExpense}
        onChangeInput={handleSetExpense}
        isReadOnly={whoPays === "me"}
      >
        🧔{friend.name}'s expense
      </FormField>
      <SelectField
        inputname={friend.name}
        whoPays={whoPays}
        setWhoPays={setWhoPays}
      >
        🤑Who is paying?
      </SelectField>
      <button className="button" onClick={handleSplitBill}>
        Split the bill
      </button>
    </form>
  );
}
