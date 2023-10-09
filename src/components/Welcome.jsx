import React from "react";
import { Typography, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Vector from "../assets/Vector.svg";
import Close from "../assets/Close.svg";

const Welcome = () => {
  return (
    <Paper
      variant="outlined"
      square={false}
      sx={{ borderRadius: "8px", padding: "8px" }}
    >
      <div className="flex justify-between ">
        <div className="flex-grow">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Welcome back, John Doe
          </Typography>

          <Typography variant="body2" sx={{ color: "grey" }}>
            The end of the year is coming. Are you planning your performance?
            You can do this super efficiently with Acme
          </Typography>

          <Link href="#" sx={{ color: "#BC006D", textDecoration: "underline" }}>
            Look here for more information
          </Link>
        </div>

        <div>
          <img src={Vector} alt="Vector" />
        </div>
        <div>
          <img src={Close} alt="Vector" />
        </div>
      </div>
    </Paper>
  );
};

export default Welcome;
