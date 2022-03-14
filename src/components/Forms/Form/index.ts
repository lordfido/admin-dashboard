import styled from 'styled-components';

const Form = styled.form.attrs(() => ({ noValidate: true }))`
  margin: 0;
  margin-top: 12px;
  padding: 0;
`;
Form.displayName = 'Form';

export default Form;
