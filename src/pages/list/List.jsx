import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItems from "../../components/SearchItems";
// ------styled components start ------//
const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
const ListSearch = styled.section`
  background-color: #febb02;
  margin: 10px;
  flex: 1;
  padding: 10px;
  position: sticky;
  top: 10px;
  border-radius: 10px;
  height:max-content;
`;
const ListResult = styled.div`
  margin: 10px;
  flex: 3;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;
const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.span`
  font-weight: 500;
  margin: 10px 0;
  font-size: 20px;
  display: flex;
`;
const Input = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 5px;
  font-size: 18px;
  border: none;
`;
const Span = styled.span`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  font-size: 18px;
  padding-left: 5px;
  cursor: pointer;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 5px;
`;
const OptionText = styled.span``;

const SearchButton = styled.button`
  height: 50px;
  background-color: #0071c2;
  color: #fff;
  font-size: 20px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  &:hover {
    color: black;
    transition: 0.5 all ease-in;
  }
`;

// ------styled components end ------//
const List = () => {
  const location = useLocation();
  //console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [openDateRange, setOpenDateRange] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <Container>
        <Wrapper>
          <ListSearch>
            <Title>Search</Title>
            <SearchItem>
              <Label>Destination</Label>
              <Input placeholder={destination} />
            </SearchItem>
            <SearchItem>
              <Label>Check in-date</Label>
              <Span onClick={() => setOpenDateRange(!openDateRange)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </Span>
              {openDateRange && (
                <DateRange
                  onChange={(items) => setDate([items.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </SearchItem>
            <SearchItem>
              <Label>Options</Label>
              <OptionsWrapper>
                <OptionText>
                  {" "}
                  Min price <small>per night</small>{" "}
                </OptionText>
                <Input type="number" />
              </OptionsWrapper>
              <OptionsWrapper>
                <OptionText>
                  Max price <small>per night</small>
                </OptionText>
                <Input type="number" />
              </OptionsWrapper>
              <OptionsWrapper>
                <OptionText>Adult</OptionText>
                <Input type="number" placeholder="1" min={1} />
              </OptionsWrapper>
              <OptionsWrapper>
                <OptionText>Children </OptionText>
                <Input type="number" placeholder="0" min={0} />
              </OptionsWrapper>
              <OptionsWrapper>
                <OptionText>Room </OptionText>
                <Input type="number" placeholder="1" min={1} />
              </OptionsWrapper>
            </SearchItem>
            <SearchItem>
              <SearchButton>Search</SearchButton>
            </SearchItem>
          </ListSearch>
          <ListResult>
            <SearchItems />
          </ListResult>
        </Wrapper>
      </Container>
    </>
  );
};

export default List;
