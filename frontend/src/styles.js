import Sytld from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: ligher;
    color: yellow;
  }
`;

export const Image = styled.div`
    z-index: 2,
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        heigth: 75;
        object-fit: cover;
    }
`;
