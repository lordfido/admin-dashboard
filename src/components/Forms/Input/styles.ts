import styled from 'styled-components';
import {
  INPUT_FIELD_BG,
  INPUT_FIELD_BORDER,
  INPUT_FIELD_COLOR,
  INPUT_LABEL_COLOR
} from '../../../constants/styles/skin';

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
InputWrapper.displayName = 'InputWrapper';

export const InputLabel = styled.span`
  color: ${ INPUT_LABEL_COLOR };
  font-size: 12px;
`;
InputLabel.displayName = 'InputLabel';

export const InputField = styled.input`
  background-color: ${ INPUT_FIELD_BG };
  border: none;
  border-bottom: 1px solid ${ INPUT_FIELD_BORDER };
  color: ${ INPUT_FIELD_COLOR };
  font-size: 16px;
  padding: 4px 0px;
`;
InputField.displayName = 'InputField';
