import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Text from '../../components/Text';

const Dashboard = (): JSX.Element => (
  <MainLayout>
    { ({ Content }) => (
      <Content
        className="Dashboard"
        title={ <Text type="title2">Secret dashboard</Text> }
      >
        Dashboard content
      </Content>
    ) }
  </MainLayout>
);

export default Dashboard;
