
import styled from "styled-components";
import logo from "../assets/ozzylogo.png";


// ------styled components start ------//
const Container = styled.div`
    width: 100%;
    height: 200px;
    background-color:#003580;
    display: flex;
    flex-direction:column;
    color:#fff;
`;
const Title = styled.h2``;
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    width: 100%;
    margin: auto 20px;
    
`;
const FooterSection = styled.div`
    width: 100%;
    

`;
const InnerTitle = styled.h4`
    font-weight:400;


`;
const LogoImg = styled.img`
    width: 100px;
    object-fit:cover;
    height: 100px;
    margin:20px 30px;
    border-radius:10px;
    cursor: pointer;


`;
const LinksList = styled.div`
    display: flex;
    flex-direction:column;
    
    gap:5px;
    margin-top:20px;
    

`;
const LinkItem = styled.a`
    font-size:14px;
    font-weight:300;
    cursor: pointer;
    &:hover {
        text-decoration:underline;
        transition:0.3 all ease-out;
        
    }

`;
// ------styled components end ------//
const Footer = () => {
    
  return (
    <Container>
        <InnerContainer>
            <FooterSection>
                <InnerTitle>You want to see more</InnerTitle>
                <LogoImg
                src={logo}/>
            </FooterSection>
            <FooterSection>
            
            <InnerTitle>Useful Links</InnerTitle>
                <LinksList>
                    <LinkItem>Car rental</LinkItem>
                    <LinkItem>Restaurants</LinkItem>
                    <LinkItem>Travel Agents</LinkItem>
                    <LinkItem>Flight Finder</LinkItem>
                    
                </LinksList>
            </FooterSection>
            <FooterSection>
            <InnerTitle>Contact</InnerTitle>
            <LinksList>
                    <LinkItem>Customer Service</LinkItem>
                    <LinkItem>Partner Help</LinkItem>
                    <LinkItem>Careers</LinkItem>
                    <LinkItem>Terms & conditions</LinkItem>
                    
                </LinksList>
            </FooterSection>
        </InnerContainer>
    </Container>
  )
}

export default Footer