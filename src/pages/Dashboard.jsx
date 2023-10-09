import {useState, useEffect} from "react";
import Welcome from "../components/Welcome";
import TaskPriorities from "../components/TaskPriorities";
import ActivityFeed from "../components/ActivityFeed";
import Tasks from "../components/Tasks";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      console.log("Fetching tasks");
      const response = await fetch(
        "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do"
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.log("Error fetching tasks");
      }
    };

    getTasks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-4 ">
      <div className="mb-4">
        <Welcome />
      </div>

      <div className="flex flex-grow space-x-4">
        <div className="w-full md:w-3/4">
          <Tasks tasks={tasks} className="mb-4" />
        </div>

        <div className="w-full md:w-1/4 flex flex-col space-y-4">
          <ActivityFeed className="flex-grow mb-4" />
          <TaskPriorities tasks={tasks} className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
