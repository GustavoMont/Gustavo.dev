import styled from "styled-components";

const Divider = styled.hr`
  border-color: ${({ color }) =>
    color ? `var(--${color})` : "rbga(0,0,0,0.2)"};
  margin: 1rem 0 3rem 0;
`;

export default Divider;
