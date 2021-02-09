import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../../static/img";

const Wrapper = styled.div`
  background: #fff;
  position: fixed;
  width: 100%;
  top: 0px;
  border-bottom: 1px solid #eee;
  z-index: 99;
`;

const Container = styled.div`
  height: 70px;
  display: flex;
  padding: 0 24px;
  margin: 0 auto;
  @media only screen and (max-width: ${props => props.theme.bpsm}) {
    padding: 0;
    height: 50px;
    overflow: hidden;
    > span {
      display: block;
    }
  }
  > div {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  > a {
    display: flex;
    align-items: center;
    > img {
      width: 80px;
      margin-right: 10px;
    }
    > p {
      font-size: 18px;
      font-weight: bolder;
      text-transform: capitalize;
      color: #000;
      margin-bottom: 0px;
    }
  }

  @media (max-width: ${props => props.theme.bpsm}) {
    > a {
      > img {
        width: 40px;
        margin-bottom: 10px;
      }
      > span {
        font-size: 16px;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%"
            }}
          >
            <LogoContainer>
              <a>
                <img src={Img.Logo} />
                <p>Assignment</p>
              </a>
            </LogoContainer>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
