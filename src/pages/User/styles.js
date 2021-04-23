import styled from 'styled-components';
import { ReactComponent as PhotoIcon } from '../../assets/images/photo-icon.svg';
import { ReactComponent as CollectionsIcon } from '../../assets/images/collections-icon.svg';
import { ReactComponent as StatsIcon } from '../../assets/images/stats-icon.svg';

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

export const StyledPhotoIcon = styled(PhotoIcon)`
  margin-right: 5px;
  padding-top: 3px;
`;

export const StyledCollectionsIcon = styled(CollectionsIcon)`
  margin-right: 5px;
`;

export const StyledStatsIcon = styled(StatsIcon)`
  margin-right: 5px;
`;
