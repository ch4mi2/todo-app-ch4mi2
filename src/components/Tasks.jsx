import  { useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import PriorityHigh from '../assets/Priority-High.svg';
import PriorityLow from '../assets/Priority-Low.svg';
import PriorityMedium from '../assets/Priority-Medium.svg';
import { format } from "date-fns";


const Tasks = (props) => {
  const { tasks } = props;
  const [page, setPage] = useState(1); 
  const rowsPerPage = 8; 

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const getPriorityImage = (priority) => {
    switch (priority) {
      case "HIGH":
        return PriorityHigh;
      case "MEDIUM":
        return PriorityMedium;
      case "LOW":
        return PriorityLow;
      default:
        return null; 
    }
  };

  const getStatus = (completed) => {
    if (completed === true) {
      return(
        <p className=" text-[#219653] bg-[#E8F5E9] rounded-full p-2">Done</p>
      )
    }else{
      return(
        <p className=" text-[#F2C94C] bg-[#F2C94C]/10 rounded-full p-2">In-Progress</p>
      )
    }
  }

  return (
    <Paper variant="outlined" square={false}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((task, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell sx={{padding:'8px'}}>
                    <div className="flex items-center">
                    <img
                      src={getPriorityImage(task.priority)}
                      alt={task.priority}
                      className="mr-2 "
                    />
                    <div className="flex-grow ">
                    {task.todo}
                    </div>
                    <div className="mr-2 ">
                    {getStatus(task.completed)}
                    </div>
                    <div className="mr-2 ">
                    {format(new Date(task.createdAt), "MMM dd")}
                    </div>
                    </div>
                    {task.completed === false ? <button href className="ml-7 text-[#BC006D]">Mark as done</button> : null}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" p={2}>
        <Pagination
          count={Math.ceil(tasks.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .Mui-selected": {
              color: "#BC006D",
              border: "2px solid #BC006D",
            },
            "& .MuiPaginationItem-page": {
              "&:hover": {
                backgroundColor: "lightgray",
              },
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default Tasks;
