import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Form from '../../components/Forms/Form';
import Input from '../../components/Forms/Input';
import Text from '../../components/Text';
import { loginAction } from '../../store/actions';
import { LoginWrapper } from './styles';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeEmail = (newValue: string) => {
    setEmail(newValue);
  };

  const onChangePassword = (newValue: string) => {
    setPassword(newValue);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginAction(email, password));
  };

  return (
    <LoginWrapper className="Login">
      <Text type="title1">Sign In</Text>

      <Form onSubmit={ onSubmit }>
        <Input
          defaultValue={ email }
          id="LoginForm-email"
          onChange={ onChangeEmail }
        >
          Email
        </Input>

        <Input
          defaultValue={ password }
          id="LoginForm-password"
          onChange={ onChangePassword }
          type="password"
        >
          Password
        </Input>

        <Button type="submit">
          Sign In
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
