import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  inset: 30px;
  bottom: auto;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  h1 {
    font-size: 40px;
  }
  nav ul {
    display: flex;
    justify-content: center;
    gap: 0.8em;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Todo List :)</h1>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="list">TodoList</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
