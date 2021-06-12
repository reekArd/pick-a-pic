import {
  Container,
  HeaderDiv,
  StyledBinIcon,
  StyledSlider,
  StyledImg,
} from './FeaturedCollection.styles';

const FeaturedCollection = props => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Container onClick={props.handleClick}>
      <HeaderDiv>
        <h4>{props.title}</h4>
        <StyledBinIcon />
      </HeaderDiv>
      <StyledSlider {...settings}>
        {props.collectionPhotos.map(item => {
          return (
            <StyledImg
              src={item.urls.small}
              alt={item.alt_description}
              key={item.id}
            />
          );
        })}
      </StyledSlider>
    </Container>
  );
};

export default FeaturedCollection;