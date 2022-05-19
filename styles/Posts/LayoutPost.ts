import styled from "styled-components";

interface LayoutPostProps {
  imageUrl?: string;
}

const LayoutPost = styled.div<LayoutPostProps>`
  .banner {
    content: "";
    height: 360px;
    background-image: url(${({ imageUrl }) => imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .overlay {
      content: "";
      height: 100%;
      background: linear-gradient(to bottom, transparent, #000);
    }
  }
  header {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        color: var(--main-purple);
        font-weight: 500;
      }
    }
    .dot {
      content: "";
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background-color: var(--salmon);
      margin: 0 0.5rem;
    }
  }
  main {
    width: 80%;
    margin: 0 auto 2rem auto;
    padding: 2rem 1rem;
    hr {
      margin-top: 2rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    img {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;

export default LayoutPost;
