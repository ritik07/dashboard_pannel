import React from "react";
import NormalFeedbackCard from "./normal-feedback-card/normal-feedback-card";
import FilledFeedbackCard from "./filled-feedback-card/filled-feedback-card";
type Props = {
  title: string;
  text: string;
  onClick: () => void;
  style: "filled" | "normal"
};

const FeedbackCard: React.FC<Props> = (props: Props) => {
  return (
    props.style === "normal" ? 
    <NormalFeedbackCard title={props.title} text={props.text} onClick={props.onClick}/> : 
    <FilledFeedbackCard title={props.title} text={props.text} onClick={props.onClick}/>
  );
};

export default FeedbackCard;
