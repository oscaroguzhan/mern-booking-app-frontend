import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// ------styled components start ------//

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin:  20px 40px;
  min-width:1024px;
`;
const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  flex-direction:column;
  gap: 10px;
`;
const StyledReservationButton = styled.button`
  position:absolute;
  top:10px;
  right:0;
  background-color:#0071c2;
  color:#fff;
  padding:10px 20px;
  font-size:18px;
  border:none;
  border-radius:5px;
  cursor: pointer;

`;
const StyledTitle = styled.h2`
  font-size: 40px;
`;
const StyledHotelAdress = styled.div`
  font-size: 24px;
  display: flex;
  gap: 5px;
  margin: 5px;
  align-items: center;
  
`;
const StyledLocTitle = styled.h6`
  font-weight: 400;
`;
const StyledLocDesc = styled.div`
  color:#0071c2;
  margin-bottom:10px;
  
`;
const StyledInfo = styled.span`
  color:green;
`;
const StyledImgGallery = styled.div`
  display: flex;
  flex-wrap:wrap;
  
  justify-content: space-between;
  
`;
const StyledImgWrapper = styled.div`
width: 33%;

`;
const StyledImg = styled.img`
width: 100%;
object-fit:cover;
`;
const StyledHotelContainer = styled.div`
  
  display: flex;
  justify-content: center;
  margin-top:20px;
`;
const StyledHotelDetails = styled.div`
  display: flex;
  flex-direction:column;
  gap:10px;
  margin-top:10px;
  flex:3;
`;

const StyledHotelText = styled.h1`
  font-size: 36px;
  margin-bottom:10px;
`;
const StyledHotelDetailsPrice= styled.div`
  flex:1;
  background-color:#ebf3ff;
  padding:10px;
`;
const StyledHotelDetailsDesc = styled.p`
  
`;
const StyledDetailsTitle = styled.h1`
  font-size: 22px;
  margin-top:10px;
`;
const StyledDetailsDesc = styled.div`
  margin:5px 0;
`;

const StyledSubtitle = styled.h3`
font-size: 24px;
text-align:center;
`;
const StyleDetailsButton = styled.button`
  background-color:#0071c2;
  color:#fff;
  padding:10px 20px;
  font-size:18px;
  border:none;
  border-radius:5px;
  cursor: pointer;
  margin: 10px 20px;
  &:hover {
    color:#000;
    transition:0.3s all ease-in;
  }
`;

// ------styled components end ------//
const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  
  return (
    <>
      <Navbar />
      <Header type="list" />
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>Hilton Hotel</StyledTitle>
          <StyledReservationButton>Book Now</StyledReservationButton>
          <StyledHotelAdress>
            <FontAwesomeIcon icon={faLocationDot} />
            <StyledLocTitle>
              {" "}
              5 New York Gate, 24 253 New York, USA
            </StyledLocTitle>
          </StyledHotelAdress>
          <StyledLocDesc>Excellent location- 500m from center </StyledLocDesc>
          <StyledInfo>
            Book a stay over at this property and get a free taxi
          </StyledInfo>
          <StyledImgGallery>
            {photos.map((photo, i) => (
              <StyledImgWrapper key={i} >
                <StyledImg src={photo.src} alt=""/>
              </StyledImgWrapper>
            ))}
          </StyledImgGallery>
          <StyledHotelContainer>
            <StyledHotelDetails>
              <StyledHotelText>Stay in the Heart of Krakow</StyledHotelText>

              <StyledHotelDetailsDesc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </StyledHotelDetailsDesc>
            </StyledHotelDetails>
              <StyledHotelDetailsPrice>
                <StyledDetailsTitle>Perfect for a 9-night stay!</StyledDetailsTitle>
                <StyledDetailsDesc>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </StyledDetailsDesc>
                <StyledSubtitle>
                  <b>$945</b> (9 nights)
                </StyledSubtitle>
                <StyleDetailsButton>Reserve or Book Now!</StyleDetailsButton>
              </StyledHotelDetailsPrice>
          </StyledHotelContainer>
        </StyledWrapper>
      </StyledContainer>
      <Footer/>
    </>
  );
};

export default Hotel;
