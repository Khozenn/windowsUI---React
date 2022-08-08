import Desktop from "./components/Desktop";
import TaskBar from "./components/TaskBar";
import { useState } from "react";

import "./styles/App.css";

function App() {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [chromeDisplay, setChromeDisplay] = useState(true);

  const addTask = (name) => {
    setCurrentTasks([...currentTasks, name]);
  };

  const deleteTask = (name) => {
    setCurrentTasks([...currentTasks].filter((task) => task !== name));
  };

  const toggleChromeDisplay = () => {
    setChromeDisplay(!chromeDisplay);
  };

  return (
    <div className="App">
      <Desktop
        addTask={addTask}
        deleteTask={deleteTask}
        toggleChromeDisplay={toggleChromeDisplay}
        chromeDisplay={chromeDisplay}
      />
      <TaskBar
        currentTasks={currentTasks}
        toggleChromeDisplay={toggleChromeDisplay}
      />
    </div>
  );
}

export default App;
