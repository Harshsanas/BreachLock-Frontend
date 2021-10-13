import { useState } from "react";
import Calendar from "./Calendar";
import { useContext } from "react";
import { StoreContext } from "./SetContextProvider";

const AddNote = () => {
  const [noteData, setNoteData] = useState({ title: "", body: "", date: "" });

  const { cards, setCards } = useContext(StoreContext);

  const handleChange = (e) => {
    let [name, value] = [e.target.name, e.target.value];
    setNoteData({
      ...noteData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let localData = JSON.parse(localStorage.getItem("cards"));
    if (localData == null) {
      localStorage.setItem("cards", JSON.stringify([noteData]));
      setCards([noteData]);
    } else {
      let arr = localData;
      arr.push(noteData);
      localStorage.setItem("cards", JSON.stringify(arr));
      setCards(localData);
      // console.log(arr)
    }
  };

  return (
    <div>
      <div>
        <div>
          <Calendar handleChange={handleChange} data={noteData} />
        </div>
        <div>
          <input
            type="text"
            value={noteData.title}
            name="title"
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            value={noteData.body}
            name="body"
            onChange={handleChange}
            placeholder="Note"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Add Note</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
