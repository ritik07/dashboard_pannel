import React from "react";
import Header from "../common/header";
import CSS from "./all.module.scss";
import { Card, Col, Row, Typography } from "antd";
import RowContainer from "../common/row-container";

interface IAll {
  filterBy: any;
  data: any[];
}

const All = ({ filterBy, data }: IAll) => {
  return <RowContainer filterBy={filterBy} data={data} />;
};

export default All;
