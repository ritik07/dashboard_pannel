import React from "react";
import CollapsibleCard from "../../components/collapsible-card/collapsible-card";
import { Card, Col, Divider, Row, Space, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CSS from "./faq.module.scss";
import FeedbackCard from "../../components/feedback-card/feedback-card";

type Props = {};
type CardData = {
  Key: React.Key;
  Title: string;
  Text: string;
};
const Faq = (props: Props) => {
  const data: CardData[] = [
    {
      Key: "c1",
      Title: "R Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend, nunc ac sollicitudin mattis, ante felis molestie metus, et feugiat nunc ipsum in mauris. Sed id ex fermentum, rutrum ipsum vitae, ornare nulla.",
    },
    {
      Key: "c2",
      Title: "S Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend, nunc ac sollicitudin mattis, ante felis molestie metus, et feugiat nunc ipsum in mauris. Sed id ex fermentum, rutrum ipsum vitae, ornare nulla.",
    },
    {
      Key: "c2",
      Title: "D Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend, nunc ac sollicitudin mattis, ante felis molestie metus, et feugiat nunc ipsum in mauris. Sed id ex fermentum, rutrum ipsum vitae, ornare nulla.",
    },
    {
      Key: "c2",
      Title: "F Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend, nunc ac sollicitudin mattis, ante felis molestie metus, et feugiat nunc ipsum in mauris. Sed id ex fermentum, rutrum ipsum vitae, ornare nulla.",
    },
  ];

  let col1Length = Math.ceil(data.length / 2);
  const [col1data, col2data] = [
    data.slice(0, col1Length),
    data.slice(col1Length),
  ];

  const handleOnFeedbackClick = () => {
    console.log("feedback button clicked");
  };

  return (
    <React.Fragment>
      <div
        // split={<Divider style={{ margin: "0.5rem" }} />}
        className={CSS.container}
      >
        <div className={CSS.header}>
          <div className={CSS["header-title"]}>
            <Space>
              <div className={CSS["circular-card"]}>
                <InfoCircleOutlined style={{ fontSize: "1.7rem" }} />
              </div>
              <Typography.Title
                level={3}
                className="mr-2"
                style={{ color: "#34D370" }}
              >
                FAQ
              </Typography.Title>
            </Space>
          </div>
          <div
            className={CSS["header-description"]}
            style={{ marginLeft: "2.5rem" }}
          >
            <Typography.Text style={{ color: "#888" }}>
              Answers to many frequently asked questions
            </Typography.Text>
          </div>
          <Divider className="cs-tm-20" />
        </div>

        <div className={CSS.body}>
          <Row gutter={[20, 20]}>
            <Col xs={12}>
              <Row>
                {col1data.map((cardItem) => {
                  return (
                    <Col xs={24} className="cs-bm-20">
                      <CollapsibleCard
                        key={cardItem.Key}
                        title={cardItem.Title}
                        text={cardItem.Text}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                {col2data.map((cardItem) => {
                  return (
                    <Col xs={24} className="cs-bm-20">
                      <CollapsibleCard
                        key={cardItem.Key}
                        title={cardItem.Title}
                        text={cardItem.Text}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>

        <div className={CSS.footer}>
          <FeedbackCard
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            text={
              "Sed laoreet cursus lacus sed faucibus. Vestibulum eget sapien pulvinar, sodales dui a, pulvinar sem."
            }
            onClick={handleOnFeedbackClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
