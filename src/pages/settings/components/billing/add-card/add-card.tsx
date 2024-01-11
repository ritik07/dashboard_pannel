import React from "react";
import CSS from "./add-card.module.scss";
import { Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

interface IAddCard {
  setIsModalOpen: Function;
}

const AddCard = ({ setIsModalOpen }: IAddCard) => {
  return (
    <div className={CSS.card_container} onClick={() => setIsModalOpen(true)}>
      <div className={CSS.add_card_coontent}>
        <Typography.Text className={CSS.card_text}>
          Add New Card
        </Typography.Text>
        <PlusCircleFilled className={CSS.add_icon} />
      </div>
    </div>
  );
};

export default AddCard;
