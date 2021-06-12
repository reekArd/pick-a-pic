import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  PhotoCardContainer,
  SmallProfilePicture,
  PhotoCardHeader,
  PhotoCardFooter,
  Likes,
  StyledHeartIcon,
  StyledAddIcon,
} from './PhotoCard.styles';

const PhotoCard = props => {
  return (
    <PhotoCardContainer>
      <PhotoCardHeader to={`/users/${props.user.username}`}>
        <SmallProfilePicture
          src={props.user.profile_image.medium}
          alt={props.user.username}
        />
        {props.user.username}
      </PhotoCardHeader>
      <img
        onClick={props.handlePhotoClick}
        src={props.urls.small}
        alt={props.alt_description}
      />
      <PhotoCardFooter>
        <Likes>
          <StyledHeartIcon />
          {props.likes}
        </Likes>
        <div onClick={props.openAddToCollectionModal}>
          <StyledAddIcon />
        </div>
      </PhotoCardFooter>
    </PhotoCardContainer>
  );
};

const mapDispatchToProps = state => ({
  settings: state.settings,
});

export default connect(mapDispatchToProps)(withRouter(PhotoCard));