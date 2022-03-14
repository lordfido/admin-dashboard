
import React, { PropsWithChildren } from 'react';
import { CardContent, CardHeading, CardWrapper } from './styles';

interface Props {
  className?: string;
  title?: JSX.Element;
}

const Card = ({ children, className, title }: PropsWithChildren<Props>): JSX.Element => (
  <CardWrapper className={ ['Card', className].join(' ') }>
    { !!title && (
      <CardHeading className="Card-heading">
        { title }
      </CardHeading>
    ) }

    <CardContent className="Card-content">
      { children }
    </CardContent>
  </CardWrapper>
);

export default Card;

