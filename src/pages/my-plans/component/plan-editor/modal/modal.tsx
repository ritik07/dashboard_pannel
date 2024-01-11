import React, { useState } from "react";
import { Button, Divider, Modal, Typography } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import CSS from "./modal.module.scss";

interface IModalView {
  setIsModalOpen: Function;
}

const ModalView = ({ setIsModalOpen }: IModalView) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title=""
        footer={false}
        open={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className={CSS.title}>
            <Typography.Title level={4}>One More Step to Go!</Typography.Title>
          </div>
          <Divider className={CSS.divider} />
        </div>
        <div>
          <div className={CSS.title}>
            <AlertOutlined className={CSS.alert_icon} />
          </div>
          <div className={CSS.title}>
            <Typography.Text className={CSS.alert_txt}>
              Attention
            </Typography.Text>
          </div>

          <div className={CSS.txt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            molestiae nemo voluptas hic libero iste. Dignissimos voluptas
            veritatis commodi libero impedit ad, dolorum animi ullam adipisci,
            aspernatur, earum iste laudantium!
          </div>

          <div className={CSS.btn_container}>
            <div className={CSS.cancel}>Cancel</div>

            <div className={CSS.continue}>Continue</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalView;
