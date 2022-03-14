import styled from 'styled-components';
import { flexCentered } from '../../../constants/styles/mixins';
import { GUEST_BG } from '../../../constants/styles/skin';

export const GuestLayoutWrapper = styled.div`
  ${ flexCentered }
  background-color: ${ GUEST_BG };
  height: 100%;
`;
GuestLayoutWrapper.displayName = 'GuestLayoutWrapper';
