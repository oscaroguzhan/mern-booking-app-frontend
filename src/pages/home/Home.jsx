import styled from "styled-components";
import DestinationsList from "../../components/DestinationsList";
import Featured from "../../components/Featured";
import FeaturedList from "../../components/FeaturedList";
import Footer from "../../components/Footer";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

// ------styled components start ------//
const HomeContainer = styled.div``;
const FeaturedTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-weight: 500;
`;
// ------styled components end ------//
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <FeaturedTitle> Browse by property type</FeaturedTitle>
        <FeaturedList />
        <FeaturedTitle> Great destinations for a beach trip</FeaturedTitle>
        <DestinationsList />
        <Footer/>
      </HomeContainer>
    </>
  );
};

export default Home;
