import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: var(--${({ color }) => color || "main-purple"});
`;

export default H2;
