import styled from 'styled-components';
import { CARD_BG, CARD_COLOR, CARD_HEADING_BG, CARD_HEADING_COLOR, CARD_SHADOW } from '../../constants/styles/skin';

export const CardWrapper = styled.div`
  background-color: ${ CARD_BG };
  border-radius: 4px;
  box-shadow: 0px 0px 15px 1px ${ CARD_SHADOW };
  color: ${ CARD_COLOR };
`;
CardWrapper.displayName = 'CardWrapper';

export const CardHeading = styled.div`
  background-color: ${ CARD_HEADING_BG };
  color: ${ CARD_HEADING_COLOR };
  font-weight: bold;
  padding: 12px 16px;
`;
CardHeading.displayName = 'CardHeading';

export const CardContent = styled.div`
  padding: 12px 16px;
`;
CardContent.displayName = 'CardContent';
