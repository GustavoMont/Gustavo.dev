import styled from "styled-components";

const SpecialLink = styled.span`
  color: inherit;
  font-weight: 500;
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  transition: 0.4s ease all;
  &:hover {
    color: var(--secondary-pink);
    ::after,
    ::before {
      width: 100%;
    }
  }
  ::after,
  ::before {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    border-radius: 2px;
    position: absolute;
    bottom: -0.5rem;
  }
  ::after {
    background-color: var(--secondary-pink);
    transition: 0.5s ease all;
  }
  ::before {
    background-color: #fff;
    transition: 0.2s ease all;
  }
`;

export default SpecialLink;
