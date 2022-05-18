import styled from "styled-components";

interface CardProps {
  clickable?: boolean;
}

const Card = styled.div<CardProps>`
  background-color: #fff;
  width: 30%;
  border-radius: 10px;
  padding: 1rem 2rem;
  padding-bottom: 2rem;
  margin-bottom: 1.8rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: 1s ease-in-out all;
  ::after,
  ::before {
    content: "";
    width: 0%;
    height: 0%;
    position: absolute;
    border-radius: inherit;
    transition: 1s ease-in-out all;
    border-width: 0.3rem;
    border-color: var(--salmon);
    opacity: 0;
  }
  ::before {
    bottom: 0;
    right: 0;
    border-right-style: solid;
    border-bottom-style: solid;
  }
  ::after {
    top: 0;
    left: 0;
    border-top-style: solid;
    border-left-style: solid;
  }
  &:hover {
    box-shadow: 0px 8px 20px var(--pink);
    ::before,
    ::after {
      width: 99%;
      height: 98.9%;
      opacity: 1;
    }
    .image-container {
      img {
        transform: scale(1.2);
        filter: grayscale(0%);
      }
    }
  }
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  .image-container {
    overflow: hidden;

    display: flex;
    align-items: center;
    align-items: flex-start;
    width: 100%;
    height: 190px;
    margin-bottom: 2rem;
    border-radius: 0.8rem;
    img {
      width: 100%;
      border-radius: inherit;
      transform: scale(1);
      transition: 0.6s all ease;
      filter: grayscale(40%) blur(1px);
    }
  }
  h2 {
    font-weight: 500;
    color: var(--main-purple);
  }
  .my-infos {
    font-weight: 300;
    color: var(--light-purple);
    font-size: 0.9rem;
    margin-top: 0.25rem;
    margin-top: 1rem;
  }
`;
export default Card;
