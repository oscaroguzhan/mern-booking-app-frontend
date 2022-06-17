import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// ------styled components start ------//
const HeaderContainer = styled.div`
  background-color: #${(props) => props.bg};
  height: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  height: 100px;
  position: relative;
`;
const HeaderList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1024px;
`;
const ListItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1px solid #fff;
    padding: 8px;

    border-radius: 20px;
    transition: 0.2s all ease-out;
  }
`;
const IconTitel = styled.span`
  margin-left: 5px;
`;
const TitelContainer = styled.div`
  background-color: #${(props) => props.bg};
  width: 100%;
  height: 80px;
`;
const HeaderTitel = styled.span`
  font-size: 24px;
  margin: 20px;
  color: #fff;
  font-weight: 300;
`;
const HeaderSearchContainer = styled.div`
  display: flex;
  height: 60px;
  background-color: #fff;
  margin: 10px 5px;
  align-items: center;
  border: 4px solid #febb02;
  justify-content: space-between;
`;
const SearchItem = styled.div`
  margin-left: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
`;
const SearchText = styled.span`
  opacity: 0.5;
  cursor: pointer;
`;
const SearchButton = styled.button`
  margin: 10px;
  background-color: #003580;
  color: #fff;
  padding: 10px;
  width: 10rem;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  &:hover {
    opacity: 0.8;
    transition: 0.3s all ease-out;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 320px;
  border: 1px solid lightgrey;
  height: 200px;
  padding: 10px;
  border-radius: 5px;
`;
const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;
  margin-bottom: 15px;
  justify-content: space-between;
`;
const OptionButton = styled.button`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: 2px solid #003580;
  background-color: #fff;
  &:hover {
    background-color: #003580;
    transition: 0.3s all ease-out;
    color: #fff;
  }
`;
const OptionText = styled.span`
  opacity: 0.6;
`;
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: black;
  font-weight: 500;
`;
// ------styled components end ------//

const Header = () => {
  const [openDateRange, setOpenDateRange] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  // define the function for handle event
  const handleOption = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      <HeaderContainer bg="003580">
        <HeaderList>
          <ListItem>
            <FontAwesomeIcon icon={faBed} />
            <IconTitel>Stays </IconTitel>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faPlane} />
            <IconTitel>Flights </IconTitel>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCar} />
            <IconTitel>Rent a Car </IconTitel>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faBed} />
            <IconTitel>Attractions </IconTitel>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <IconTitel>Airport transport </IconTitel>
          </ListItem>
        </HeaderList>
      </HeaderContainer>
      <TitelContainer bg="003580">
        <HeaderTitel>
          Get points for your travels- 10 000 points when you create your
          codeguruozzy booking account
        </HeaderTitel>
      </TitelContainer>
      <HeaderSearchContainer>
        <SearchItem>
          <FontAwesomeIcon icon={faBed} />
          <SearchInput type="text" placeholder="Where are you going?" />
        </SearchItem>
        <SearchItem>
          <FontAwesomeIcon icon={faCalendarDays} />
          <SearchText
            onClick={() => setOpenDateRange(!openDateRange)}
          >{`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
            range[0].endDate,
            "MM/dd/yyyy"
          )}`}</SearchText>

          {openDateRange && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={range}
              className="date"
            />
          )}
        </SearchItem>
        <SearchItem>
          <FontAwesomeIcon icon={faPerson} />
          <SearchText
            onClick={() => setOpenOptions(!openOptions)}
          >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</SearchText>
          {openOptions && (
            <Options>
              <OptionItem>
                <OptionText>Adult</OptionText>
                <OptionCounter>
                  <OptionButton
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}
                  >
                    {" "}
                    -{" "}
                  </OptionButton>
                  <span>{options.adult} </span>
                  <OptionButton onClick={() => handleOption("adult", "i")}>
                    {" "}
                    +{" "}
                  </OptionButton>
                </OptionCounter>
              </OptionItem>
              <OptionItem>
                <OptionText>Children</OptionText>
                <OptionCounter>
                  <OptionButton
                    disabled={options.children <= 0}
                    onClick={() => handleOption("children", "d")}
                  >
                    {" "}
                    -{" "}
                  </OptionButton>
                  <span>{options.children}</span>
                  <OptionButton onClick={() => handleOption("children", "i")}>
                    {" "}
                    +{" "}
                  </OptionButton>
                </OptionCounter>
              </OptionItem>
              <OptionItem>
                <OptionText>Room</OptionText>
                <OptionCounter>
                  <OptionButton
                    disabled={options.room <= 1}
                    onClick={() => handleOption("room", "d")}
                  >
                    {" "}
                    -{" "}
                  </OptionButton>
                  <span>{options.room} </span>
                  <OptionButton onClick={() => handleOption("room", "i")}>
                    {" "}
                    +{" "}
                  </OptionButton>
                </OptionCounter>
              </OptionItem>
            </Options>
          )}
        </SearchItem>
        <SearchButton>Search</SearchButton>
      </HeaderSearchContainer>
    </>
  );
};

export default Header;
