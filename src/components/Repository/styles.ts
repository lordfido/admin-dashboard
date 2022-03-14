import styled from 'styled-components';
import { flexCentered } from '../../constants/styles/mixins';
import { CARD_BG, CARD_SHADOW } from '../../constants/styles/skin';

export const RepositoryWrapper = styled.div`
  align-items: center;
  background-color: ${ CARD_BG };
  display: flex;
  padding: 12px 0px;
  transition: box-shadow 0.3s;
  width: 100%;
  z-index: 1;
  
  &:hover {
    box-shadow: 0px 0px 15px 1px ${ CARD_SHADOW };
    z-index: 2;
  }
`;
RepositoryWrapper.displayName = 'RepositoryWrapper';

export const RepositoryOwner = styled.div`
  ${ flexCentered }
  width: 220px;
`;
RepositoryOwner.displayName = 'RepositoryOwner';

export const RepositoryAvatar = styled.img`
  border-radius: 50%;
  width: 48px;
`;
RepositoryAvatar.displayName = 'RepositoryAvatar';

export const RepositoryOwnerName = styled.div``;
RepositoryOwnerName.displayName = 'RepositoryOwnerName';

export const RepositoryName = styled.div`
  flex: 1;
  padding: 0px 12px;
`;
RepositoryName.displayName = 'RepositoryName';

export const RepositoryBadges = styled.div`
  padding-right: 12px;
  width: 156px;
`;
RepositoryBadges.displayName = 'RepositoryBadges';

export const RepositoryActions = styled.div``;
RepositoryActions.displayName = 'RepositoryActions';
