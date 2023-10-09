import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <AppRoutes />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
