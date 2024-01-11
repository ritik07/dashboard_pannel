import React, { useState } from "react";
import { Button, Divider, Modal, Typography } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import CSS from "./deactivate-modal.module.scss";

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
            <Typography.Title level={4}>Are you sure?</Typography.Title>
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
          <Typography.Title level={4}>
            Are you sure you want to deactivate your account?
          </Typography.Title>

          <div className={CSS.btn_container}>
            <div className={CSS.cancel}>Cancel</div>

            <div className={CSS.continue}>Yes</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalView;
