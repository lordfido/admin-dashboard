import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Repository from '../../components/Repository';
import Text from '../../components/Text';
import { useAsyncAction } from '../../hooks/asyncAction';
import { getRepositories as getRepositoriesAction } from '../../store/actions';
import { getRepositories } from '../../store/selectors';

const Dashboard = (): JSX.Element => {
  const { items } = useAsyncAction(getRepositoriesAction, getRepositories);
  
  return (
    <MainLayout>
      { ({ Content }) => (
        <Content
          className="Dashboard"
          title={ <Text type="title2">Secret dashboard</Text> }
        >
          { items.map(repo => (
            <Repository key={ repo.id } repository={ repo }/>
          )) }
        </Content>
      ) }
    </MainLayout>
  );};

export default Dashboard;
