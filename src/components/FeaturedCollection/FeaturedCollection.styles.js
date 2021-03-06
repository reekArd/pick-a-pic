import styled from 'styled-components';
import Slider from 'react-slick';
import { ReactComponent as BinIcon } from '../../assets/images/bin-icon.svg';

export const Container = styled.div`
  margin-bottom: 15px;
  border: 1px solid ${props => props.theme.borders};
  border-radius: 5px;
  height: auto;
  background: ${props => props.theme.cardBackground};
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
    0 1px 3px -1px rgba(0, 0, 0, 0.3);
`;

export const StyledBinIcon = styled(BinIcon)`
  display: none;
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: relative;

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
    max-width: 250px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &:hover ${StyledBinIcon} {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    right: 0;
    margin-right: 10px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slider {
    border-radius: 5px;
  }

  .slick-track {
    height: 250px;
    border-radius: 5px;
  }
`;

export const StyledImg = styled.img`
  height: 250px;
  object-fit: cover;
  margin: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;
