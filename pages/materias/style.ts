import styled from "styled-components";
import ScrollContainer from 'react-indiana-drag-scroll'

export const Container = styled.div`
  margin: 50px auto;
  padding: 0 15px;
  width: 100%;
  max-width: 95vw;
`;
export const FluxContainer = styled(ScrollContainer)`
  overflow-x: auto;
  max-width: 100%;
  width: 100%;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    height: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #77449C;
  }
`;
export const Overflow = styled.div`
  width: 2000px;
`;

export const SubjectCard = styled.div`
  min-height: 130px;
  display: flex;
  flex-direction: column;
`;
export const SubjectCardHeader = styled.div`
  width: 100%;
  background: #77449c;
  text-align: center;
  color: #fff;
  padding: 3px 0;
`;
export const SubjectCardBody = styled.div`
  text-align: center;
  padding: 0 4px;
  margin: auto;
  width: 100%;
`;
