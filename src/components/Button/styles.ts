import styled from 'styled-components';
import { BUTTON_BG, BUTTON_COLOR } from '../../constants/styles/skin';

export const ButtonWrapper = styled.button`
  appearance: none;
  background-color: ${ BUTTON_BG };
  border: none;
  border-radius: 4px;
  color: ${ BUTTON_COLOR };
  cursor: pointer;
  font-size: 12px;
  padding: 6px 24px;
`;
ButtonWrapper.displayName = 'ButtonWrapper';
