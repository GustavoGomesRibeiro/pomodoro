import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div``;
export const Title = styled.div`
  font-size: 32px;
  font-family: "Roboto Mono", monospace;
  top: 0px;
  position: absolute;
  margin-top: 50px;
`;

export const Session = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;
  width: 200px;
  border-radius: 100px;
  border: solid 4px;
  div {
    text-align: center;
  }
`;

export const Timer = styled.div``;
export const Text = styled.div``;

export const Control = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 10px;
  margin-top: 35px;
`;

export const ControlBreak = styled.div`
  margin-right: 20px;
`;
export const ControlSession = styled.div``;
