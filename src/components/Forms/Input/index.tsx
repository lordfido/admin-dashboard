import React, { PropsWithChildren } from 'react';
import { InputField, InputLabel, InputWrapper } from './styles';

interface Props {
  defaultValue?: string;
  id: string;
  onChange?: (newValue: string) => void;
  type?: 'text' | 'password';
}

const Input = ({
  children,
  defaultValue,
  id,
  onChange,
  type = 'text'
}: PropsWithChildren<Props>): JSX.Element => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(ev.target.value);
  };

  return (
    <InputWrapper htmlFor={ id }>
      <InputLabel>{ children }</InputLabel>

      <InputField
        defaultValue={ defaultValue }
        id={ id }
        onChange={ handleChange }
        type={ type }
      />
    </InputWrapper>
  );
};

export default Input;
