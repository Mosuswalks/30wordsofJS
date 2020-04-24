/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Menu, Layout } from "antd"
import Display from "../components/Display"
import { data } from "../data"

const { Sider, Content, Footer } = Layout
const { SubMenu } = Menu
const StyledContent = styled(Layout)`
  background: #121212;
  margin: "24px 16px 0";
  overflow: "initial";
`

const PageLayout = ({ children }) => {
  const [topicData, setTopicData] = useState(data)
  const [selectedData, setSelectedData] = useState()

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const setTopic = e => {
    setSelectedData(topicData.filter(data => data.topic === e.key))
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        styles={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Menu
          onClick={setTopic}
          mode="inline"
          theme="dark"
          style={{ height: "100%", width: "256px" }}
        >
          <SubMenu
            title={
              <span>
                <span>Fundamentals</span>
              </span>
            }
          >
            {topicData
              .filter(data => data.type === "Fundamentals")
              .map((data, i) => (
                <Menu.Item key={data.topic}>{data.topic}</Menu.Item>
              ))}
          </SubMenu>
          <SubMenu
            title={
              <span>
                <span>Advanced</span>
              </span>
            }
          >
            {topicData
              .filter(data => data.type === "Advanced")
              .map((data, i) => (
                <Menu.Item key={data.topic}>{data.topic}</Menu.Item>
              ))}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout styles={{ marginLeft: 200 }}>
        <StyledContent>
          <Display selectedData={selectedData} />
        </StyledContent>
      </Layout>
    </Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
