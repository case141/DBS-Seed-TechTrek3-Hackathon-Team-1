import styled from "styled-components";

export const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;

export const Grid = styled.div`
  margin: 20px 50px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;
