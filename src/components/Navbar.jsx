import styled from "styled-components";
// ------styled components start ------//
const Container = styled.div`
    width: 100%;
    background-color: #${props => props.bg};
`;
const NavContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:1024px;
    margin:5px auto;
    align-items: center;
    justify-content: space-between;
    color:#fff;
    
    height: 50px;
    
`;
const Logo = styled.div`
    margin-left:5px;
    font-weight:600;
    font-size:18px;
`;
const NavItems = styled.div`
    display: flex;
    width: 10rem;
    align-items: center;
    justify-content: space-evenly;
   

`;
const NavButton = styled.button`
    margin: 5px;
    border:none;
    padding: 7px;
    cursor: pointer;
    border-radius:5px;
    font-size:14px;
    font-weight:600;
    background-color: #${props => props.bg};
    &:hover {
        background-color: #${props => props.bg2};
        border:1px solid #fff;
        color:#fff;
        transition:0.3s all ease-in;
    }
`;
// ------styled components end ------//

const Navbar = () => {
  return (
    <Container bg="003580">
        <NavContainer >
          <Logo>CodeGuruOzzy@Book.com</Logo>
          <NavItems>
            <NavButton bg="fff" bg2="003580">Register</NavButton>
            <NavButton bg="fff" bg2="003580">Log in</NavButton>
          </NavItems>
        </NavContainer>
    </Container>
  )
}

export default Navbar