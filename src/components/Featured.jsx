import styled from "styled-components";
// ------styled components start ------//
const Container = styled.div`
    margin: 30px 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap:10px;
    z-index:1;
    
`;
const FeaturedItem = styled.div`
    position: relative;
    border-radius:10px;
    color:#fff;
    overflow:hidden;
    height: 300px;

`;
const FeaturedImg = styled.img`
width: 100%;
object-fit:cover;
cursor: pointer;

`;

const FeaturedTitles = styled.div`
position:absolute;
top:50px;
left:50px;
font-size:26px;
font-weight:600;
`;
const FeaturedTitle = styled.div``;
// ------styled components end ------//

const Featured = () => {
  return (
    <Container>
    <FeaturedItem>
        <FeaturedImg src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="/>
        <FeaturedTitles>
            <FeaturedTitle>Turkey</FeaturedTitle>
            <FeaturedTitle>255 properties</FeaturedTitle>
        </FeaturedTitles>
    </FeaturedItem>
    <FeaturedItem>
        <FeaturedImg src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="/>
        <FeaturedTitles>
            <FeaturedTitle>Austin</FeaturedTitle>
            <FeaturedTitle>123 properties</FeaturedTitle>
        </FeaturedTitles>
    </FeaturedItem>
    <FeaturedItem>
        <FeaturedImg src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="/>
        <FeaturedTitles>
            <FeaturedTitle>Norway</FeaturedTitle>
            <FeaturedTitle>98 properties</FeaturedTitle>
        </FeaturedTitles>
    </FeaturedItem>
   
    
    </Container>
  )
}

export default Featured