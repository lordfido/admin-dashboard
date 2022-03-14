import styled from 'styled-components';
import { flexCentered } from '../../../constants/styles/mixins';
import { GUEST_BG, GUEST_BG_GRADIENT } from '../../../constants/styles/skin';

export const GuestLayoutWrapper = styled.div`
  ${ flexCentered }
  background-color: ${ GUEST_BG };
  background: ${ GUEST_BG_GRADIENT };
  height: 100%;
`;
GuestLayoutWrapper.displayName = 'GuestLayoutWrapper';
