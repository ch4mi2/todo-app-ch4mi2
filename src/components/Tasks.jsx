import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const rowsPerPage = 8; // Default rows per page

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper variant="outlined"  square={false} className="m-3">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell component="th" scope="row">
                    {task.todo}
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
