import styled from "styled-components";
// ------styled components start ------//
const StyledContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap:30px;
  margin: 5px;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
`;
const StyledImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
const StyledDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;
const StyledDescTitle = styled.h1`
  color: #0071c2;
  font-size: 36px;
  margin-bottom: 10px;
`;
const StyledDescDistance = styled.span`
  font-size: 14px;
`;
const StyledDescTransport = styled.span`
  background-color: green;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  margin: 10px 0;
`;
const StyledDescSubtitle = styled.h4`
  font-size: 24px;
`;

const StyledDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledFeautes = styled.span`
  font-size: 14px;
`;
const StyledCancelOpt = styled.span`
  font-size: 14px;
  color: green;
  font-weight: 700;
`;
const StyledCancelOptSubtitle = styled.span`
  font-size: 14px;
  color: green;
`;
const StyledRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 120px 0;
`;
const StyledComment = styled.span`
  font-size: 18px;
`;
const StyledPoint = styled.div`
  background-color: #0071c2;
  padding: 10px;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  border:none;
`;
const StyledOtherDetails = styled.div`
  display: flex;
  flex-direction:column;

`;
const StyledPrice = styled.div`
  font-size: 28px;
`;
const StyledTax = styled.div``;
const StyledButton = styled.button`
  background-color: #0071c2;
  color: #fff;
  height: 50px;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  margin-top:50px;
  cursor: pointer;
  &:hover {
    color: black;
    transition: 0.3s all ease-in;
  }
`;
// ------styled components end ------//

