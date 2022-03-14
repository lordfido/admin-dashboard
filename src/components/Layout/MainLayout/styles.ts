import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { flexCentered } from '../../../constants/styles/mixins';
import { NAV_BG, NAV_BG_ACTIVE, NAV_COLOR, USER_NAME_COLOR, USER_ROLE_COLOR } from '../../../constants/styles/skin';
import Card from '../../Card';
import { CardContent } from '../../Card/styles';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
MainLayoutWrapper.displayName = 'MainLayoutWrapper';

export const Header = styled.header`
  ${ flexCentered }
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 24px;
  height: 80px;
`;
Header.displayName = 'Header';

export const HeaderLogo = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 0px 24px;
`;
HeaderLogo.displayName = 'HeaderLogo';

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;
HeaderUser.displayName = 'HeaderUser';

export const UserName = styled.span`
  color: ${ USER_NAME_COLOR };
  font-size: 14px;
  font-weight: bold;
`;
UserName.displayName = 'UserName';

export const UserRole = styled.span`
  color: ${ USER_ROLE_COLOR };
  font-size: 12px;
  margin-top: -4px;
`;
UserRole.displayName = 'UserRole';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  overflow: hidden;
`;
Content.displayName = 'Content';

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
`;
Sidebar.displayName = 'Sidebar';

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 12px 0px;
`;
SidebarNav.displayName = 'SidebarNav';

export const SidebarNavItem = styled(NavLink)`
  background-color: ${ NAV_BG };
  color: ${ NAV_COLOR };
  font-size: 14px;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;

  &.active,
  &:active,
  &:hover {
    background-color: ${ NAV_BG_ACTIVE };
  }
`;
SidebarNavItem.displayName = 'SidebarNavItem';

export const Main = styled.main`
  flex: 1;
  padding: 0 20px;
  max-height: 100%;
`;
Main.displayName = 'Main';

export const MainContent = styled(Card)`
  border-radius: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  max-width: 1280px;
  margin: 0px auto;

  ${ CardContent } {
    overflow-y: auto;
  }
`;
MainContent.displayName = 'MainContent';
