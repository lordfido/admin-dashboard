import React, { PropsWithChildren } from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps {
  onClick: () => void;
}

interface InputProps {
  type: 'reset' | 'submit'
}

type Props = ButtonProps | InputProps;

const Button = ({ children, ...props }: PropsWithChildren<Props>) => (
  <ButtonWrapper
    // eslint-disable-next-line no-restricted-syntax
    onClick={ 'onClick' in props ? props.onClick : undefined }
    // eslint-disable-next-line no-restricted-syntax
    type={ 'type' in props ? props.type : 'button' }
  >
    { children }
  </ButtonWrapper>
);

export default Button;
