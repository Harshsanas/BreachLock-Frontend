import AddNote from "./Components/AddNote";
import Card from "./Components/Card";
import { useContext } from "react";
import { StoreContext } from "./Components/SetContextProvider";
import "./App.css"

const App = () => {
  const { cards } = useContext(StoreContext);

  return (
    <div className="App">
    <h1>NOTE APPLICATION</h1>
      <div>
        <AddNote />
      </div>
      <div>
        <div>
          {cards.map((e) => {
            return <Card title={e.title} body={e.body} date={e.date} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
