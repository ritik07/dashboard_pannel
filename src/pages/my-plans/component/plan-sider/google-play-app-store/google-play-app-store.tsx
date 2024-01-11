import React from "react";
import CSS from "./google-play-app-store.module.scss";
import appstore from "./assets/images/appstore.png";
import gplay from "./assets/images/gplay.png";
import { Typography } from "antd";

const GooglePlayAppStore = () => {
  return (
    <div className={CSS.gplaybg}>
      <div className={CSS.container}>
        <Typography.Text className={CSS.txt}>
          Seamless Coach Access
        </Typography.Text>
      </div>
      <div className={CSS.container}>
        <img className={CSS.icon_banner} src={appstore} />
      </div>
      <div className={CSS.container}>
        <img className={CSS.icon_banner} src={gplay} />
      </div>
    </div>
  );
};

export default GooglePlayAppStore;
