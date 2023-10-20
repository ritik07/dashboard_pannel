import React, { CSSProperties } from "react";
import CSS from "./circular-card-icon.module.scss";

type Props = {
  icon: React.FC<{ style?: CSSProperties }>
  size: number
  padding:number
  backgroundColor?:string
  color?:string
};

const CircularCardIcon: React.FC<Props> = (props: Props) => {
  return (
    <div 
      className={CSS.circular_card} 
      style={{
        width: `${props.size+(2*props.padding)}rem`,
        height: `${props.size+(2*props.padding)}rem`,
        padding: `${props.padding}rem`,
        backgroundColor:props.backgroundColor? props.backgroundColor: "",
        color:props.color?props.color:""
      }}
    >
      <props.icon style={{ fontSize: `${props.size}rem`}}/>
    </div>
  );
}

export default CircularCardIcon;