import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.main};
  box-sizing: border-box;
  color: ${props => props.theme.secondary};
`;

export const lightThemeStyles = {
  main: '#efefef',
  secondary: '#0e0e0e',
  third: '#e6e6e6',
  text: '#000',
  cardBackground: '#fff',
  borders: 'lightgrey',
  inactiveLinks: '#b8b8b8',
  labelsBackground: '#d8d8d8',
  labelsHover: '#c2c2c2',
  iconBackground: '#e6e6e6',
  iconHover: '#cfcfcf',
  spanHover: '#f2f2f2',
};

export const darkThemeStyles = {
  main: '#1b1b1b',
  secondary: '#efefef',
  third: '#343434',
  text: '#efefef',
  cardBackground: '#272727',
  borders: '#343434',
  inactiveLinks: '#5c5c5c',
  labelsBackground: '#343434',
  labelsHover: '#484848',
  iconBackground: '#484848',
  iconHover: '#5a5a5a',
  spanHover: '#343434',
};
