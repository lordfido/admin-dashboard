import React from 'react';
import { useSelector } from 'react-redux';
import { DASHBOARD, SETTINGS } from '../../../constants/clientRoutes';
import { getUserInfo } from '../../../store/selectors';
import {
  Content,
  HeaderLogo,
  HeaderUser,
  Header,
  MainLayoutWrapper,
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  Main,
  MainContent,
  UserName,
  UserRole
} from './styles';

interface ChildrenProps {
  Content: typeof MainContent;
}

interface Props {
  children: (props: ChildrenProps) => JSX.Element;
}

const MainLayout = ({ children }: Props): JSX.Element => {
  const user = useSelector(getUserInfo);

  return (
    <MainLayoutWrapper className="MainLayout">
      <Header className="MainLayout-header">
        <HeaderLogo className="MainLayout-headerLogo">
          dashboard
        </HeaderLogo>

        <HeaderUser className="MainLayout-headerUser">
          <UserName>{ user.userName }</UserName>
          <UserRole>{ user.role?.name }</UserRole>
        </HeaderUser>
      </Header>

      <Content className="MainLayout-content">
        <Sidebar className="MainLayout-sidebar">
          <SidebarNav className="MainLayout-sidebarNav">
            <SidebarNavItem className="MainLayout-sidebarNavItem" to={ DASHBOARD }>Dashboard</SidebarNavItem>
            <SidebarNavItem className="MainLayout-sidebarNavItem" to={ SETTINGS }>Settings</SidebarNavItem>
          </SidebarNav>
        </Sidebar>

        <Main className="MainLayout-main">
          { children({ Content: MainContent }) }
        </Main>
      </Content>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
