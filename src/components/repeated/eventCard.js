import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 190px;
  width: 400px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom right, #0099ff 0%, #66ffff 100%);
  border-radius: 10px;
  box-shadow: 4px 4px 0px 0px #bbb;
`;

const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 24px;
    font-weight: bolder;
    color: #fff;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const StartDate = styled.div`
  width: 50%;
  border-right: 1px solid #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div {
    font-size: 14px;
    font-weight: bolder;
    > span {
      font-size: 16px;
    }
  }
`;
const EndDate = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > div {
    font-size: 14px;
    font-weight: bolder;
    > span {
      font-size: 16px;
    }
  }
`;

class MarginCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <Body>
          <p>{data.name}</p>
        </Body>
        <Footer>
          <StartDate>
            <div>
              Start:<span>{data.start}</span>
            </div>
          </StartDate>
          <EndDate>
            <div>
              End:<span>{data.end}</span>
            </div>
          </EndDate>
        </Footer>
      </Wrapper>
    );
  }
}

export default MarginCard;
