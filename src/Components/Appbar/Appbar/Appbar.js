import React from "react";
import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import List from '@material-ui/core/List';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// import { mainListItems, secondaryListItems } from "../listItems";
// import Chart from './Chart';
// import Deposits from "./Deposits";
// import Orders from "./Orders";

import MessageIcon from "@material-ui/icons/Message";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import NewList from "../List/NewList";
import { useStyles } from "./css";
import { Link, Redirect } from "react-router-dom";

export default function AppBar1(props) {
  console.log(props);
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen1(prevOpen => !prevOpen);
  };

  const redirectProfile = () => {
    setRedirect(true);
  };
  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen1(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    }
  }

  //  return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open1);
  React.useEffect(() => {
    if (prevOpen.current === true && open1 === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open1;
  }, [open1]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  if (redirect) {
    return <Redirect to="/otopark/superadmin/profile" />;
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: props.bgcolor,
          color: props.color,
          boxShadow: props.shadow
        }}
        position="fixed"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <img src={props.menuIcon} />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {/* dropdown */}
            <div style={props.style}>
              <select className={classes.appbarDropdown} style={props.style1}>
                <option>Location</option>
                <option selected>Goregaon (East)</option>
                <option>Goregaon (West)</option>
                <option>Goregaon (East)</option>
              </select>
            </div>

            {/* search bar */}
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "grey" }} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
            {/* search bar end */}
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={14} color="secondary">
              <img src={props.emailIcon} height="20px" />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <img src={props.bellIcon} height="22px" />
            </Badge>
          </IconButton>
          {/* profile */}

          <div>
            <Button
              // style={{ marginRight: "10px" }}
              // align="left"
              ref={anchorRef}
              aria-controls={open1 ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Typography
                variant="h7"
                style={{
                  color: props.profileTextColor,
                  textTransform: "none",
                  padding: "10px"
                }}
              >
                Neha Dixit
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src={require("../../../assets/images/profile.jpg")}
                className={classes.large}
              />
            </Button>
            <Popper
              open={open1}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open1}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem>Status : Online</MenuItem>
                        <Link
                          to="profile"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          <MenuItem onClick={() => redirectProfile()}>
                            Profile
                          </MenuItem>
                        </Link>

                        <Link
                          to="/otopark/superadmin/login"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Link>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          {/* end */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <h4 className={classes.toolbarIcon}>OICCS Admin</h4>
          <IconButton onClick={handleDrawerClose}>
            <img src={require("../../../assets/icons/menu-barIcon.svg")} />
          </IconButton>
        </div>
        <NewList />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container
          maxWidth="lg"
          className={classes.container}
          style={{ backgroundColor: "white" }}
        >
          {props.page}
        </Container>
      </main>
    </div>
  );
}