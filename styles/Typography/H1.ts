import styled from "styled-components";

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: var(--${({ color }) => color || "main-purple"});
  text-align: center;
`;

export default H1;
