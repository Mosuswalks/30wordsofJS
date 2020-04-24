import React from "react"
import { Menu } from "antd"

const SideMenu = ({ topicData }, setSelectedTopic) => {
  const { SubMenu } = Menu
  return (
    <Menu
      onClick={setT}
      mode="inline"
      theme="dark"
      style={{ height: "100%", width: "256px" }}
    >
      <SubMenu
        title={
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu.Item>30 Words of JS</Menu.Item>
        {topicData.map((data, i) => (
          <Menu.Item key={data.topic}>{data.topic}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  )
}

export default SideMenu
