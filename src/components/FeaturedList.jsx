import styled from "styled-components";
// ------styled components start ------//
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin:10px 20px;
  width: 100%;
  gap: 10px;
`;
const ListItem = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;
const ListImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;
const ListTitles = styled.div``;
const ListTitle = styled.h2`
  font-size: ${(props) => props.fz}px;
  font-weight: ${(props) => props.fw};
`;

// ------styled components end ------//
const FeaturedList = () => {
  return (
    <Container>
      <ListItem>
        <ListImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" />
        <ListTitles>
          <ListTitle fz="20">Hotels</ListTitle>
          <ListTitle fz="14" fw="400">
            234 hotels
          </ListTitle>
        </ListTitles>
      </ListItem>
      <ListItem>
        <ListImg src="https://tse1.mm.bing.net/th?id=OIP.rjWY1vprTutgV2FFyrB2xwHaFH&pid=Api&P=0&w=232&h=160" />
        <ListTitles>
          <ListTitle fz="20">Apartments</ListTitle>
          <ListTitle fz="14" fw="400">
            174 apartments
          </ListTitle>
        </ListTitles>
      </ListItem>
      <ListItem>
        <ListImg src="https://tse2.mm.bing.net/th?id=OIP.goO5Uyztatv2D-VhPN1rVQHaFD&pid=Api&P=0&w=258&h=176" />
        <ListTitles>
          <ListTitle fz="20">Beaches</ListTitle>
          <ListTitle fz="14" fw="400">
            67 beaches
          </ListTitle>
        </ListTitles>
      </ListItem>
      <ListItem>
        <ListImg src="https://tse1.mm.bing.net/th?id=OIP.P4MwoZ4UncmmZzy6DczZNwHaE8&pid=Api&P=0&w=268&h=178" />
        <ListTitles>
          <ListTitle fz="20">Resorts</ListTitle>
          <ListTitle fz="14" fw="400">
            90 resorts
          </ListTitle>
        </ListTitles>
      </ListItem>
    </Container>
  );
};

export default FeaturedList;
