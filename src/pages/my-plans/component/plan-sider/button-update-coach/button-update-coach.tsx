import React from "react";
import CSS from "./button-update-coach.module.scss";
import { Space, Typography } from "antd";

interface IButtonUpdateCoach {
  handleOnUpdate: Function;
  editMode: boolean;
}

const ButtonUpdateCoach = ({
  handleOnUpdate,
  editMode,
}: IButtonUpdateCoach) => {
  return (
    <div
      className={`${CSS.btn_container} ${
        true ? CSS.btn_update : ""
      } cs-dis-flex cs-hrz-center ${editMode && CSS.disabled}`}
      onClick={() => handleOnUpdate()}
    >
      <div>
        <Typography.Title
          level={3}
          className={`${
            editMode ? "cs-clr-off-000" : "cs-clr-fff"
          } cs-dis-flex cs-hrz-center`}
        >
          Update Coach
        </Typography.Title>

        <div className="cs-dis-flex cs-hrz-center">
          <Typography.Text
            // style={{ visibility: editMode ? "hidden" : "visible" }}
            type="secondary"
            className={`${editMode ? "" : "cs-clr-off-white"}`}
          >
            Last updated on 20/06/2023
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default ButtonUpdateCoach;
