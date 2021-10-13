import { useState } from "react";
import Calendar from "./Calendar";
import { useContext } from "react";
import { StoreContext } from "./SetContextProvider";

const AddNote = () => {
  const [data, setData] = useState({ title: "", body: "", date: "" });

  const { setCards } = useContext(StoreContext);

  const handleChange = (e) => {
    let [name, value] = [e.target.name, e.target.value];
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let localData = JSON.parse(localStorage.getItem("cards"));
    if (localData == null) {
      localStorage.setItem("cards", JSON.stringify([data]));
      setCards([data]);
    } else {
      let elem = localData;
      elem.push(data);
      localStorage.setItem("cards", JSON.stringify(elem));
      setCards(localData);
      // console.log(elem)
    }
  };

  return (
    <div style={{float:"left"}}>
      <div>
        <div>
          <Calendar handleChange={handleChange} data={data} />
        </div>
        <div>
          <input
            type="text"
            value={data.title}
            name="title"
            onChange={handleChange}
            placeholder="ENTER TITLE"
          />
        </div>
        <div>
          <textarea
            value={data.body}
            name="body"
            onChange={handleChange}
            placeholder="TYPE NOTE HERE"
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
