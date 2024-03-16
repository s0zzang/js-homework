import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Header from "@components/Header";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  padding-top: 90px;
`;

const Layout = () => {
  return (
    <Container className="container">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
