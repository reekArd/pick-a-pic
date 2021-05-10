import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BlurryDiv = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
`;

export const CenteringDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const OuterSlider = styled(Slider)`
  height: 100%;

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }
`;

export const OuterDiv = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InnerSlider = styled(Slider)`
  height: 75%;
  text-align: center;
  display: flex;
  width: 100;

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
    width: 100%;
  }

  .slick-prev {
    left: 15%;
  }

  .slick-next {
    right: 15%;
  }
`;

export const NumberDiv = styled.div`
  background: blue;
  height: 500px;
  width: 300px !important;
`;