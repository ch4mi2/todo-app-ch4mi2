import React from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { ListItem, ListItemText, ListItemIcon, Avatar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Dashboard from "../assets/Dashboard.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Profile from "../assets/Profile.svg";
import ChevronDown from "../assets/Chevron-down.svg";
import Notification from "../assets/Notifications.svg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: "#33074F !important",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#33074F !important",
  },
  root: {
    display: "flex",
  },
  page: {
    width: "100% !important",
    padding: "16px",
    backgroundColor:"#FAFAFA"
  },
  active: {
    fontWeight: "600 !important",
    backgroundColor: "#471366 !important",
    borderRadius: "25px !important",
    "& .MuiListItemText-primary": {
      color: "#fff",
    },
  },
  drawerHeading: {
    backgroundColor: "#471366 !important",
    padding: "16px",
    textAlign: "center",
    marginBottom: "60px !important",
    color: "#fff !important",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px) !important`,
    backgroundColor: "#fff !important",

    color: "#000 !important",
    fontWeight: "bold !important",
  },
  toolbar: theme.mixins.toolbar,
  toolbartext: {
    flexGrow: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      path: "/",
    },
  ];

  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.toolbartext}>Dashboard</Typography>

          <img className="m-2" src={Notification} alt="Notification" />
          <Avatar className="m-2" src={Profile} />
          <img className="m-2" src={ChevronDown} alt="ChevronDown" />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.drawerHeading}>
            Acmy Solutions
          </Typography>
        </div>

        {/* Menu items */}
        <div className="ml-4 mr-4">
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon className={classes.icon}>
                <img src={Dashboard} alt="Dashboard Icon" />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </div>
      </Drawer>

      {/* Page content */}
      <div className={classes.page} >
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
