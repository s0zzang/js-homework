import styled from "styled-components";

const H2Styled = styled.h2`
  margin: 1em 0;
`;

const Title = ({ children }) => {
  return <H2Styled>{children}</H2Styled>;
};

export default Title;
