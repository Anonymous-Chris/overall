import React, { useState, useEffect } from "react";
import "../../../css/notification.css";
import $ from "jquery";
const Notification = () => {
  const [openNotificationStatus, setOpenNotificationStatus] = useState(null);
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 150) {
      $("#popUp").css("margin-left", "-425px");
      $("#plus").css("margin-left", "0px");
    }
  });

  const openNotification = () => {
    setOpenNotificationStatus(true);
    $("#popUp").css("margin-left", "0px");
    $("#plus").css("margin-left", "-425px");
  };

  const closeNotification = () => {
    setOpenNotificationStatus(false);
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  };

  useEffect(() => {
    console.log(sessionStorage.getItem("openNotificationStatus"));
    var sessionValue = sessionStorage.getItem("openNotificationStatus");
    if (sessionValue === "false" && sessionValue !== null) {
      closeNotification();
    } else {
      openNotification();
    }
  }, []);

  useEffect(() => {
    // console.log(sessionStorage.getItem("openNotificationStatus"));
    sessionStorage.setItem("openNotificationStatus", openNotificationStatus);
  }, [openNotificationStatus]);

  return (
    <div className="notifications">
      {console.log(openNotificationStatus)}
      <div id="popUp">
        <div id="close" className="close" onClick={closeNotification}>
          <i className="fa fa-times"></i>
        </div>
        <div id="new" className="w-100">
          <span>HELLO!</span>
        </div>
        <h2>
          This is a resposive layout using react-grid-layout. You can drag,
          resize and change the boxes accordingly.
          <br />
          <b>
            <i>
              Note: If the layout is not shifted accordingly, please press the
              reset button in the video panel and please refresh the page once.
            </i>
          </b>
        </h2>
      </div>
      <div id="plus" className="" onClick={openNotification}>
        <i className="fa fa-plus"></i>
      </div>
    </div>
  );
};

export default Notification;