const SearchItems = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <StyledDescription>
          <StyledDescTitle>Tower Street Apartments</StyledDescTitle>
          <StyledDescDistance>500m from center</StyledDescDistance>
          <StyledDescTransport>Free airport taxi</StyledDescTransport>
          <StyledDescSubtitle>
            Studio Apartment with Air conditioning
          </StyledDescSubtitle>
          <StyledFeautes>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </StyledFeautes>
          <StyledCancelOpt>Free cancellation</StyledCancelOpt>
          <StyledCancelOptSubtitle>
            You can cancel later, so lock in this great price today!
          </StyledCancelOptSubtitle>
        </StyledDescription>
        <StyledDetails>
          <StyledRatingContainer>
            <StyledComment>Excellent</StyledComment>
            <StyledPoint>8.9</StyledPoint>
          </StyledRatingContainer>
          <StyledOtherDetails>
            <StyledPrice>$112</StyledPrice>
            <StyledTax>Includes taxes and fees</StyledTax>
          </StyledOtherDetails>
          <StyledButton>See availability</StyledButton>
        </StyledDetails>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <StyledDescription>
          <StyledDescTitle>Tower Street Apartments</StyledDescTitle>
          <StyledDescDistance>500m from center</StyledDescDistance>
          <StyledDescTransport>Free airport taxi</StyledDescTransport>
          <StyledDescSubtitle>
            Studio Apartment with Air conditioning
          </StyledDescSubtitle>
          <StyledFeautes>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </StyledFeautes>
          <StyledCancelOpt>Free cancellation</StyledCancelOpt>
          <StyledCancelOptSubtitle>
            You can cancel later, so lock in this great price today!
          </StyledCancelOptSubtitle>
        </StyledDescription>
        <StyledDetails>
          <StyledRatingContainer>
            <StyledComment>Excellent</StyledComment>
            <StyledPoint>8.9</StyledPoint>
          </StyledRatingContainer>
          <StyledOtherDetails>
            <StyledPrice>$112</StyledPrice>
            <StyledTax>Includes taxes and fees</StyledTax>
          </StyledOtherDetails>
          <StyledButton>See availability</StyledButton>
        </StyledDetails>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <StyledDescription>
          <StyledDescTitle>Tower Street Apartments</StyledDescTitle>
          <StyledDescDistance>500m from center</StyledDescDistance>
          <StyledDescTransport>Free airport taxi</StyledDescTransport>
          <StyledDescSubtitle>
            Studio Apartment with Air conditioning
          </StyledDescSubtitle>
          <StyledFeautes>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </StyledFeautes>
          <StyledCancelOpt>Free cancellation</StyledCancelOpt>
          <StyledCancelOptSubtitle>
            You can cancel later, so lock in this great price today!
          </StyledCancelOptSubtitle>
        </StyledDescription>
        <StyledDetails>
          <StyledRatingContainer>
            <StyledComment>Excellent</StyledComment>
            <StyledPoint>8.9</StyledPoint>
          </StyledRatingContainer>
          <StyledOtherDetails>
            <StyledPrice>$112</StyledPrice>
            <StyledTax>Includes taxes and fees</StyledTax>
          </StyledOtherDetails>
          <StyledButton>See availability</StyledButton>
        </StyledDetails>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <StyledDescription>
          <StyledDescTitle>Tower Street Apartments</StyledDescTitle>
          <StyledDescDistance>500m from center</StyledDescDistance>
          <StyledDescTransport>Free airport taxi</StyledDescTransport>
          <StyledDescSubtitle>
            Studio Apartment with Air conditioning
          </StyledDescSubtitle>
          <StyledFeautes>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </StyledFeautes>
          <StyledCancelOpt>Free cancellation</StyledCancelOpt>
          <StyledCancelOptSubtitle>
            You can cancel later, so lock in this great price today!
          </StyledCancelOptSubtitle>
        </StyledDescription>
        <StyledDetails>
          <StyledRatingContainer>
            <StyledComment>Excellent</StyledComment>
            <StyledPoint>8.9</StyledPoint>
          </StyledRatingContainer>
          <StyledOtherDetails>
            <StyledPrice>$112</StyledPrice>
            <StyledTax>Includes taxes and fees</StyledTax>
          </StyledOtherDetails>
          <StyledButton>See availability</StyledButton>
        </StyledDetails>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <StyledDescription>
          <StyledDescTitle>Tower Street Apartments</StyledDescTitle>
          <StyledDescDistance>500m from center</StyledDescDistance>
          <StyledDescTransport>Free airport taxi</StyledDescTransport>
          <StyledDescSubtitle>
            Studio Apartment with Air conditioning
          </StyledDescSubtitle>
          <StyledFeautes>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </StyledFeautes>
          <StyledCancelOpt>Free cancellation</StyledCancelOpt>
          <StyledCancelOptSubtitle>
            You can cancel later, so lock in this great price today!
          </StyledCancelOptSubtitle>
        </StyledDescription>
        <StyledDetails>
          <StyledRatingContainer>
            <StyledComment>Excellent</StyledComment>
            <StyledPoint>8.9</StyledPoint>
          </StyledRatingContainer>
          <StyledOtherDetails>
            <StyledPrice>$112</StyledPrice>
            <StyledTax>Includes taxes and fees</StyledTax>
          </StyledOtherDetails>
          <StyledButton>See availability</StyledButton>
        </StyledDetails>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <StyledDescription>
          <StyledDescTitle>Tower Street Apartments</StyledDescTitle>
          <StyledDescDistance>500m from center</StyledDescDistance>
          <StyledDescTransport>Free airport taxi</StyledDescTransport>
          <StyledDescSubtitle>
            Studio Apartment with Air conditioning
          </StyledDescSubtitle>
          <StyledFeautes>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </StyledFeautes>
          <StyledCancelOpt>Free cancellation</StyledCancelOpt>
          <StyledCancelOptSubtitle>
            You can cancel later, so lock in this great price today!
          </StyledCancelOptSubtitle>
        </StyledDescription>
        <StyledDetails>
          <StyledRatingContainer>
            <StyledComment>Excellent</StyledComment>
            <StyledPoint>8.9</StyledPoint>
          </StyledRatingContainer>
          <StyledOtherDetails>
            <StyledPrice>$112</StyledPrice>
            <StyledTax>Includes taxes and fees</StyledTax>
          </StyledOtherDetails>
          <StyledButton>See availability</StyledButton>
        </StyledDetails>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default SearchItems;
