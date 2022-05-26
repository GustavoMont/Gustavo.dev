import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #080808;
  padding: 1rem 2rem;
  color: #fff;
  * {
    display: flex;
  }
  div {
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover {
      color: var(--pink);
    }
  }
  ul {
    list-style: none;
    align-items: center;
    li {
      margin-left: 1rem;
    }
  }
`;

export default NavBar;
