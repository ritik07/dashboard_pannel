import React from "react";
import CollapsibleCard from "../../components/collapsible-card/collapsible-card";
import { Col, Divider, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CSS from "./faq.module.scss";
import FeedbackCard from "../../components/feedback-card/feedback-card";
import PageHeader from "../../components/page-header/page-header";

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
    <div className={CSS.container}>
      <PageHeader Icon={InfoCircleOutlined} Title="FAQ" Description="Answers to many frequenlty asked questions" />
      <Divider className="cs-tm-20" />
      <div className={CSS.body}>
        <Row gutter={[20, 20]}>
          <Col xs={12}>
            <Row>
              {col1data.map((cardItem, index) => {
                return (
                  <Col key={index} xs={24} className="cs-bm-20">
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
              {col2data.map((cardItem, index) => {
                return (
                  <Col key={index} xs={24} className="cs-bm-20">
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
      <Divider className="cs-tm-20" />
      <div className={CSS.footer}>
        <Row>
          <Col xs={12}>
            <FeedbackCard
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text={
                "Sed laoreet cursus lacus sed faucibus. Vestibulum eget sapien pulvinar, sodales dui a, pulvinar sem."
              }
              onClick={handleOnFeedbackClick}
              style="normal"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Faq;
