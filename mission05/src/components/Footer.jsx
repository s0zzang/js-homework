import styled from "styled-components";

const FooterStyled = styled.footer`
  color: #999;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 11px;
  text-transform: uppercase;
  margin-top: auto;
  padding-top: 3em;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>Front-End School 9기</p>
    </FooterStyled>
  );
};

export default Footer;
