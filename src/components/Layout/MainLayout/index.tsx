import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <div className="MainLayout">
    { children }
  </div>
);

export default MainLayout;
