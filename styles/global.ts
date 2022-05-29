import styled from "styled-components";

export const Container = styled.div`
  margin: 50px auto;
  padding: 0 15px;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 540px;
    padding: 0;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding: 0;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    padding: 0;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    padding: 0;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
    padding: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
