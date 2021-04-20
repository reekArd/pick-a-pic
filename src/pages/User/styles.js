import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 200px auto;
`;

export const ContentContainer = styled.div`
  width: 55%;
  margin: 100px auto;

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    padding: 5px 0;
    border-bottom: 1px solid lightgrey;
  }

  li {
    display: flex;
    align-items: center;
    margin-right: 50px;
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  margin-right: 5px;
`;
