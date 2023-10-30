import React from "react";
import CSS from "./duration-card.module.scss";
import { Col, Row, Typography } from "antd";
import { BankOutlined, PlusOutlined } from "@ant-design/icons";

interface IDurationCard {
  data: any[];
  active: number;
  onSelect: Function;
}

const { Text, Title } = Typography;

const DurationCard = ({ data, active, onSelect }: IDurationCard) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Row className="cs-bm-20">
            <Col
              xs={24}
              className={`${
                index === 0
                  ? CSS.cs_active_bank_card_container
                  : CSS.cs_bank_card_container
              } cs-cursor-pointer`}
            >
              <Row gutter={[10, 10]}>
                <Col xs={6} className="cs-dis-flex cs-center cs-w-100">
                  <Title level={5}>{item.duration}</Title>
                </Col>

                <Col xs={7} className="cs-dis-flex cs-center cs-w-100 cs-jc-sb">
                  <div className="cs-lm-10">
                    <Title
                      type="secondary"
                      className={CSS.text_line_through}
                      level={5}
                    >
                      ₹ 1,140
                    </Title>
                    <div className="cs-dis-flex cs-center cs-w-100">
                      <Text className={CSS.text_save}>Save 5%</Text>
                    </div>
                  </div>
                </Col>

                <Col xs={7} className="cs-dis-flex cs-center">
                  <div className="cs-dis-flex cs-center">
                    <Title level={4}>₹ 1,368</Title>
                  </div>
                </Col>

                <Col xs={4} className="cs-dis-flex cs-center">
                  <div
                    className={
                      `${
                        index === 0
                          ? CSS.outer_radio_btn
                          : CSS.outer_radio_btn_inactive
                      }` + " cs-lm-10 cs-dis-flex cs-center"
                    }
                  >
                    <div
                      className={`${
                        index === 0 ? CSS.radio_btn : CSS.radio_btn_inactive
                      }`}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default DurationCard;
