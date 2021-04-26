import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import avatarImage from "./images/avatar.jpg";
import { login, logout, selectuser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import Widgets from "./Widgets";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <>
      {user ? (
        <div className="header">
          <div className="header__left">
            <img
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt=""
            />
            <div className="header__search">
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="header__right">
            <HeaderOptions title="Home" Icon={HomeIcon} />
            <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
            <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
            <HeaderOptions title="Messaging" Icon={ChatIcon} />
            <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
            <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
