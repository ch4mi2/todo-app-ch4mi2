import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

const TaskPriorities = (props) => {
  const { tasks } = props;

  const [priorityCounts, setPriorityCounts] = useState({
    high: 0,
    medium: 0,
    low: 0,
  });

  useEffect(() => {
    const countTasks = () => {
      const newPriorityCounts = {
        high: 0,
        medium: 0,
        low: 0,
      };

      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].priority === "HIGH") {
          newPriorityCounts.high += 1;
        } else if (tasks[i].priority === "MEDIUM") {
          newPriorityCounts.medium += 1;
        } else if (tasks[i].priority === "LOW") {
          newPriorityCounts.low += 1;
        }
      }

      console.log("New Priority Counts:", newPriorityCounts);
      setPriorityCounts(newPriorityCounts);
    };

    countTasks();
  }, [tasks]);

  const pieChartData = [
    { id: "high", value: priorityCounts.high, label: "High", color: "#EB5757" },
    {
      id: "medium",
      value: priorityCounts.medium,
      label: "Medium",
      color: "#F2C94C",
    },
    { id: "low", value: priorityCounts.low, label: "Low", color: "#2F80ED" },
  ];

  return (
    <Paper variant="outlined" square={false} sx={{ borderRadius: "8px" }}>
      <div className="p-2">
        <Typography>Task Priorities</Typography>
      </div>
      <Divider />
      <div>
        <PieChart
          series={[
            {
              data: pieChartData,
              innerRadius: 20,
              outerRadius: 50,
              paddingAngle: 0,
              cornerRadius: 0,
              startAngle: 0,
              endAngle: 360,
            },
          ]}
          width={300}
          height={200}
        />
      </div>
    </Paper>
  );
};

export default TaskPriorities;
