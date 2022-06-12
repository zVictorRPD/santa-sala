import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const Container = styled.div`
  margin: 50px auto;
  padding: 0 15px;
  width: 100%;
  max-width: 100vw;
`;
export const FluxContainer = styled(ScrollContainer)`
  overflow-x: auto;
  overflow-y: auto;
  max-height: 100%;
  height: 100%;
  max-width: 100%;
  width: 100%;
  box-shadow: 0px 13px 10px 3px rgb(0 0 0 / 40%);

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #77449c;
  }
`;
export const Overflow = styled.div`
  width: 2000px;
  height: 94vh;
  padding: 0 15px;
`;

export const SubjectCard = styled.div`
  min-height: 130px;
  display: flex;
  flex-direction: column;
`;

export const SubjectCardHeader = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 0;
  background: ${(props) => props.stateColor};
`;
export const SubjectCardBody = styled.div`
  text-align: center;
  padding: 0 4px;
  margin: auto;
  width: 100%;
`;

export const SubjectCardFooter = styled.ul`
  margin: 0;
  padding: 0;
  background: #fff;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.06);
  &:before {
    display: table;
    content: "";
  }
  li {
    width: 33.333%;
    float: left;
    margin: 5px 0;
    color: rgba(0,0,0,.45);
    text-align: center;
    display: flex;
    &:not(:last-child) {
      border-right: 1px solid rgba(0,0,0,.06);
    }
    span{
      width: 100%;
      font-size: 16px;
    }
  }
`;
