import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Text from '../../components/Text';

const Settings = (): JSX.Element => (
  <MainLayout>
    { ({ Content }) => (
      <Content
        className="Settings"
        title={ <Text type="title2">Settings</Text> }
      >
        Settings content
      </Content>
    ) }
  </MainLayout>
);

export default Settings;
