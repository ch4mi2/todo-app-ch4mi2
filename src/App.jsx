import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const [tasks, setTasks] = useState([]);
  const [welcomeBanner, setWelcomeBanner] = useState(true);
  return (
    <div>
      <TaskContext.Provider value={{ tasks, setTasks, welcomeBanner, setWelcomeBanner }}>
        <AppRoutes />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
