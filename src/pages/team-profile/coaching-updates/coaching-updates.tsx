import React from "react";
import Slider from "react-slick";
import UpdateCard from "./update-card/update-card";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import CSS from "./update-card/update-card.module.scss";

type Props = {};

const CoachingUpdates = (props: Props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={CSS.arrowRight}
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <ArrowRightOutlined />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
      className={CSS.arrowLeft}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <ArrowLeftOutlined />
      </div>
    );
  }

  return (
    <div>
      <Slider {...settings}>
        <div>
          <UpdateCard />
        </div>
        <div>
          <UpdateCard />
        </div>
        <div>
          <UpdateCard />
        </div>
        <div>
          <UpdateCard />
        </div>
      </Slider>
    </div>
  );
};

export default CoachingUpdates;
