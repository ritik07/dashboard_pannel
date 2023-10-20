import { Space, Typography } from "antd";
import CSS from "./page-header.module.scss";
import CircularCardIcon from "../circular-card-icon/circular-card-icon";

type Props = {
  Icon:React.FC<{}>,
  Title:string,
  Description:string
};

const PageHeader: React.FC<Props> = (props: Props) => {
  return (
    <div className={CSS.header}>
      <div className={CSS.header_title}>
        <Space>
          <CircularCardIcon icon={props.Icon} size={2} padding={0.2} />
          <Typography.Title
            level={3}
            className={CSS.header_title_text}
          >
            {props.Title}
          </Typography.Title>
        </Space>
      </div>
      <div className={CSS.header_description}>
        <Typography.Text className={CSS.header_description_text} >
          {props.Description}
        </Typography.Text>
      </div>      
    </div>
  )
}

export default PageHeader;