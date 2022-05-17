import styled from "styled-components";

interface CardProps {
  clickable?: boolean;
}

const Card = styled.div<CardProps>`
  background-color: #fff;
  width: 30%;
  border-radius: 10px;
  padding: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 1.8rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  .image-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 180px;
    margin-bottom: 2rem;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  h2 {
    font-weight: 500;
    color: var(--main-purple);
  }
  p {
    font-weight: 300;
    color: var(--light-purple);
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`;
export default Card;
