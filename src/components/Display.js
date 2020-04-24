import React from "react"

import Variables from "../images/variables.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 80%;
`

const StyledTitle = styled.h1`
  font-size: 7em;
  color: white;
`

const StyledParagraph = styled.p`
  color: white;
  font-size: 2em;
`

const Display = ({ selectedData }) => {
  if (selectedData) {
    return (
      <StyledDiv>
        {selectedData.map(data => (
          <span>
            <StyledTitle>{data.topic}</StyledTitle>
            <StyledParagraph>{data.definition}</StyledParagraph>
          </span>
        ))}
      </StyledDiv>
    )
  }

  return (
    <StyledDiv>
      <h1 style={{ color: "white" }}>Select a Topic </h1>
    </StyledDiv>
  )
}

export default Display
