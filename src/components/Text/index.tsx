import React, { PropsWithChildren } from 'react';
import { Body1, Title1 } from './styles';

interface Props {
  className?: string;
  type: 'title1' | 'body1';
}

const Text = ({ children, className, type = 'body1' }: PropsWithChildren<Props>): JSX.Element => {
  let Component = Body1;
  switch (type) {
    case 'title1':
      Component = Title1;
      break;

    default:
  }

  return (
    <Component className={ ['Text', className].join(' ') }>
      { children }
    </Component>
  );
};

export default Text;
