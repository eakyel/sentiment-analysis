import styled from "styled-components";
import { menus } from "constant";
import Menu from "./Menu";
import { spaces } from "theme";

const Layout = ({ children }) => {
  return (
    <Main>
      <Menu menus={menus} />
      <Content>{children}</Content>
    </Main>
  );
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${spaces[8]};
`;

const Content = styled.div`
  padding-top: ${spaces[10]};
  width: 100%;
  max-width: 1280px;
`;

export default Layout;
