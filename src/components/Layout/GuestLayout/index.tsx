import React, { PropsWithChildren } from 'react';
import { GuestLayoutWrapper } from './styles';

const GuestLayout = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <GuestLayoutWrapper className="GuestLayout">
    { children }
  </GuestLayoutWrapper>
);

export default GuestLayout;
