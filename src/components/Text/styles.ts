import styled from 'styled-components';
import { TITLE_BORDER } from '../../constants/styles/skin';

export const Title1 = styled.h1`
  border-bottom: 1px solid ${ TITLE_BORDER };
  font-size: 20px;
  margin-bottom: 24px;
  padding-bottom: 12px;
`;
Title1.displayName = 'Title1';

export const Body1 = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;
Body1.displayName = 'Body1';
