import React from 'react';
import { Repository as RepositoryType } from '../../store/types';
import { toDecimals } from '../../utils/formatters';
import {
  RepositoryOwner,
  RepositoryBadges,
  RepositoryName,
  RepositoryWrapper,
  RepositoryAvatar,
  RepositoryOwnerName
} from './styles';

interface Props {
  repository: RepositoryType;
}

const Repository = ({ repository }: Props): JSX.Element => (
  <RepositoryWrapper>
    <RepositoryOwner>
      <RepositoryAvatar alt={ `${ repository.owner.login }'s image` } src={ repository.owner.avatar_url } />
      <RepositoryOwnerName>{ repository.owner.login }</RepositoryOwnerName>
    </RepositoryOwner>

    <RepositoryName>
      <p>{ repository.name }</p>
      { repository.website && <p>{ repository.website }</p> }
      <p>{ repository.url }</p>
    </RepositoryName>

    <RepositoryBadges>
      <p>Stars: { toDecimals(repository.score, 0) }</p>
      <p>Forks: { toDecimals(repository.forks, 0) }</p>
      <p>Watchers: { toDecimals(repository.watchers, 0) }</p>
    </RepositoryBadges>
  </RepositoryWrapper>
);

export default Repository;
