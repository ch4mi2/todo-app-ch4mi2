import { useEffect, useContext } from "react";
import Welcome from "../components/Welcome";
import TaskPriorities from "../components/TaskPriorities";
import ActivityFeed from "../components/ActivityFeed";
import Tasks from "../components/Tasks";
import { TaskContext } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks, setTasks, welcomeBanner } = useContext(TaskContext);
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
        {welcomeBanner && <Welcome />}
      </div>

      <div className="flex flex-grow flex-col md:flex-row space-x-4">
        <div className="w-full md:w-3/4 mb-4">
          <Tasks />
        </div>

        <div className="w-full md:w-1/4 md:flex flex-col space-y-4">
          <ActivityFeed />
          <TaskPriorities tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
