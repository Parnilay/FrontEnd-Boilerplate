import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";
import EventCard from "../repeated/eventCard";
import { DateRangePicker } from "react-date-range";

const Wrapper = styled.div`
  width: 100%;
  height: 1020px;
  background: #eee;
  @media only screen and (max-width: 992px) {
    height: 1300px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid #000;
  margin-top: 20px;
  display: flex;
  background: #fff;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px dotted #000;
`;
const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  margin-top: 70px;
  background: #fff;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 28px;
    color: #000;
    font-weight: bolder;
    margin-bottom: 0px;
  }
`;

const EventData = [
  {
    start: "2020-06-10",
    end: "2020-06-10",
    name: "Mumbai"
  },
  {
    start: "2020-06-12",
    end: "2020-06-13",
    name: "Bangalore"
  },
  {
    start: "2020-06-15",
    end: "2020-06-16",
    name: "Sewree"
  },
  {
    start: "2020-06-17",
    end: "2020-06-18",
    name: "Delhi"
  },
  {
    start: "2020-06-20",
    end: "2020-06-22",
    name: "Chennai"
  },
  {
    start: "2020-06-23",
    end: "2020-06-28",
    name: "Bangalore"
  }
];

class HomePage extends Component {
  getRange = date => {
    let range = [];
    let data = {};
    let start_date = new Date(date.start);
    let end_date = new Date(date.end);
    data.startDate = start_date;
    data.endDate = end_date;
    data.key = "selection";
    range.push(data);
    console.log(range, "data");
    return range;
  };
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Title>
            <p>Event List:</p>
          </Title>
          {EventData.map((item, index) => (
            <MainContainer>
              <LeftContainer>
                <EventCard data={item} />
              </LeftContainer>
              <RightContainer>
                <DateRangePicker
                  showSelectionPreview={false}
                  moveRangeOnFirstSelection={false}
                  ranges={this.getRange(item)}
                  direction="horizontal"
                  onChange={() => console.log("selected")}
                />
              </RightContainer>
            </MainContainer>
          ))}
        </Wrapper>
      </>
    );
  }
}

export default HomePage;
