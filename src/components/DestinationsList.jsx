import styled from "styled-components";
// ------styled components start ------//
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap:10px;
    margin: 10px 20px;
`;
const ListItem = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
`;
const ListImg = styled.img`
    object-fit:cover;
    width: 100%;
    flex:1;
`;
const ListName = styled.h3`
    margin: 2px 0;
`;
const ListCity = styled.span`
    font-weight:300;
`;
const ListPrice = styled.span`
    font-weight:500;
`;
const ListRating = styled.div`
`;
const ListPoint = styled.button`
    padding:6px;
    background-color:#003580;
    color:#fff;
    border:none;
    margin-right:10px;
    font-weight:600;
`;
const ListComment = styled.span``;
// ------styled components end ------//

const DestinationsList = () => {
  return (
    <Container>
      <ListItem>
        <ListImg src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"/>
        <ListName>Comfort Suit Airport</ListName>
        <ListCity>Copenhagen</ListCity>
        <ListPrice>1200 SEK</ListPrice>
        <ListRating>
            <ListPoint>7.8</ListPoint>
            <ListComment>Good</ListComment>
        </ListRating>
      </ListItem>
      <ListItem>
        <ListImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"/>
        <ListName>Elite Hotel</ListName>
        <ListCity>Helsingborg</ListCity>
        <ListPrice>1100 SEK</ListPrice>
        <ListRating>
            <ListPoint>8.1</ListPoint>
            <ListComment>Excellent</ListComment>
        </ListRating>
      </ListItem>
    </Container>
  );
};

export default DestinationsList;
