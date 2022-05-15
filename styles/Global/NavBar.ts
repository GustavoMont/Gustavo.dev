import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #080808;
  padding: 1rem;
  color: #fff;
  * {
    display: flex;
  }
  div {
    align-items: center;
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
