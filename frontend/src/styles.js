import styled from "styled-components";

export const About = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

        heigth: 50pxpx;
        width: 100px;
        object-fit: cover;
    };
    border: 4px solid white;
    background:white;
    padding-right:30px;
`;

export const Navigation = styled.div`
  background: #446084;
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
`;

export const PageConfiguration = styled.div`
  margin-left: 5vh;
  margin-right: 5vh;
  background: #ffffff;
  padding: 0;
`;

export const StyledLinks = styled.div`
  padding: 1rem 1rem;
  top: 0;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
