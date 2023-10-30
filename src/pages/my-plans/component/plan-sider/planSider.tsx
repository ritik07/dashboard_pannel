import { Card } from "antd";
import React from "react";
import ButtonUpdateCoach from "./button-update-coach/button-update-coach";
import SummaryDetails from "./summary-details/summary-details";
import UpgradePlan from "./upgrade-plan/upgrade-plan";

interface IPlanSider {
  handleOnUpdate: Function;
  editMode: boolean;
}

const PlanSider = ({ handleOnUpdate, editMode }: IPlanSider) => {
  return (
    <div>
      <Card>
        <ButtonUpdateCoach
          handleOnUpdate={handleOnUpdate}
          editMode={editMode}
        />

        <SummaryDetails />
      </Card>

      <div>
        <UpgradePlan />
      </div>
    </div>
  );
};

export default PlanSider;
